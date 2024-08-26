import { LogcheckMiddleware } from './logcheck.middleware';

describe('LogcheckMiddleware', () => {
  it('should be defined', () => {
    expect(new LogcheckMiddleware()).toBeDefined();
  });
});
