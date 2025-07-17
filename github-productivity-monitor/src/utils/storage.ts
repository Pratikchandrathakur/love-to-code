import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { encrypt, decrypt } from './encryption';

export class Storage {
  private context: vscode.ExtensionContext;
  private storageDir: string;
  private encryptionEnabled: boolean;

  constructor(context: vscode.ExtensionContext, enableEncryption: boolean = true) {
    this.context = context;
    this.encryptionEnabled = enableEncryption;
    this.storageDir = path.join(context.globalStorageUri?.fsPath || '', 'data');
    this.ensureStorageDirectory();
  }

  private ensureStorageDirectory(): void {
    if (!fs.existsSync(this.storageDir)) {
      fs.mkdirSync(this.storageDir, { recursive: true });
    }
  }

  private getFilePath(key: string): string {
    return path.join(this.storageDir, `${key}.json`);
  }

  private async serializeData(data: any): Promise<string> {
    const jsonString = JSON.stringify(data, null, 2);
    
    if (this.encryptionEnabled) {
      return await encrypt(jsonString);
    }
    
    return jsonString;
  }

  private async deserializeData(content: string): Promise<any> {
    if (this.encryptionEnabled) {
      const decryptedContent = await decrypt(content);
      return JSON.parse(decryptedContent);
    }
    
    return JSON.parse(content);
  }

  async store(key: string, data: any): Promise<void> {
    try {
      const serializedData = await this.serializeData(data);
      const filePath = this.getFilePath(key);
      fs.writeFileSync(filePath, serializedData, 'utf8');
    } catch (error) {
      throw new Error(`Failed to store data for key '${key}': ${error}`);
    }
  }

  async retrieve<T>(key: string, defaultValue?: T): Promise<T | undefined> {
    try {
      const filePath = this.getFilePath(key);
      
      if (!fs.existsSync(filePath)) {
        return defaultValue;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      return await this.deserializeData(content);
    } catch (error) {
      console.error(`Failed to retrieve data for key '${key}':`, error);
      return defaultValue;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      const filePath = this.getFilePath(key);
      
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      throw new Error(`Failed to remove data for key '${key}': ${error}`);
    }
  }

  async exists(key: string): Promise<boolean> {
    const filePath = this.getFilePath(key);
    return fs.existsSync(filePath);
  }

  async listKeys(): Promise<string[]> {
    try {
      if (!fs.existsSync(this.storageDir)) {
        return [];
      }

      const files = fs.readdirSync(this.storageDir);
      return files
        .filter(file => file.endsWith('.json'))
        .map(file => path.basename(file, '.json'));
    } catch (error) {
      console.error('Failed to list storage keys:', error);
      return [];
    }
  }

  async clear(): Promise<void> {
    try {
      if (fs.existsSync(this.storageDir)) {
        const files = fs.readdirSync(this.storageDir);
        for (const file of files) {
          fs.unlinkSync(path.join(this.storageDir, file));
        }
      }
    } catch (error) {
      throw new Error(`Failed to clear storage: ${error}`);
    }
  }

  async getSize(): Promise<number> {
    try {
      if (!fs.existsSync(this.storageDir)) {
        return 0;
      }

      let totalSize = 0;
      const files = fs.readdirSync(this.storageDir);
      
      for (const file of files) {
        const filePath = path.join(this.storageDir, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
      }

      return totalSize;
    } catch (error) {
      console.error('Failed to calculate storage size:', error);
      return 0;
    }
  }

  async backup(backupPath?: string): Promise<string> {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const defaultBackupPath = path.join(this.context.globalStorageUri?.fsPath || '', `backup-${timestamp}.zip`);
      const targetPath = backupPath || defaultBackupPath;

      // Simple backup by copying all files to a backup directory
      const backupDir = path.join(path.dirname(targetPath), `backup-${timestamp}`);
      fs.mkdirSync(backupDir, { recursive: true });

      if (fs.existsSync(this.storageDir)) {
        const files = fs.readdirSync(this.storageDir);
        for (const file of files) {
          const sourcePath = path.join(this.storageDir, file);
          const targetFilePath = path.join(backupDir, file);
          fs.copyFileSync(sourcePath, targetFilePath);
        }
      }

      return backupDir;
    } catch (error) {
      throw new Error(`Failed to create backup: ${error}`);
    }
  }

  async restore(backupPath: string): Promise<void> {
    try {
      if (!fs.existsSync(backupPath)) {
        throw new Error('Backup path does not exist');
      }

      // Clear current storage
      await this.clear();

      // Copy backup files to storage directory
      const files = fs.readdirSync(backupPath);
      for (const file of files) {
        const sourcePath = path.join(backupPath, file);
        const targetPath = path.join(this.storageDir, file);
        fs.copyFileSync(sourcePath, targetPath);
      }
    } catch (error) {
      throw new Error(`Failed to restore from backup: ${error}`);
    }
  }

  // VS Code specific storage methods
  async storeGlobal(key: string, value: any): Promise<void> {
    await this.context.globalState.update(key, value);
  }

  getGlobal<T>(key: string, defaultValue?: T): T | undefined {
    return this.context.globalState.get(key, defaultValue);
  }

  async storeWorkspace(key: string, value: any): Promise<void> {
    await this.context.workspaceState.update(key, value);
  }

  getWorkspace<T>(key: string, defaultValue?: T): T | undefined {
    return this.context.workspaceState.get(key, defaultValue);
  }

  async storeSecret(key: string, value: string): Promise<void> {
    await this.context.secrets.store(key, value);
  }

  async getSecret(key: string): Promise<string | undefined> {
    return await this.context.secrets.get(key);
  }

  async deleteSecret(key: string): Promise<void> {
    await this.context.secrets.delete(key);
  }
}