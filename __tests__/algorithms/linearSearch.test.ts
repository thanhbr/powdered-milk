import { linearSearch } from "../../src/app/learn/algorithms/search/linearSearch/exam1"
import { findMaxNumber } from './../../src/app/learn/algorithms/search/linearSearch/exam2';
import { findAllIndices } from './../../src/app/learn/algorithms/search/linearSearch/exam3';
import { findNumberSorted } from './../../src/app/learn/algorithms/search/linearSearch/exam4';


describe('linearSearch', () => {
  it('should find the target element', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    expect(linearSearch(arr, target)).toBe(2);
  });

  it('should return -1 if the target is not found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    expect(linearSearch(arr, target)).toBe(-1);
  });

  it('should handle empty arrays', () => {
    const arr = [];
    const target = 1;
    expect(linearSearch(arr, target)).toBe(-1);
  });
});

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


describe('Tìm tất cả các vị trí của một phần tử trong mảng', () => {
  it('should return correct index for a single occurrence', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    expect(findAllIndices(arr, target)).toEqual([2]);
  });

  it('should return all indices for multiple occurrences', () => {
    const arr = [1, 2, 3, 2, 5];
    const target = 2;
    expect(findAllIndices(arr, target)).toEqual([1, 3]);
  });

  it('should return an empty array if the target is not found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    expect(findAllIndices(arr, target)).toEqual([]);
  });

  it('should return an empty array for an empty array', () => {
    const arr = [];
    const target = 1;
    expect(findAllIndices(arr, target)).toEqual([]);
  });

  it('should return all indices for a single-element array', () => {
    const arr = [42];
    const target = 42;
    expect(findAllIndices(arr, target)).toEqual([0]);
  });

  it('should return all indices for an array with all equal elements', () => {
    const arr = [5, 5, 5];
    const target = 5;
    expect(findAllIndices(arr, target)).toEqual([0, 1, 2]);
  });

  it('should handle undefined and null values', () => {
    const arr = [1, null, 3, undefined];
    expect(findAllIndices(arr, null)).toEqual([1]);
    expect(findAllIndices(arr, undefined)).toEqual([3]);
  });
});


describe('Exam 4 - Linear search', () => {
  it('should find all indices of a number', () => {
    const arr = [1, 2, 3, 2, 4, 2];
    const target = 2;
    expect(findNumberSorted(arr, target)).toEqual([1, 3, 5]);
  });

  it('should return an empty array if the target is not found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    expect(findNumberSorted(arr, target)).toEqual([]);
  });

  it('should handle empty array', () => {
    const arr = [];
    const target = 1;
    expect(findNumberSorted(arr, target)).toEqual([]);
  });

  it('should handle single element array', () => {
    const arr = [42];
    const target = 42;
    expect(findNumberSorted(arr, target)).toEqual([0]);
  });

  it('should handle all elements are the same', () => {
    const arr = [5, 5, 5];
    const target = 5;
    expect(findNumberSorted(arr, target)).toEqual([0, 1, 2]);
  });

  it('should handle negative numbers', () => {
    const arr = [-1, 2, -3, 4, -5];
    const target = -3;
    expect(findNumberSorted(arr, target)).toEqual([2]);
  });

  it('should handle large arrays', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    const target = 5000;
    expect(findNumberSorted(arr, target)).toEqual([5000]);
  });
});
