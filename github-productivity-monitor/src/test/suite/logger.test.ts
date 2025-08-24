import * as assert from 'assert';
import * as vscode from 'vscode';
import { Logger } from '../../utils/logger';

suite('Logger Test Suite', () => {
  let logger: Logger;

  setup(() => {
    // Create a mock extension context for testing
    const mockContext = {
      globalStorageUri: vscode.Uri.file('/tmp/test-storage'),
      globalState: {
        get: () => undefined,
        update: async () => {},
      },
      workspaceState: {
        get: () => undefined,
        update: async () => {},
      },
      secrets: {
        get: async () => undefined,
        store: async () => {},
        delete: async () => {},
      },
      subscriptions: [],
    } as any;

    logger = new Logger(mockContext);
  });

  teardown(() => {
    logger.dispose();
  });

  test('Logger should initialize successfully', () => {
    assert.ok(logger);
  });

  test('Logger should log messages at different levels', () => {
    assert.doesNotThrow(() => {
      logger.debug('Debug message');
      logger.info('Info message');
      logger.warn('Warning message');
      logger.error('Error message');
    });
  });

  test('Logger should handle errors properly', () => {
    const error = new Error('Test error');
    assert.doesNotThrow(() => {
      logger.error('Error with exception', error);
    });
  });
});