

import { formatDuration } from './duration'; // Funktion importieren

describe('formatDuration', () => {
  it('should format 0 seconds as 0s', () => {
    expect(formatDuration(0)).toBe('0s');
  });

  it('should format 33 seconds as 33s', () => {
    expect(formatDuration(33)).toBe('33s');
  });

  it('should format 123 seconds as 2m3s', () => {
    expect(formatDuration(123)).toBe('2m3s');
  });

  it('should format 500 seconds as 8m20s', () => {
    expect(formatDuration(500)).toBe('8m20s');
  });

  it('should format 3600 seconds as 1h', () => {
    expect(formatDuration(3600)).toBe('1h');
  });

  it('should format 3999 seconds as 1h6m39s', () => {
    expect(formatDuration(3999)).toBe('1h6m39s');
  });

  it('should round decimal seconds correctly', () => {
    expect(formatDuration(1.7)).toBe('2s');
    expect(formatDuration(1.4)).toBe('1s');
  });

  it('should throw an error for negative seconds', () => {
    expect(() => formatDuration(-5)).toThrow('Seconds cannot be negative');
  });
});
