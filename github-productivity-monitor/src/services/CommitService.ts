import * as vscode from 'vscode';
import { Logger } from '../utils/logger';
import { GitHubService } from './GitHubService';

export class CommitService {
  private context: vscode.ExtensionContext;
  private logger: Logger;
  private gitHubService: GitHubService;

  constructor(context: vscode.ExtensionContext, logger: Logger, gitHubService: GitHubService) {
    this.context = context;
    this.logger = logger;
    this.gitHubService = gitHubService;
  }

  // Placeholder methods - will be implemented later
  public async commitActivity(): Promise<void> {
    this.logger.info('Activity commit requested');
  }

  public dispose(): void {
    this.logger.info('CommitService disposed');
  }
}