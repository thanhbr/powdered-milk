
import { quickSort } from './../../../src/app/learn/algorithms/sort/quickSort/exam';

describe('quickSort', () => {
  it('should sort an empty array', () => {
    const arr = [];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([]);
  });

  it('should sort an array with one element', () => {
    const arr = [5];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([5]);
  });

  it('should sort an array with multiple elements', () => {
    const arr = [64, 25, 12, 22, 11, 90];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([11, 12, 22, 25, 64, 90]);
  });

  it('should sort an array with duplicate elements', () => {
    const arr = [3, 3, 2, 1, 3, 4, 3, 2, 2];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 2, 2, 3, 3, 3, 3, 4]);
  });

  it('should sort an array with negative numbers', () => {
    const arr = [-5, 2, -2, 6, -3, 3, -1, 6, 5, -2, 3];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([-5, -3, -2, -2, -1, 2, 3, 3, 5, 6, 6]);
  });

  it('should handle edge cases', () => {
    const arr = [3, 2, 1, 0];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([0, 1, 2, 3]);
  });

  // Trường hợp mảng lớn có thể được thêm vào để kiểm tra hiệu suất
  it('should handle a large array', () => {
    const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    const startTime = performance.now();
    quickSort(largeArray, 0, largeArray.length - 1);
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Time taken for large array: ${elapsedTime} milliseconds`);
  });
});
