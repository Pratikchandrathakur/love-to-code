import * as vscode from 'vscode';
import { ActivityTracker } from './services/ActivityTracker';
import { GitHubService } from './services/GitHubService';
import { CommitService } from './services/CommitService';
import { SubscriptionService } from './services/SubscriptionService';
import { DataAggregator } from './services/DataAggregator';
import { MotivationService } from './services/MotivationService';
import { Logger } from './utils/logger';
import { registerCommands } from './commands';

let activityTracker: ActivityTracker;
let gitHubService: GitHubService;
let commitService: CommitService;
let subscriptionService: SubscriptionService;
let dataAggregator: DataAggregator;
let motivationService: MotivationService;
let logger: Logger;

export function activate(context: vscode.ExtensionContext) {
  try {
    // Initialize logger first
    logger = new Logger(context);
    logger.info('GitHub Productivity Monitor extension is activating...');

    // Initialize services
    gitHubService = new GitHubService(context, logger);
    subscriptionService = new SubscriptionService(context, logger);
    dataAggregator = new DataAggregator(context, logger);
    motivationService = new MotivationService(context, logger);
    commitService = new CommitService(context, logger, gitHubService);
    activityTracker = new ActivityTracker(context, logger, dataAggregator);

    // Register all commands
    registerCommands(context, {
      activityTracker,
      gitHubService,
      commitService,
      subscriptionService,
      dataAggregator,
      motivationService,
      logger
    });

    // Start background monitoring if enabled
    const config = vscode.workspace.getConfiguration('githubProductivity');
    if (config.get('autoStart', false)) {
      activityTracker.startTracking();
    }

    // Show welcome message for new users
    showWelcomeMessage(context);

    logger.info('GitHub Productivity Monitor extension activated successfully');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Failed to activate extension', error);
    vscode.window.showErrorMessage(`Failed to activate GitHub Productivity Monitor: ${errorMessage}`);
  }
}

export function deactivate(): Thenable<void> | undefined {
  try {
    logger?.info('GitHub Productivity Monitor extension is deactivating...');

    // Stop activity tracking
    if (activityTracker) {
      activityTracker.stopTracking();
    }

    // Save any pending data
    if (dataAggregator) {
      dataAggregator.savePendingData();
    }

    // Cleanup services
    if (commitService) {
      commitService.dispose();
    }

    logger?.info('GitHub Productivity Monitor extension deactivated successfully');
  } catch (error) {
    logger?.error('Error during deactivation', error);
  }
  
  return undefined;
}

async function showWelcomeMessage(context: vscode.ExtensionContext) {
  const hasShownWelcome = context.globalState.get('hasShownWelcome', false);
  
  if (!hasShownWelcome) {
    const action = await vscode.window.showInformationMessage(
      'Welcome to GitHub Productivity Monitor! Start tracking your coding activities and boost your productivity.',
      'Get Started',
      'Learn More',
      'Maybe Later'
    );

    if (action === 'Get Started') {
      vscode.commands.executeCommand('githubProductivity.authenticate');
    } else if (action === 'Learn More') {
      vscode.env.openExternal(vscode.Uri.parse('https://github.com/Pratikchandrathakur/love-to-code'));
    }

    await context.globalState.update('hasShownWelcome', true);
  }
}