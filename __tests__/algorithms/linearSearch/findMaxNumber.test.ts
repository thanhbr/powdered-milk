
import findMaxNumber from './../../../src/app/learn/algorithms/search/linearSearch/findMaxNumber';

describe('Tìm số lớn nhất trong mảng', () => {
  it('should return the largest number in a positive array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(findMaxNumber(arr)).toBe(5);
  });

  it('should return the largest number in a negative array', () => {
    const arr = [-5, -2, -10];
    expect(findMaxNumber(arr)).toBe(-2);
  });

  it('should return the largest number in a mixed array', () => {
    const arr = [2, -5, 8, -1, 9];
    expect(findMaxNumber(arr)).toBe(9);
  });

  it('should return the largest number when there are duplicates', () => {
    const arr = [2, 5, 8, 5, 9];
    expect(findMaxNumber(arr)).toBe(9);
  });

  it('should return undefined for an empty array', () => {
    const arr = [];
    expect(findMaxNumber(arr)).toBeUndefined();
  });

  it('should return the only element for a single-element array', () => {
    const arr = [42];
    expect(findMaxNumber(arr)).toBe(42);
  });

  it('should return any element for an array with all equal elements', () => {
    const arr = [5, 5, 5];
    expect(findMaxNumber(arr)).toBe(5);
  });

  it('should handle very large and very small numbers', () => {
    const arr = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];
    expect(findMaxNumber(arr)).toBe(Number.MAX_SAFE_INTEGER);
  });
});
