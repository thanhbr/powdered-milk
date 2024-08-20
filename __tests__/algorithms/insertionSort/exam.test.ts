import insertionSort from './../../../src/app/learn/algorithms/sort/insertionSort/exam';

describe('insertionSort', () => {
  it('should sort an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort a reverse sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an array with duplicates', () => {
    const arr = [3, 2, 3, 1, 2, 4];
    expect(insertionSort(arr)).toEqual([1, 2, 2, 3, 3, 4]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(insertionSort(arr)).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const arr = [1];
    expect(insertionSort(arr)).toEqual([1]);
  });

  it('should sort an array with negative numbers', () => {
    const arr = [-2, 4, -5, 1, 5, 0];
    expect(insertionSort(arr)).toEqual([-5, -2, 0, 1, 4, 5]);
  });

  // Trường hợp mảng lớn có thể được thêm vào để kiểm tra hiệu suất
  it('should handle a large array', () => {
    const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    const startTime = performance.now();
    insertionSort(largeArray);
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Time taken for large array: ${elapsedTime} milliseconds`);
  });
});
