export interface User {
  id: string;
  githubUsername?: string;
  email?: string;
  displayName: string;
  avatarUrl?: string;
  joinDate: Date;
  subscription: SubscriptionInfo;
  preferences: UserPreferences;
  statistics: UserStatistics;
}

export interface SubscriptionInfo {
  type: SubscriptionType;
  status: SubscriptionStatus;
  startDate: Date;
  endDate?: Date;
  trialUsed: boolean;
  trialStartDate?: Date;
  trialEndDate?: Date;
  paymentMethod?: string;
  customerId?: string;
}

export enum SubscriptionType {
  FREE = 'free',
  TRIAL = 'trial',
  PREMIUM = 'premium'
}

export enum SubscriptionStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  EXPIRED = 'expired',
  CANCELLED = 'cancelled',
  TRIAL_EXPIRED = 'trial_expired'
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  tracking: TrackingSettings;
  reporting: ReportingSettings;
}

export interface NotificationSettings {
  enabled: boolean;
  motivationalMessages: boolean;
  dailySummary: boolean;
  weeklyReport: boolean;
  achievementUnlocked: boolean;
  trialReminder: boolean;
  subscriptionReminder: boolean;
}

export interface PrivacySettings {
  shareAnonymousData: boolean;
  allowTelemetry: boolean;
  encryptLocalData: boolean;
  autoDeleteOldData: boolean;
  dataRetentionDays: number;
}

export interface TrackingSettings {
  enableFileTracking: boolean;
  enableTerminalTracking: boolean;
  enableDebugTracking: boolean;
  enableIdleDetection: boolean;
  idleThresholdMinutes: number;
  excludePatterns: string[];
  includePrivateRepos: boolean;
}

export interface ReportingSettings {
  defaultTimeRange: 'day' | 'week' | 'month' | 'year';
  includeWeekends: boolean;
  timeZone: string;
  exportFormat: 'json' | 'csv' | 'pdf';
}

export interface UserStatistics {
  totalActiveDays: number;
  totalCodingHours: number;
  totalLinesWritten: number;
  totalCommits: number;
  averageDailyActivity: number;
  longestCodingStreak: number;
  currentCodingStreak: number;
  favoriteLanguages: { [language: string]: number };
  productivityTrend: 'improving' | 'stable' | 'declining';
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  unlockedDate: Date;
  category: AchievementCategory;
  progress?: number;
  maxProgress?: number;
}

export enum AchievementCategory {
  CONSISTENCY = 'consistency',
  PRODUCTIVITY = 'productivity',
  LEARNING = 'learning',
  COLLABORATION = 'collaboration',
  MILESTONES = 'milestones'
}