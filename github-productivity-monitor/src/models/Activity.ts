export interface Activity {
  id: string;
  timestamp: Date;
  type: ActivityType;
  details: ActivityDetails;
  duration?: number;
  projectPath?: string | undefined;
  fileName?: string | undefined;
  language?: string | undefined;
}

export enum ActivityType {
  FILE_OPEN = 'file_open',
  FILE_EDIT = 'file_edit',
  FILE_SAVE = 'file_save',
  FILE_CLOSE = 'file_close',
  DEBUG_START = 'debug_start',
  DEBUG_STOP = 'debug_stop',
  DEBUG_BREAKPOINT = 'debug_breakpoint',
  TERMINAL_COMMAND = 'terminal_command',
  TASK_RUN = 'task_run',
  EXTENSION_INSTALL = 'extension_install',
  SEARCH = 'search',
  NAVIGATION = 'navigation',
  IDLE = 'idle',
  FOCUS_LOST = 'focus_lost',
  FOCUS_GAINED = 'focus_gained'
}

export interface ActivityDetails {
  [key: string]: any;
  // Common properties
  workspaceFolder?: string | undefined;
  relativePath?: string | undefined;
  
  // File-specific properties
  lineCount?: number;
  characterCount?: number;
  insertions?: number;
  deletions?: number;
  
  // Debug-specific properties
  configuration?: string;
  breakpointLine?: number;
  
  // Terminal-specific properties
  command?: string;
  exitCode?: number;
  
  // Search-specific properties
  query?: string;
  resultsCount?: number;
  
  // Navigation-specific properties
  fromFile?: string;
  toFile?: string;
  
  // Task-specific properties
  taskName?: string;
  taskType?: string;
}

export interface ActivitySummary {
  date: string;
  totalActivities: number;
  activeTime: number;
  idleTime: number;
  filesEdited: number;
  linesAdded: number;
  linesDeleted: number;
  debugSessions: number;
  terminalCommands: number;
  languages: { [language: string]: number };
  mostActiveHour: number;
  productivity: ProductivityMetrics;
}

export interface ProductivityMetrics {
  score: number; // 0-100
  focusTime: number; // minutes of continuous coding
  efficiency: number; // actions per minute
  codeQuality: number; // based on edits to saves ratio
  consistency: number; // regularity of activity
}

export interface ActivityFilter {
  startDate?: Date;
  endDate?: Date;
  activityTypes?: ActivityType[];
  languages?: string[];
  projectPaths?: string[];
  minDuration?: number;
  maxDuration?: number;
}