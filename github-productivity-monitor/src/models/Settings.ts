export interface Settings {
  version: string;
  general: GeneralSettings;
  tracking: TrackingSettings;
  github: GitHubSettings;
  subscription: SubscriptionSettings;
  privacy: PrivacySettings;
  notifications: NotificationSettings;
  reporting: ReportingSettings;
}

export interface GeneralSettings {
  autoStart: boolean;
  theme: 'light' | 'dark' | 'auto';
  language: string;
  timezone: string;
  dateFormat: string;
  timeFormat: '12h' | '24h';
}

export interface TrackingSettings {
  enabled: boolean;
  autoCommitInterval: number; // minutes
  trackFileOperations: boolean;
  trackEditorActivity: boolean;
  trackTerminalCommands: boolean;
  trackDebugSessions: boolean;
  trackTaskExecution: boolean;
  detectIdlePeriods: boolean;
  idleThreshold: number; // minutes
  excludeFiles: string[];
  excludeFolders: string[];
  includeFileTypes: string[];
  excludeFileTypes: string[];
  minimumActivityDuration: number; // seconds
}

export interface GitHubSettings {
  authenticated: boolean;
  username?: string;
  repositoryName: string;
  createPrivateRepo: boolean;
  autoCommit: boolean;
  includeFileContent: boolean;
  commitMessageTemplate: string;
  branchName: string;
  webhookUrl?: string;
  apiRateLimit: number;
  retryAttempts: number;
  retryDelay: number; // milliseconds
}

export interface SubscriptionSettings {
  type: 'free' | 'trial' | 'premium';
  status: 'active' | 'inactive' | 'expired';
  trialStartDate?: Date;
  trialEndDate?: Date;
  subscriptionStartDate?: Date;
  subscriptionEndDate?: Date;
  paymentMethod?: string;
  autoRenew: boolean;
  billingCycle: 'monthly' | 'yearly';
}

export interface PrivacySettings {
  encryptLocalData: boolean;
  shareAnonymousUsage: boolean;
  allowTelemetry: boolean;
  dataRetentionDays: number;
  autoDeleteExpiredData: boolean;
  excludeSensitiveFiles: boolean;
  sensitiveFilePatterns: string[];
  anonymizePersonalInfo: boolean;
}

export interface NotificationSettings {
  enabled: boolean;
  showInStatusBar: boolean;
  showMotivationalMessages: boolean;
  dailySummaryNotification: boolean;
  weeklyReportNotification: boolean;
  achievementNotifications: boolean;
  errorNotifications: boolean;
  trialExpiryReminder: boolean;
  subscriptionReminder: boolean;
  notificationSound: boolean;
  quietHoursEnabled: boolean;
  quietHoursStart: string; // HH:MM format
  quietHoursEnd: string; // HH:MM format
}

export interface ReportingSettings {
  defaultView: 'dashboard' | 'charts' | 'timeline' | 'summary';
  defaultTimeRange: 'today' | 'week' | 'month' | 'quarter' | 'year';
  includeWeekends: boolean;
  workingHoursStart: string; // HH:MM format
  workingHoursEnd: string; // HH:MM format
  workingDays: number[]; // 0=Sunday, 1=Monday, etc.
  chartType: 'line' | 'bar' | 'pie' | 'area';
  showProductivityScore: boolean;
  showLanguageStats: boolean;
  showProjectStats: boolean;
  showTimeDistribution: boolean;
  exportFormat: 'json' | 'csv' | 'pdf' | 'html';
  autoExport: boolean;
  exportSchedule: 'daily' | 'weekly' | 'monthly';
}

export const DEFAULT_SETTINGS: Settings = {
  version: '1.0.0',
  general: {
    autoStart: false,
    theme: 'auto',
    language: 'en',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    dateFormat: 'YYYY-MM-DD',
    timeFormat: '24h'
  },
  tracking: {
    enabled: true,
    autoCommitInterval: 30,
    trackFileOperations: true,
    trackEditorActivity: true,
    trackTerminalCommands: true,
    trackDebugSessions: true,
    trackTaskExecution: true,
    detectIdlePeriods: true,
    idleThreshold: 5,
    excludeFiles: ['.git/**', 'node_modules/**', '*.log', '*.tmp'],
    excludeFolders: ['.git', 'node_modules', '.vscode', 'dist', 'build'],
    includeFileTypes: ['.ts', '.js', '.py', '.java', '.cpp', '.c', '.cs', '.go', '.rs', '.php', '.rb', '.swift'],
    excludeFileTypes: ['.exe', '.dll', '.so', '.dylib', '.bin'],
    minimumActivityDuration: 1
  },
  github: {
    authenticated: false,
    repositoryName: 'productivity-tracking',
    createPrivateRepo: true,
    autoCommit: true,
    includeFileContent: false,
    commitMessageTemplate: 'Activity summary for {date}',
    branchName: 'main',
    apiRateLimit: 5000,
    retryAttempts: 3,
    retryDelay: 1000
  },
  subscription: {
    type: 'free',
    status: 'inactive',
    autoRenew: false,
    billingCycle: 'monthly'
  },
  privacy: {
    encryptLocalData: true,
    shareAnonymousUsage: false,
    allowTelemetry: false,
    dataRetentionDays: 30,
    autoDeleteExpiredData: true,
    excludeSensitiveFiles: true,
    sensitiveFilePatterns: ['*.key', '*.pem', '*.env', '*.secret', 'password*', 'token*'],
    anonymizePersonalInfo: true
  },
  notifications: {
    enabled: true,
    showInStatusBar: true,
    showMotivationalMessages: true,
    dailySummaryNotification: true,
    weeklyReportNotification: true,
    achievementNotifications: true,
    errorNotifications: true,
    trialExpiryReminder: true,
    subscriptionReminder: true,
    notificationSound: false,
    quietHoursEnabled: false,
    quietHoursStart: '22:00',
    quietHoursEnd: '08:00'
  },
  reporting: {
    defaultView: 'dashboard',
    defaultTimeRange: 'week',
    includeWeekends: false,
    workingHoursStart: '09:00',
    workingHoursEnd: '17:00',
    workingDays: [1, 2, 3, 4, 5], // Monday to Friday
    chartType: 'line',
    showProductivityScore: true,
    showLanguageStats: true,
    showProjectStats: true,
    showTimeDistribution: true,
    exportFormat: 'json',
    autoExport: false,
    exportSchedule: 'weekly'
  }
};