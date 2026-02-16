import * as crypto from 'crypto';
import { promisify } from 'util';

const ALGORITHM = 'aes-256-gcm';
const KEY_LENGTH = 32; // 256 bits
const IV_LENGTH = 16; // 128 bits
const TAG_LENGTH = 16; // 128 bits
const SALT_LENGTH = 32; // 256 bits

// Cache for derived keys to improve performance
const keyCache = new Map<string, Buffer>();

/**
 * Derives a key from a password using PBKDF2
 */
async function deriveKey(password: string, salt: Buffer): Promise<Buffer> {
  const cacheKey = `${password}-${salt.toString('hex')}`;
  
  if (keyCache.has(cacheKey)) {
    return keyCache.get(cacheKey)!;
  }

  const pbkdf2 = promisify(crypto.pbkdf2);
  const derivedKey = await pbkdf2(password, salt, 100000, KEY_LENGTH, 'sha512');
  
  keyCache.set(cacheKey, derivedKey);
  return derivedKey;
}

/**
 * Gets the master password for encryption
 * In a real implementation, this should be derived from user input or secure storage
 */
function getMasterPassword(): string {
  // For now, use a default password
  // In production, this should be user-provided or stored securely
  return process.env.GITHUB_PRODUCTIVITY_ENCRYPTION_KEY || 'github-productivity-monitor-default-key';
}

/**
 * Encrypts data using AES-256-GCM
 */
export async function encrypt(data: string): Promise<string> {
  try {
    const password = getMasterPassword();
    const salt = crypto.randomBytes(SALT_LENGTH);
    const iv = crypto.randomBytes(IV_LENGTH);
    
    const key = await deriveKey(password, salt);
    const cipher = crypto.createCipher(ALGORITHM, key);
    cipher.setAAD(salt); // Use salt as additional authenticated data
    
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const tag = cipher.getAuthTag();
    
    // Combine salt, iv, tag, and encrypted data
    const result = Buffer.concat([
      salt,
      iv,
      tag,
      Buffer.from(encrypted, 'hex')
    ]).toString('base64');
    
    return result;
  } catch (error) {
    throw new Error(`Encryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Decrypts data using AES-256-GCM
 */
export async function decrypt(encryptedData: string): Promise<string> {
  try {
    const password = getMasterPassword();
    const buffer = Buffer.from(encryptedData, 'base64');
    
    // Extract components
    const salt = buffer.subarray(0, SALT_LENGTH);
    const iv = buffer.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH);
    const tag = buffer.subarray(SALT_LENGTH + IV_LENGTH, SALT_LENGTH + IV_LENGTH + TAG_LENGTH);
    const encrypted = buffer.subarray(SALT_LENGTH + IV_LENGTH + TAG_LENGTH);
    
    const key = await deriveKey(password, salt);
    const decipher = crypto.createDecipher(ALGORITHM, key);
    
    decipher.setAuthTag(tag);
    decipher.setAAD(salt);
    
    let decrypted = decipher.update(encrypted, undefined, 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  } catch (error) {
    throw new Error(`Decryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generates a secure random string
 */
export function generateSecureRandom(length: number = 32): string {
  return crypto.randomBytes(length).toString('hex');
}

/**
 * Hashes data using SHA-256
 */
export function hash(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}

/**
 * Creates an HMAC signature
 */
export function createHMAC(data: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(data).digest('hex');
}

/**
 * Verifies an HMAC signature
 */
export function verifyHMAC(data: string, signature: string, secret: string): boolean {
  const expectedSignature = createHMAC(data, secret);
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}

/**
 * Encrypts sensitive configuration data
 */
export async function encryptConfig(config: any): Promise<string> {
  const configString = JSON.stringify(config);
  return await encrypt(configString);
}

/**
 * Decrypts sensitive configuration data
 */
export async function decryptConfig(encryptedConfig: string): Promise<any> {
  const configString = await decrypt(encryptedConfig);
  return JSON.parse(configString);
}

/**
 * Securely erases a string from memory
 */
export function secureErase(str: string): void {
  // In JavaScript, we can't truly erase memory, but we can overwrite the string
  // This is more of a best practice than a security guarantee
  if (typeof str === 'string') {
    (str as any) = '0'.repeat(str.length);
  }
}

/**
 * Validates encryption/decryption functionality
 */
export async function validateEncryption(): Promise<boolean> {
  try {
    const testData = 'test-encryption-data-' + Date.now();
    const encrypted = await encrypt(testData);
    const decrypted = await decrypt(encrypted);
    return testData === decrypted;
  } catch (error) {
    return false;
  }
}

/**
 * Clears the key cache (useful for security)
 */
export function clearKeyCache(): void {
  keyCache.clear();
}

/**
 * Encrypts personal identifiable information
 */
export async function encryptPII(pii: string): Promise<string> {
  // Add additional salt for PII
  const piiSalt = 'pii-salt-' + Date.now();
  const saltedPII = piiSalt + pii;
  return await encrypt(saltedPII);
}

/**
 * Decrypts personal identifiable information
 */
export async function decryptPII(encryptedPII: string): Promise<string> {
  const decrypted = await decrypt(encryptedPII);
  // Remove the PII salt
  const saltPattern = /^pii-salt-\d+/;
  return decrypted.replace(saltPattern, '');
}