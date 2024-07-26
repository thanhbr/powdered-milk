import { fibonacci } from '../../../src/app/learn/algorithms/fibonacci/exam1';

describe("fibonacci", () => {
  it('should calculate Fibonacci sequence correctly', () => {
    expect(fibonacci(0)).toEqual([]);
    expect(fibonacci(1)).toEqual([0]);
    expect(fibonacci(2)).toEqual([0, 1]);
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it('should handle negative input', () => {
    expect(fibonacci(-1)).toEqual([]);
  });
})
