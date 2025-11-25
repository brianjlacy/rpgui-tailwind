import { describe, it, expect } from 'vitest';
import { VERSION } from './index';

describe('RPGUI Tailwind', () => {
  it('should export VERSION', () => {
    expect(VERSION).toBe('0.0.1');
  });
});
