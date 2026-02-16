import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class Logger {
  private outputChannel: vscode.OutputChannel;
  private logFile: string;
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
    this.outputChannel = vscode.window.createOutputChannel('GitHub Productivity Monitor');
    this.logFile = path.join(context.globalStorageUri?.fsPath || '', 'logs', 'extension.log');
    this.ensureLogDirectory();
  }

  private ensureLogDirectory(): void {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  private formatMessage(level: LogLevel, message: string, error?: any): string {
    const timestamp = new Date().toISOString();
    const errorInfo = error ? ` | Error: ${error instanceof Error ? error.message : String(error)}` : '';
    return `[${timestamp}] [${level}] ${message}${errorInfo}`;
  }

  private writeToFile(formattedMessage: string): void {
    try {
      fs.appendFileSync(this.logFile, formattedMessage + '\n');
    } catch (error) {
      // Fallback to console if file writing fails
      console.error('Failed to write to log file:', error);
    }
  }

  private log(level: LogLevel, message: string, error?: any): void {
    const formattedMessage = this.formatMessage(level, message, error);
    
    // Write to output channel
    this.outputChannel.appendLine(formattedMessage);
    
    // Write to file
    this.writeToFile(formattedMessage);
    
    // Also log to console for development
    switch (level) {
      case LogLevel.ERROR:
        console.error(formattedMessage);
        break;
      case LogLevel.WARN:
        console.warn(formattedMessage);
        break;
      case LogLevel.INFO:
        console.info(formattedMessage);
        break;
      case LogLevel.DEBUG:
        console.debug(formattedMessage);
        break;
    }
  }

  debug(message: string, error?: any): void {
    this.log(LogLevel.DEBUG, message, error);
  }

  info(message: string, error?: any): void {
    this.log(LogLevel.INFO, message, error);
  }

  warn(message: string, error?: any): void {
    this.log(LogLevel.WARN, message, error);
  }

  error(message: string, error?: any): void {
    this.log(LogLevel.ERROR, message, error);
  }

  show(): void {
    this.outputChannel.show();
  }

  clear(): void {
    this.outputChannel.clear();
  }

  dispose(): void {
    this.outputChannel.dispose();
  }

  async getLogContent(lines: number = 100): Promise<string> {
    try {
      if (!fs.existsSync(this.logFile)) {
        return 'No log file found.';
      }

      const content = fs.readFileSync(this.logFile, 'utf8');
      const logLines = content.split('\n');
      return logLines.slice(-lines).join('\n');
    } catch (error) {
      this.error('Failed to read log file', error);
      return 'Failed to read log file.';
    }
  }

  async clearLogFile(): Promise<void> {
    try {
      if (fs.existsSync(this.logFile)) {
        fs.writeFileSync(this.logFile, '');
        this.info('Log file cleared');
      }
    } catch (error) {
      this.error('Failed to clear log file', error);
    }
  }

  async exportLogs(): Promise<string | undefined> {
    try {
      const content = await this.getLogContent(1000);
      const exportPath = path.join(this.context.globalStorageUri?.fsPath || '', 'logs', `export-${Date.now()}.log`);
      fs.writeFileSync(exportPath, content);
      this.info(`Logs exported to: ${exportPath}`);
      return exportPath;
    } catch (error) {
      this.error('Failed to export logs', error);
      return undefined;
    }
  }
}

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}