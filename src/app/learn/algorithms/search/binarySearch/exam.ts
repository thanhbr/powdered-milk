// LOW TIME
function search(numbers: number[], target: number): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = numbers[mid];
    if (midVal === target) return mid;
    if (midVal < target) {
      left++;
    } else right--;
  }
  // [-1,0,3,5,9,12] 9 = 4
  return -1;
};
