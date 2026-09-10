import { IpBlockMiddleware } from './ip-block.middleware.js';

describe('IpBlockMiddleware', () => {
  it('should be defined', () => {
    expect(new IpBlockMiddleware()).toBeDefined();
  });
});
