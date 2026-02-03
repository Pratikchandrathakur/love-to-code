/**
 * Date and time utility functions for GitHub Productivity Monitor
 */

export class DateHelper {
  /**
   * Formats a date according to the specified format
   */
  static formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  }

  /**
   * Formats a time according to 12h or 24h format
   */
  static formatTime(date: Date, format: '12h' | '24h' = '24h'): string {
    if (format === '12h') {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    } else {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  }

  /**
   * Gets the start of day for a given date
   */
  static getStartOfDay(date: Date): Date {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    return startOfDay;
  }

  /**
   * Gets the end of day for a given date
   */
  static getEndOfDay(date: Date): Date {
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    return endOfDay;
  }

  /**
   * Gets the start of week for a given date (Monday as start of week)
   */
  static getStartOfWeek(date: Date): Date {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday
    startOfWeek.setDate(diff);
    return this.getStartOfDay(startOfWeek);
  }

  /**
   * Gets the end of week for a given date (Sunday as end of week)
   */
  static getEndOfWeek(date: Date): Date {
    const endOfWeek = new Date(date);
    const day = endOfWeek.getDay();
    const diff = endOfWeek.getDate() + (day === 0 ? 0 : 7 - day);
    endOfWeek.setDate(diff);
    return this.getEndOfDay(endOfWeek);
  }

  /**
   * Gets the start of month for a given date
   */
  static getStartOfMonth(date: Date): Date {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    return this.getStartOfDay(startOfMonth);
  }

  /**
   * Gets the end of month for a given date
   */
  static getEndOfMonth(date: Date): Date {
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return this.getEndOfDay(endOfMonth);
  }

  /**
   * Gets the start of year for a given date
   */
  static getStartOfYear(date: Date): Date {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    return this.getStartOfDay(startOfYear);
  }

  /**
   * Gets the end of year for a given date
   */
  static getEndOfYear(date: Date): Date {
    const endOfYear = new Date(date.getFullYear(), 11, 31);
    return this.getEndOfDay(endOfYear);
  }

  /**
   * Calculates the difference between two dates in various units
   */
  static dateDiff(date1: Date, date2: Date, unit: 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds' = 'days'): number {
    const diffMs = Math.abs(date2.getTime() - date1.getTime());
    
    switch (unit) {
      case 'milliseconds':
        return diffMs;
      case 'seconds':
        return Math.floor(diffMs / 1000);
      case 'minutes':
        return Math.floor(diffMs / (1000 * 60));
      case 'hours':
        return Math.floor(diffMs / (1000 * 60 * 60));
      case 'days':
        return Math.floor(diffMs / (1000 * 60 * 60 * 24));
      default:
        return 0;
    }
  }

  /**
   * Adds time to a date
   */
  static addTime(date: Date, amount: number, unit: 'days' | 'hours' | 'minutes' | 'seconds'): Date {
    const newDate = new Date(date);
    
    switch (unit) {
      case 'seconds':
        newDate.setSeconds(newDate.getSeconds() + amount);
        break;
      case 'minutes':
        newDate.setMinutes(newDate.getMinutes() + amount);
        break;
      case 'hours':
        newDate.setHours(newDate.getHours() + amount);
        break;
      case 'days':
        newDate.setDate(newDate.getDate() + amount);
        break;
    }
    
    return newDate;
  }

  /**
   * Checks if a date is within working hours
   */
  static isWithinWorkingHours(date: Date, startTime: string, endTime: string): boolean {
    const currentTime = this.formatTime(date, '24h');
    return currentTime >= startTime && currentTime <= endTime;
  }

  /**
   * Checks if a date is a working day (Monday to Friday by default)
   */
  static isWorkingDay(date: Date, workingDays: number[] = [1, 2, 3, 4, 5]): boolean {
    return workingDays.includes(date.getDay());
  }

  /**
   * Gets the duration in a human-readable format
   */
  static formatDuration(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}d ${hours % 24}h ${minutes % 60}m`;
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }

  /**
   * Parses a duration string and returns milliseconds
   */
  static parseDuration(duration: string): number {
    const regex = /(\d+)([dhms])/g;
    let totalMs = 0;
    let match;

    while ((match = regex.exec(duration)) !== null) {
      const value = parseInt(match[1]!);
      const unit = match[2]!;

      switch (unit) {
        case 'd':
          totalMs += value * 24 * 60 * 60 * 1000;
          break;
        case 'h':
          totalMs += value * 60 * 60 * 1000;
          break;
        case 'm':
          totalMs += value * 60 * 1000;
          break;
        case 's':
          totalMs += value * 1000;
          break;
      }
    }

    return totalMs;
  }

  /**
   * Gets the timezone offset in hours
   */
  static getTimezoneOffset(): number {
    return new Date().getTimezoneOffset() / 60;
  }

  /**
   * Converts a date to a specific timezone
   */
  static toTimezone(date: Date, timezone: string): Date {
    const timeString = date.toLocaleString('en-US', { timeZone: timezone });
    return new Date(timeString);
  }

  /**
   * Gets the relative time string (e.g., "2 hours ago", "in 3 days")
   */
  static getRelativeTime(date: Date, baseDate: Date = new Date()): string {
    const diffMs = date.getTime() - baseDate.getTime();
    const absDiffMs = Math.abs(diffMs);
    const future = diffMs > 0;

    const seconds = Math.floor(absDiffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    let unit: string;
    let value: number;

    if (years > 0) {
      unit = years === 1 ? 'year' : 'years';
      value = years;
    } else if (months > 0) {
      unit = months === 1 ? 'month' : 'months';
      value = months;
    } else if (weeks > 0) {
      unit = weeks === 1 ? 'week' : 'weeks';
      value = weeks;
    } else if (days > 0) {
      unit = days === 1 ? 'day' : 'days';
      value = days;
    } else if (hours > 0) {
      unit = hours === 1 ? 'hour' : 'hours';
      value = hours;
    } else if (minutes > 0) {
      unit = minutes === 1 ? 'minute' : 'minutes';
      value = minutes;
    } else {
      return 'just now';
    }

    return future ? `in ${value} ${unit}` : `${value} ${unit} ago`;
  }

  /**
   * Groups dates by a specific period
   */
  static groupByPeriod(dates: Date[], period: 'day' | 'week' | 'month' | 'year'): Map<string, Date[]> {
    const groups = new Map<string, Date[]>();

    for (const date of dates) {
      let key: string;

      switch (period) {
        case 'day':
          key = this.formatDate(date, 'YYYY-MM-DD');
          break;
        case 'week':
          key = this.formatDate(this.getStartOfWeek(date), 'YYYY-MM-DD');
          break;
        case 'month':
          key = this.formatDate(date, 'YYYY-MM');
          break;
        case 'year':
          key = this.formatDate(date, 'YYYY');
          break;
      }

      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(date);
    }

    return groups;
  }

  /**
   * Gets the date range for a specific period
   */
  static getDateRange(period: 'today' | 'week' | 'month' | 'quarter' | 'year', baseDate: Date = new Date()): { start: Date; end: Date } {
    switch (period) {
      case 'today':
        return {
          start: this.getStartOfDay(baseDate),
          end: this.getEndOfDay(baseDate)
        };
      case 'week':
        return {
          start: this.getStartOfWeek(baseDate),
          end: this.getEndOfWeek(baseDate)
        };
      case 'month':
        return {
          start: this.getStartOfMonth(baseDate),
          end: this.getEndOfMonth(baseDate)
        };
      case 'quarter':
        const quarterStart = new Date(baseDate.getFullYear(), Math.floor(baseDate.getMonth() / 3) * 3, 1);
        const quarterEnd = new Date(baseDate.getFullYear(), Math.floor(baseDate.getMonth() / 3) * 3 + 3, 0);
        return {
          start: this.getStartOfDay(quarterStart),
          end: this.getEndOfDay(quarterEnd)
        };
      case 'year':
        return {
          start: this.getStartOfYear(baseDate),
          end: this.getEndOfYear(baseDate)
        };
      default:
        return {
          start: this.getStartOfDay(baseDate),
          end: this.getEndOfDay(baseDate)
        };
    }
  }
}