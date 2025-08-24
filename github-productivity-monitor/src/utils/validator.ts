/**
 * Input validation utilities for GitHub Productivity Monitor
 */

import * as path from 'path';
import * as fs from 'fs';

export class Validator {
  /**
   * Validates if a string is not empty and not just whitespace
   */
  static isNotEmpty(value: string | undefined | null): boolean {
    return value !== undefined && value !== null && value.trim().length > 0;
  }

  /**
   * Validates if a string is a valid email address
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  /**
   * Validates if a string is a valid GitHub username
   */
  static isValidGitHubUsername(username: string): boolean {
    // GitHub username rules: 1-39 characters, alphanumeric and hyphens, cannot start/end with hyphen
    const usernameRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;
    return usernameRegex.test(username);
  }

  /**
   * Validates if a string is a valid repository name
   */
  static isValidRepositoryName(repoName: string): boolean {
    // Repository name rules: 1-100 characters, alphanumeric, hyphens, underscores, dots
    const repoRegex = /^[a-zA-Z0-9._-]{1,100}$/;
    return repoRegex.test(repoName);
  }

  /**
   * Validates if a string is a valid GitHub URL
   */
  static isValidGitHubUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname === 'github.com' || urlObj.hostname === 'api.github.com';
    } catch {
      return false;
    }
  }

  /**
   * Validates if a number is within a specified range
   */
  static isInRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }

  /**
   * Validates if a file path is safe (no directory traversal)
   */
  static isSafeFilePath(filePath: string): boolean {
    const normalizedPath = path.normalize(filePath);
    return !normalizedPath.includes('..');
  }

  /**
   * Validates if a file exists and is readable
   */
  static isValidFile(filePath: string): boolean {
    try {
      const stats = fs.statSync(filePath);
      return stats.isFile();
    } catch {
      return false;
    }
  }

  /**
   * Validates if a directory exists and is accessible
   */
  static isValidDirectory(dirPath: string): boolean {
    try {
      const stats = fs.statSync(dirPath);
      return stats.isDirectory();
    } catch {
      return false;
    }
  }

  /**
   * Sanitizes user input to prevent injection attacks
   */
  static sanitizeInput(input: string): string {
    return input
      .replace(/[<>\"']/g, '') // Remove potential HTML/JS injection characters
      .replace(/\\/g, '/') // Normalize path separators
      .trim();
  }

  /**
   * Validates if a string contains only allowed characters
   */
  static containsOnlyAllowedChars(input: string, allowedPattern: RegExp): boolean {
    return allowedPattern.test(input);
  }

  /**
   * Validates if a string is a valid time format (HH:MM)
   */
  static isValidTimeFormat(time: string): boolean {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  }

  /**
   * Validates if a string is a valid date format (YYYY-MM-DD)
   */
  static isValidDateFormat(date: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return false;
    }
    
    const dateObj = new Date(date);
    return dateObj.toISOString().slice(0, 10) === date;
  }

  /**
   * Validates if a string is a valid timezone
   */
  static isValidTimezone(timezone: string): boolean {
    try {
      Intl.DateTimeFormat(undefined, { timeZone: timezone });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates if a configuration object has required properties
   */
  static validateConfig(config: any, requiredProperties: string[]): ValidationResult {
    const errors: string[] = [];
    
    for (const prop of requiredProperties) {
      if (!(prop in config)) {
        errors.push(`Missing required property: ${prop}`);
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Validates GitHub OAuth token format
   */
  static isValidGitHubToken(token: string): boolean {
    // GitHub tokens can be personal access tokens (classic) or fine-grained
    // Classic tokens: ghp_xxxx (40 chars total)
    // Fine-grained: github_pat_xxxx
    const tokenRegex = /^(ghp_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9_]{82})$/;
    return tokenRegex.test(token);
  }

  /**
   * Validates if a file extension is in the allowed list
   */
  static isAllowedFileExtension(fileName: string, allowedExtensions: string[]): boolean {
    const extension = path.extname(fileName).toLowerCase();
    return allowedExtensions.includes(extension);
  }

  /**
   * Validates if a file matches any of the exclude patterns
   */
  static matchesExcludePattern(fileName: string, excludePatterns: string[]): boolean {
    const normalizedFileName = fileName.toLowerCase();
    
    return excludePatterns.some(pattern => {
      const normalizedPattern = pattern.toLowerCase();
      
      // Simple wildcard matching
      if (pattern.includes('*')) {
        const regexPattern = normalizedPattern
          .replace(/\*/g, '.*')
          .replace(/\?/g, '.');
        const regex = new RegExp(`^${regexPattern}$`);
        return regex.test(normalizedFileName);
      }
      
      // Exact match or contains
      return normalizedFileName.includes(normalizedPattern);
    });
  }

  /**
   * Validates subscription data
   */
  static validateSubscriptionData(data: any): ValidationResult {
    const errors: string[] = [];
    
    if (!data.type || !['free', 'trial', 'premium'].includes(data.type)) {
      errors.push('Invalid subscription type');
    }
    
    if (!data.status || !['active', 'inactive', 'expired', 'cancelled'].includes(data.status)) {
      errors.push('Invalid subscription status');
    }
    
    if (data.type === 'trial' && !data.trialEndDate) {
      errors.push('Trial subscription must have an end date');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Validates activity data structure
   */
  static validateActivityData(activity: any): ValidationResult {
    const errors: string[] = [];
    
    if (!activity.id || typeof activity.id !== 'string') {
      errors.push('Activity must have a valid ID');
    }
    
    if (!activity.timestamp || !(activity.timestamp instanceof Date)) {
      errors.push('Activity must have a valid timestamp');
    }
    
    if (!activity.type || typeof activity.type !== 'string') {
      errors.push('Activity must have a valid type');
    }
    
    if (!activity.details || typeof activity.details !== 'object') {
      errors.push('Activity must have valid details object');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Validates network URL for safety
   */
  static isValidNetworkUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      
      // Only allow HTTPS for external URLs
      if (!urlObj.protocol.startsWith('https:') && !urlObj.hostname.includes('localhost')) {
        return false;
      }
      
      // Block known malicious or internal IP ranges
      const hostname = urlObj.hostname;
      const blockedPatterns = [
        /^127\./,     // localhost
        /^10\./,      // private network
        /^172\.16\./, // private network
        /^192\.168\./ // private network
      ];
      
      return !blockedPatterns.some(pattern => pattern.test(hostname));
    } catch {
      return false;
    }
  }

  /**
   * Validates JSON string
   */
  static isValidJSON(jsonString: string): boolean {
    try {
      JSON.parse(jsonString);
      return true;
    } catch {
      return false;
    }
  }
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Common validation patterns
 */
export const ValidationPatterns = {
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  ALPHANUMERIC_WITH_SPACES: /^[a-zA-Z0-9\s]+$/,
  FILENAME: /^[a-zA-Z0-9._-]+$/,
  HEX_COLOR: /^#[0-9A-Fa-f]{6}$/,
  SEMVER: /^(\d+)\.(\d+)\.(\d+)(-[a-zA-Z0-9.-]+)?(\+[a-zA-Z0-9.-]+)?$/,
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
};