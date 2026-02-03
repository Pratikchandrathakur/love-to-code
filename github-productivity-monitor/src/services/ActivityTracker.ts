import * as vscode from 'vscode';
import { Logger } from '../utils/logger';
import { DataAggregator } from './DataAggregator';
import { Activity, ActivityType, ActivityDetails } from '../models/Activity';

export class ActivityTracker {
  private context: vscode.ExtensionContext;
  private logger: Logger;
  private dataAggregator: DataAggregator;
  private isTracking: boolean = false;
  private disposables: vscode.Disposable[] = [];
  private lastActivityTime: Date = new Date();
  private idleTimer?: NodeJS.Timeout | undefined;

  constructor(context: vscode.ExtensionContext, logger: Logger, dataAggregator: DataAggregator) {
    this.context = context;
    this.logger = logger;
    this.dataAggregator = dataAggregator;
  }

  public startTracking(): void {
    if (this.isTracking) {
      this.logger.warn('Activity tracking is already active');
      return;
    }

    this.logger.info('Starting activity tracking...');
    this.isTracking = true;

    // Register event listeners
    this.registerFileEventListeners();
    this.registerEditorEventListeners();
    this.registerTerminalEventListeners();
    this.registerDebugEventListeners();
    this.registerTaskEventListeners();

    // Start idle detection
    this.startIdleDetection();

    this.logger.info('Activity tracking started successfully');
    vscode.window.showInformationMessage('GitHub Productivity Monitor: Activity tracking started');
  }

  public stopTracking(): void {
    if (!this.isTracking) {
      this.logger.warn('Activity tracking is not active');
      return;
    }

    this.logger.info('Stopping activity tracking...');
    this.isTracking = false;

    // Dispose all event listeners
    this.disposables.forEach(disposable => disposable.dispose());
    this.disposables = [];

    // Stop idle detection
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = undefined;
    }

    this.logger.info('Activity tracking stopped');
    vscode.window.showInformationMessage('GitHub Productivity Monitor: Activity tracking stopped');
  }

  public isActive(): boolean {
    return this.isTracking;
  }

  private registerFileEventListeners(): void {
    // File open events
    this.disposables.push(
      vscode.workspace.onDidOpenTextDocument((document) => {
        if (this.shouldTrackDocument(document)) {
          this.recordActivity(ActivityType.FILE_OPEN, {
            fileName: document.fileName,
            language: document.languageId,
            lineCount: document.lineCount,
            workspaceFolder: this.getWorkspaceFolder(document.uri),
            relativePath: this.getRelativePath(document.uri)
          });
        }
      })
    );

    // File save events
    this.disposables.push(
      vscode.workspace.onDidSaveTextDocument((document) => {
        if (this.shouldTrackDocument(document)) {
          this.recordActivity(ActivityType.FILE_SAVE, {
            fileName: document.fileName,
            language: document.languageId,
            lineCount: document.lineCount,
            characterCount: document.getText().length,
            workspaceFolder: this.getWorkspaceFolder(document.uri),
            relativePath: this.getRelativePath(document.uri)
          });
        }
      })
    );

    // File close events
    this.disposables.push(
      vscode.workspace.onDidCloseTextDocument((document) => {
        if (this.shouldTrackDocument(document)) {
          this.recordActivity(ActivityType.FILE_CLOSE, {
            fileName: document.fileName,
            language: document.languageId,
            workspaceFolder: this.getWorkspaceFolder(document.uri),
            relativePath: this.getRelativePath(document.uri)
          });
        }
      })
    );
  }

  private registerEditorEventListeners(): void {
    // Text document changes
    this.disposables.push(
      vscode.workspace.onDidChangeTextDocument((event) => {
        if (this.shouldTrackDocument(event.document)) {
          const changes = event.contentChanges;
          let insertions = 0;
          let deletions = 0;

          changes.forEach(change => {
            if (change.text.length > 0) {
              insertions += change.text.split('\n').length - 1;
            }
            if (change.rangeLength > 0) {
              deletions += change.rangeLength;
            }
          });

          this.recordActivity(ActivityType.FILE_EDIT, {
            fileName: event.document.fileName,
            language: event.document.languageId,
            insertions,
            deletions,
            workspaceFolder: this.getWorkspaceFolder(event.document.uri),
            relativePath: this.getRelativePath(event.document.uri)
          });
        }
      })
    );

    // Active editor changes
    this.disposables.push(
      vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor && this.shouldTrackDocument(editor.document)) {
          this.recordActivity(ActivityType.NAVIGATION, {
            toFile: editor.document.fileName,
            language: editor.document.languageId,
            workspaceFolder: this.getWorkspaceFolder(editor.document.uri),
            relativePath: this.getRelativePath(editor.document.uri)
          });
        }
      })
    );
  }

  private registerTerminalEventListeners(): void {
    // Terminal creation
    this.disposables.push(
      vscode.window.onDidOpenTerminal((terminal) => {
        this.logger.debug(`Terminal opened: ${terminal.name}`);
        // Note: VS Code doesn't provide direct access to terminal commands
        // This would require additional implementation for command tracking
      })
    );

    // Terminal close
    this.disposables.push(
      vscode.window.onDidCloseTerminal((terminal) => {
        this.logger.debug(`Terminal closed: ${terminal.name}`);
      })
    );
  }

  private registerDebugEventListeners(): void {
    // Debug session start
    this.disposables.push(
      vscode.debug.onDidStartDebugSession((session) => {
        this.recordActivity(ActivityType.DEBUG_START, {
          configuration: session.configuration.name,
          type: session.configuration.type,
          workspaceFolder: session.workspaceFolder?.name
        });
      })
    );

    // Debug session end
    this.disposables.push(
      vscode.debug.onDidTerminateDebugSession((session) => {
        this.recordActivity(ActivityType.DEBUG_STOP, {
          configuration: session.configuration.name,
          type: session.configuration.type,
          workspaceFolder: session.workspaceFolder?.name
        });
      })
    );

    // Breakpoint changes
    this.disposables.push(
      vscode.debug.onDidChangeBreakpoints((event) => {
        event.added.forEach(breakpoint => {
          if (breakpoint instanceof vscode.SourceBreakpoint) {
            this.recordActivity(ActivityType.DEBUG_BREAKPOINT, {
              action: 'added',
              fileName: breakpoint.location.uri.fsPath,
              breakpointLine: breakpoint.location.range.start.line,
              workspaceFolder: this.getWorkspaceFolder(breakpoint.location.uri)
            });
          }
        });

        event.removed.forEach(breakpoint => {
          if (breakpoint instanceof vscode.SourceBreakpoint) {
            this.recordActivity(ActivityType.DEBUG_BREAKPOINT, {
              action: 'removed',
              fileName: breakpoint.location.uri.fsPath,
              breakpointLine: breakpoint.location.range.start.line,
              workspaceFolder: this.getWorkspaceFolder(breakpoint.location.uri)
            });
          }
        });
      })
    );
  }

  private registerTaskEventListeners(): void {
    // Task execution start
    this.disposables.push(
      vscode.tasks.onDidStartTask((event) => {
        this.recordActivity(ActivityType.TASK_RUN, {
          taskName: event.execution.task.name,
          taskType: event.execution.task.source,
          action: 'started',
          workspaceFolder: typeof event.execution.task.scope === 'object' && 'name' in event.execution.task.scope 
            ? event.execution.task.scope.name 
            : undefined
        });
      })
    );

    // Task execution end
    this.disposables.push(
      vscode.tasks.onDidEndTask((event) => {
        this.recordActivity(ActivityType.TASK_RUN, {
          taskName: event.execution.task.name,
          taskType: event.execution.task.source,
          action: 'ended',
          exitCode: 0, // VS Code doesn't provide exit code directly
          workspaceFolder: typeof event.execution.task.scope === 'object' && 'name' in event.execution.task.scope 
            ? event.execution.task.scope.name 
            : undefined
        });
      })
    );
  }

  private startIdleDetection(): void {
    const config = vscode.workspace.getConfiguration('githubProductivity');
    const idleThreshold = config.get('idleThreshold', 5) * 60 * 1000; // Convert to milliseconds

    this.resetIdleTimer(idleThreshold);
  }

  private resetIdleTimer(idleThreshold: number): void {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
    }

    this.lastActivityTime = new Date();

    this.idleTimer = setTimeout(() => {
      this.recordActivity(ActivityType.IDLE, {
        duration: Date.now() - this.lastActivityTime.getTime()
      });
    }, idleThreshold);
  }

  private recordActivity(type: ActivityType, details: ActivityDetails): void {
    if (!this.isTracking) {
      return;
    }

    try {
      const activity: Activity = {
        id: this.generateActivityId(),
        timestamp: new Date(),
        type,
        details,
        projectPath: details.workspaceFolder,
        fileName: details.fileName,
        language: details.language
      };

      this.dataAggregator.addActivity(activity);
      this.logger.debug(`Recorded activity: ${type}`, details);

      // Reset idle timer on activity
      const config = vscode.workspace.getConfiguration('githubProductivity');
      const idleThreshold = config.get('idleThreshold', 5) * 60 * 1000;
      this.resetIdleTimer(idleThreshold);
    } catch (error) {
      this.logger.error('Failed to record activity', error);
    }
  }

  private shouldTrackDocument(document: vscode.TextDocument): boolean {
    // Skip untitled documents
    if (document.uri.scheme === 'untitled') {
      return false;
    }

    // Skip output channels and other virtual documents
    if (document.uri.scheme !== 'file') {
      return false;
    }

    const config = vscode.workspace.getConfiguration('githubProductivity');
    const excludePatterns = config.get('excludeFiles', []) as string[];
    const includeFileTypes = config.get('includeFileTypes', []) as string[];

    // Check exclude patterns
    const fileName = document.fileName.toLowerCase();
    for (const pattern of excludePatterns) {
      if (fileName.includes(pattern.toLowerCase())) {
        return false;
      }
    }

    // Check file types if specified
    if (includeFileTypes.length > 0) {
      const fileExtension = '.' + document.fileName.split('.').pop()?.toLowerCase();
      return includeFileTypes.includes(fileExtension);
    }

    return true;
  }

  private getWorkspaceFolder(uri: vscode.Uri): string | undefined {
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);
    return workspaceFolder?.name;
  }

  private getRelativePath(uri: vscode.Uri): string | undefined {
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);
    if (workspaceFolder) {
      return vscode.workspace.asRelativePath(uri, false);
    }
    return undefined;
  }

  private generateActivityId(): string {
    return `activity_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  public dispose(): void {
    this.stopTracking();
  }
}