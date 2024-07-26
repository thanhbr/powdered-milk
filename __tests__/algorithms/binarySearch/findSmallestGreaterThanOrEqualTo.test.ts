import findSmallestGreaterThanOrEqualTo from './../../../src/app/learn/algorithms/search/binarySearch/findSmallestGreaterThanOrEqualTo';

describe('Tìm phần tử nhỏ nhất lớn hơn hoặc bằng một giá trị cho trước', () => {
  it('findElement should return the index of the smallest element greater than or equal to target', () => {
    expect(findSmallestGreaterThanOrEqualTo([1, 3, 5, 7, 9], 5)).toBe(2);
    expect(findSmallestGreaterThanOrEqualTo([1, 3, 5, 7, 9], 6)).toBe(3);
    expect(findSmallestGreaterThanOrEqualTo([1, 3, 5, 7, 9], 0)).toBe(0);
  });

  it('findElement should return -1 if target is greater than all elements', () => {
      expect(findSmallestGreaterThanOrEqualTo([1, 3, 5, 7, 9], 10)).toBe(-1);
  });

  it('findElement should return -1 if target is smaller than all elements', () => {
      expect(findSmallestGreaterThanOrEqualTo([1, 3, 5, 7, 9], -1)).toBe(0);
  });

  it('findElement should work with empty array', () => {
      expect(findSmallestGreaterThanOrEqualTo([], 3)).toBe(-1);
  });

  // Thêm các test case cho các trường hợp còn lại...

  it('findElement should work with a single element array', () => {
      expect(findSmallestGreaterThanOrEqualTo([5], 5)).toBe(0);
      expect(findSmallestGreaterThanOrEqualTo([5], 3)).toBe(0);
      expect(findSmallestGreaterThanOrEqualTo([5], 6)).toBe(-1);
  });

  it('findElement should work with negative numbers', () => {
      expect(findSmallestGreaterThanOrEqualTo([-2, -1, 0, 1, 2], -1)).toBe(1);
  });
})
