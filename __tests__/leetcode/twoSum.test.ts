
import twoSum from './../../src/app/learn/leetcode/twoSum';

describe('twoSum', () => {
  it('should find two numbers at the beginning', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(numbers, target)).toEqual([0, 1]);
  });

  it('should find two numbers at the end', () => {
    const numbers = [3, 2, 4];
    const target = 6;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });

  it('should find two numbers in the middle', () => {
    const numbers = [1, 4, 2, 5, 3];
    const target = 6;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });

  it('should handle empty array', () => {
    const numbers = [];
    const target = 9;
    expect(twoSum(numbers, target)).toEqual([]);
  });

  it('should handle array with one element', () => {
    const numbers = [2];
    const target = 3;
    expect(twoSum(numbers, target)).toEqual([]);
  });

  it('should handle no solution', () => {
    const numbers = [3, 2, 4];
    const target = 1;
    expect(twoSum(numbers, target)).toEqual([]);
  });

  it('should handle negative numbers', () => {
    const numbers = [-2, 1, -3, 4, 1, 5, 0];
    const target = -1;
    expect(twoSum(numbers, target)).toEqual([0, 1]);
  });

  it('should handle duplicate numbers', () => {
    const numbers = [3, 3, 4];
    const target = 6;
    expect(twoSum(numbers, target)).toEqual([0, 1]);
  });

  it('should handle a large array', () => {
    const largeArray = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 10000));
    const target = Math.floor(Math.random() * 20000); // Tạo một target ngẫu nhiên

    const startTime = performance.now();
    twoSum(largeArray, target);
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Time taken for large array: ${elapsedTime} milliseconds`);
  });
});
