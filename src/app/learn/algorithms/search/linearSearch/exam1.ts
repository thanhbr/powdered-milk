function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i;
      }
  }
  return -1;
}

// Ví dụ sử dụng:
const numbers = [2, 5, 8, 1, 9];
const targetNumber = 8;
const index = linearSearch(numbers, targetNumber);
console.log(index); // Output: 2
