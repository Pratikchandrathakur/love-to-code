import * as vscode from 'vscode';
import { Logger } from '../utils/logger';

export class SubscriptionService {
  private context: vscode.ExtensionContext;
  private logger: Logger;

  constructor(context: vscode.ExtensionContext, logger: Logger) {
    this.context = context;
    this.logger = logger;
  }

  // Placeholder methods - will be implemented later
  public async checkSubscriptionStatus(): Promise<string> {
    this.logger.info('Subscription status check requested');
    return 'free';
  }
}