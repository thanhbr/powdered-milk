
import findElement from './../../../src/app/learn/algorithms/search/binarySearch/findElement';

describe('Tìm một phần tử trong mảng đã sắp xếp' , () => {
  it('findElement should return true if target is found', () => {
    expect(findElement([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it('findElement should return false if target is not found', () => {
    expect(findElement([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it('findElement should work with empty array', () => {
    expect(findElement([], 3)).toBe(-1);
  });

  it('findElement should work with a single element array', () => {
    expect(findElement([5], 5)).toBe(0);
    expect(findElement([5], 3)).toBe(-1);
  });

  it('findElement should work with negative numbers', () => {
    expect(findElement([-2, -1, 0, 1, 2], -1)).toBe(1);
  });
})
