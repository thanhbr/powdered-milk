
import findAllIndices from './../../../src/app/learn/algorithms/search/linearSearch/findAllIndices';

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
