import * as assert from 'assert';
import { Activity, ActivityType } from '../../models/Activity';
import { DataAggregator } from '../../services/DataAggregator';

suite('DataAggregator Test Suite', () => {
  let dataAggregator: DataAggregator;

  setup(() => {
    // Create a mock extension context for testing
    const mockContext = {
      globalStorageUri: { fsPath: '/tmp/test-storage' },
      globalState: {
        get: () => undefined,
        update: async () => {},
      },
    } as any;

    const mockLogger = {
      debug: () => {},
      info: () => {},
      warn: () => {},
      error: () => {},
    } as any;

    dataAggregator = new DataAggregator(mockContext, mockLogger);
  });

  teardown(() => {
    dataAggregator.dispose();
  });

  test('DataAggregator should initialize successfully', () => {
    assert.ok(dataAggregator);
  });

  test('DataAggregator should add activities', () => {
    const activity: Activity = {
      id: 'test-1',
      timestamp: new Date(),
      type: ActivityType.FILE_OPEN,
      details: {
        fileName: 'test.ts',
        language: 'typescript'
      }
    };

    assert.doesNotThrow(() => {
      dataAggregator.addActivity(activity);
    });
  });

  test('DataAggregator should retrieve activities', async () => {
    const activity: Activity = {
      id: 'test-2',
      timestamp: new Date(),
      type: ActivityType.FILE_EDIT,
      details: {
        fileName: 'test.ts',
        language: 'typescript',
        insertions: 5,
        deletions: 2
      }
    };

    dataAggregator.addActivity(activity);
    const activities = await dataAggregator.getActivities();
    
    assert.ok(activities.length > 0);
    assert.strictEqual(activities[activities.length - 1].id, 'test-2');
  });

  test('DataAggregator should generate summary', async () => {
    const startDate = new Date();
    const endDate = new Date();
    
    const summary = await dataAggregator.generateSummary(startDate, endDate);
    
    assert.ok(summary);
    assert.ok(typeof summary.totalActivities === 'number');
    assert.ok(typeof summary.activeTime === 'number');
    assert.ok(summary.productivity);
  });
});