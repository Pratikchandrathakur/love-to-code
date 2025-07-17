import * as vscode from 'vscode';
import { ActivityTracker } from '../services/ActivityTracker';
import { GitHubService } from '../services/GitHubService';
import { CommitService } from '../services/CommitService';
import { SubscriptionService } from '../services/SubscriptionService';
import { DataAggregator } from '../services/DataAggregator';
import { MotivationService } from '../services/MotivationService';
import { Logger } from '../utils/logger';

interface Services {
  activityTracker: ActivityTracker;
  gitHubService: GitHubService;
  commitService: CommitService;
  subscriptionService: SubscriptionService;
  dataAggregator: DataAggregator;
  motivationService: MotivationService;
  logger: Logger;
}

export function registerCommands(context: vscode.ExtensionContext, services: Services): void {
  // Register authenticate command
  const authenticateCommand = vscode.commands.registerCommand(
    'githubProductivity.authenticate',
    async () => {
      try {
        const result = await services.gitHubService.authenticate();
        if (result) {
          vscode.window.showInformationMessage('Successfully authenticated with GitHub!');
        } else {
          vscode.window.showWarningMessage('GitHub authentication failed or was cancelled.');
        }
      } catch (error) {
        services.logger.error('Authentication command failed', error);
        vscode.window.showErrorMessage('Failed to authenticate with GitHub.');
      }
    }
  );

  // Register start tracking command
  const startTrackingCommand = vscode.commands.registerCommand(
    'githubProductivity.startTracking',
    () => {
      try {
        services.activityTracker.startTracking();
      } catch (error) {
        services.logger.error('Start tracking command failed', error);
        vscode.window.showErrorMessage('Failed to start activity tracking.');
      }
    }
  );

  // Register stop tracking command
  const stopTrackingCommand = vscode.commands.registerCommand(
    'githubProductivity.stopTracking',
    () => {
      try {
        services.activityTracker.stopTracking();
      } catch (error) {
        services.logger.error('Stop tracking command failed', error);
        vscode.window.showErrorMessage('Failed to stop activity tracking.');
      }
    }
  );

  // Register view stats command
  const viewStatsCommand = vscode.commands.registerCommand(
    'githubProductivity.viewStats',
    async () => {
      try {
        // This would open the stats panel
        services.logger.info('View stats command executed');
        vscode.window.showInformationMessage('Stats panel would open here.');
      } catch (error) {
        services.logger.error('View stats command failed', error);
        vscode.window.showErrorMessage('Failed to open stats panel.');
      }
    }
  );

  // Register configure settings command
  const configureSettingsCommand = vscode.commands.registerCommand(
    'githubProductivity.configureSettings',
    async () => {
      try {
        // Open settings
        await vscode.commands.executeCommand('workbench.action.openSettings', 'githubProductivity');
      } catch (error) {
        services.logger.error('Configure settings command failed', error);
        vscode.window.showErrorMessage('Failed to open settings.');
      }
    }
  );

  // Add commands to context
  context.subscriptions.push(
    authenticateCommand,
    startTrackingCommand,
    stopTrackingCommand,
    viewStatsCommand,
    configureSettingsCommand
  );

  services.logger.info('All commands registered successfully');
}