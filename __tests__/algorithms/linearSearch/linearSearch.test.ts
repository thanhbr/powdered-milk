import { linearSearch } from "../../../src/app/learn/algorithms/search/linearSearch/exam1"


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
