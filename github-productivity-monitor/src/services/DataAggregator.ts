import * as vscode from 'vscode';
import { Logger } from '../utils/logger';
import { Activity, ActivitySummary } from '../models/Activity';
import { Storage } from '../utils/storage';

export class DataAggregator {
  private context: vscode.ExtensionContext;
  private logger: Logger;
  private storage: Storage;
  private activities: Activity[] = [];
  private autoSaveTimer?: NodeJS.Timeout | undefined;

  constructor(context: vscode.ExtensionContext, logger: Logger) {
    this.context = context;
    this.logger = logger;
    this.storage = new Storage(context);
    this.startAutoSave();
    this.loadPendingActivities();
  }

  public addActivity(activity: Activity): void {
    this.activities.push(activity);
    this.logger.debug(`Activity added: ${activity.type} at ${activity.timestamp}`);
  }

  public async getActivities(startDate?: Date, endDate?: Date): Promise<Activity[]> {
    try {
      // Load from storage if date range is specified
      if (startDate || endDate) {
        const storedActivities = await this.loadActivitiesFromStorage(startDate, endDate);
        return storedActivities;
      }
      
      return [...this.activities];
    } catch (error) {
      this.logger.error('Failed to get activities', error);
      return [];
    }
  }

  public async generateSummary(startDate: Date, endDate: Date): Promise<ActivitySummary> {
    try {
      const activities = await this.getActivities(startDate, endDate);
      
      const summary: ActivitySummary = {
        date: startDate.toISOString().split('T')[0]!,
        totalActivities: activities.length,
        activeTime: this.calculateActiveTime(activities),
        idleTime: this.calculateIdleTime(activities),
        filesEdited: this.countUniqueFiles(activities),
        linesAdded: this.countLinesAdded(activities),
        linesDeleted: this.countLinesDeleted(activities),
        debugSessions: this.countDebugSessions(activities),
        terminalCommands: this.countTerminalCommands(activities),
        languages: this.analyzeLanguages(activities),
        mostActiveHour: this.findMostActiveHour(activities),
        productivity: this.calculateProductivityMetrics(activities)
      };

      return summary;
    } catch (error) {
      this.logger.error('Failed to generate activity summary', error);
      throw error;
    }
  }

  public async savePendingData(): Promise<void> {
    try {
      if (this.activities.length > 0) {
        const dateKey = new Date().toISOString().split('T')[0];
        await this.storage.store(`activities_${dateKey}`, this.activities);
        this.logger.info(`Saved ${this.activities.length} activities to storage`);
        this.activities = [];
      }
    } catch (error) {
      this.logger.error('Failed to save pending activities', error);
    }
  }

  private async loadPendingActivities(): Promise<void> {
    try {
      const dateKey = new Date().toISOString().split('T')[0];
      const storedActivities = await this.storage.retrieve<Activity[]>(`activities_${dateKey}`, []);
      if (storedActivities && storedActivities.length > 0) {
        this.activities = storedActivities;
        this.logger.info(`Loaded ${this.activities.length} pending activities from storage`);
      }
    } catch (error) {
      this.logger.error('Failed to load pending activities', error);
    }
  }

  private async loadActivitiesFromStorage(startDate?: Date, endDate?: Date): Promise<Activity[]> {
    const allActivities: Activity[] = [];
    
    try {
      const keys = await this.storage.listKeys();
      const activityKeys = keys.filter(key => key.startsWith('activities_'));
      
      for (const key of activityKeys) {
        const dateStr = key.replace('activities_', '');
        const date = new Date(dateStr);
        
        if (startDate && date < startDate) continue;
        if (endDate && date > endDate) continue;
        
        const activities = await this.storage.retrieve<Activity[]>(key, []);
        if (activities) {
          allActivities.push(...activities);
        }
      }
    } catch (error) {
      this.logger.error('Failed to load activities from storage', error);
    }
    
    return allActivities;
  }

  private startAutoSave(): void {
    // Auto-save every 5 minutes
    this.autoSaveTimer = setInterval(() => {
      this.savePendingData();
    }, 5 * 60 * 1000);
  }

  private calculateActiveTime(activities: Activity[]): number {
    // Calculate active time based on activities (in minutes)
    let activeTime = 0;
    let lastActivityTime: Date | null = null;
    
    const sortedActivities = activities.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    
    for (const activity of sortedActivities) {
      if (lastActivityTime) {
        const timeDiff = activity.timestamp.getTime() - lastActivityTime.getTime();
        // If less than 10 minutes between activities, consider it active time
        if (timeDiff < 10 * 60 * 1000) {
          activeTime += timeDiff;
        }
      }
      lastActivityTime = activity.timestamp;
    }
    
    return Math.round(activeTime / (60 * 1000)); // Convert to minutes
  }

  private calculateIdleTime(activities: Activity[]): number {
    // Calculate idle time based on idle activities
    return activities
      .filter(activity => activity.type === 'idle')
      .reduce((total, activity) => total + (activity.details.duration || 0), 0) / (60 * 1000);
  }

  private countUniqueFiles(activities: Activity[]): number {
    const files = new Set<string>();
    activities
      .filter(activity => activity.fileName)
      .forEach(activity => files.add(activity.fileName!));
    return files.size;
  }

  private countLinesAdded(activities: Activity[]): number {
    return activities
      .filter(activity => activity.type === 'file_edit')
      .reduce((total, activity) => total + (activity.details.insertions || 0), 0);
  }

  private countLinesDeleted(activities: Activity[]): number {
    return activities
      .filter(activity => activity.type === 'file_edit')
      .reduce((total, activity) => total + (activity.details.deletions || 0), 0);
  }

  private countDebugSessions(activities: Activity[]): number {
    return activities.filter(activity => activity.type === 'debug_start').length;
  }

  private countTerminalCommands(activities: Activity[]): number {
    return activities.filter(activity => activity.type === 'terminal_command').length;
  }

  private analyzeLanguages(activities: Activity[]): { [language: string]: number } {
    const languages: { [language: string]: number } = {};
    
    activities
      .filter(activity => activity.language)
      .forEach(activity => {
        const lang = activity.language!;
        languages[lang] = (languages[lang] || 0) + 1;
      });
    
    return languages;
  }

  private findMostActiveHour(activities: Activity[]): number {
    const hourCounts: { [hour: number]: number } = {};
    
    activities.forEach(activity => {
      const hour = activity.timestamp.getHours();
      hourCounts[hour] = (hourCounts[hour] || 0) + 1;
    });
    
    let mostActiveHour = 0;
    let maxCount = 0;
    
    for (const [hour, count] of Object.entries(hourCounts)) {
      if (count > maxCount) {
        maxCount = count;
        mostActiveHour = parseInt(hour);
      }
    }
    
    return mostActiveHour;
  }

  private calculateProductivityMetrics(activities: Activity[]): any {
    const fileEditActivities = activities.filter(activity => activity.type === 'file_edit');
    const fileSaveActivities = activities.filter(activity => activity.type === 'file_save');
    
    const totalActions = activities.length;
    const activeTime = this.calculateActiveTime(activities);
    const efficiency = activeTime > 0 ? totalActions / activeTime : 0;
    
    const editToSaveRatio = fileSaveActivities.length > 0 ? 
      fileEditActivities.length / fileSaveActivities.length : 1;
    
    // Simple productivity score calculation (0-100)
    const productivityScore = Math.min(100, Math.max(0, 
      (efficiency * 10) + 
      (activeTime / 60) + 
      (editToSaveRatio > 1 ? 10 : 20) + // Reward fewer edits per save
      (this.countUniqueFiles(activities) * 2)
    ));
    
    return {
      score: Math.round(productivityScore),
      focusTime: activeTime,
      efficiency: Math.round(efficiency * 100) / 100,
      codeQuality: Math.round((1 / editToSaveRatio) * 100) / 100,
      consistency: this.calculateConsistency(activities)
    };
  }

  private calculateConsistency(activities: Activity[]): number {
    if (activities.length < 2) return 0;
    
    // Calculate consistency based on activity distribution throughout the day
    const hours = activities.map(activity => activity.timestamp.getHours());
    const uniqueHours = new Set(hours).size;
    
    // More spread out activities = higher consistency
    return Math.round((uniqueHours / 24) * 100);
  }

  public dispose(): void {
    if (this.autoSaveTimer) {
      clearInterval(this.autoSaveTimer);
    }
    this.savePendingData();
  }
}