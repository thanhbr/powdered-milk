import { findElementByBinarySearch } from './../../src/app/learn/algorithms/search/binarySearch/exam1';

describe('Tìm một phần tử trong mảng đã sắp xếp' , () => {
  it('findElementByBinarySearch should return true if target is found', () => {
    expect(findElementByBinarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it('findElementByBinarySearch should return false if target is not found', () => {
    expect(findElementByBinarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it('findElementByBinarySearch should work with empty array', () => {
    expect(findElementByBinarySearch([], 3)).toBe(-1);
  });

  it('findElementByBinarySearch should work with a single element array', () => {
    expect(findElementByBinarySearch([5], 5)).toBe(0);
    expect(findElementByBinarySearch([5], 3)).toBe(-1);
  });

  it('findElementByBinarySearch should work with negative numbers', () => {
    expect(findElementByBinarySearch([-2, -1, 0, 1, 2], -1)).toBe(1);
  });
})
