import { describe, it, expect } from 'vitest';
import { toTitleCase } from '../../src/utils/string';

describe('toTitleCase', () => {
  // Test for normal input
  it('should convert a sentence to title case', () => {
    const input = 'hello world';
    const result = toTitleCase(input);
    expect(result).toBe('Hello World');
  });

  // Test with mixed cases
  it('should handle input with mixed cases', () => {
    const input = 'HeLLo wOrLD';
    const result = toTitleCase(input);
    expect(result).toBe('Hello World');
  });

  // Test with single word
  it('should convert a single word to title case', () => {
    const input = 'javascript';
    const result = toTitleCase(input);
    expect(result).toBe('Javascript');
  });

  // Test with empty string
  it('should return an empty string when the input is empty', () => {
    const input = '';
    const result = toTitleCase(input);
    expect(result).toBe('');
  });
  // Test with extra spaces
  it('should handle multiple spaces between words', () => {
    const input = '  hello   world  ';
    const result = toTitleCase(input);
    expect(result).toBe('  Hello   World  ');
  });

  // Test with non-alphabetical characters
  it('should not affect non-alphabetical characters', () => {
    const input = 'hello-world';
    const result = toTitleCase(input);
    expect(result).toBe('Hello-world');
  });

  // Test with numbers in the input
  it('should handle strings with numbers correctly', () => {
    const input = 'hello 123 world';
    const result = toTitleCase(input);
    expect(result).toBe('Hello 123 World');
  });

  // Test with special characters
  it('should handle special characters correctly', () => {
    const input = 'hello @world!';
    const result = toTitleCase(input);
    expect(result).toBe('Hello @world!');
  });
});