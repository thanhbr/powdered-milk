// node src/app/learn/algorithms/testExam.ts

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while(high >= low) {
    mid = Math.floor((low + high) / 2);
    if(arr[mid] === target) return mid;

    if(arr[mid] > target) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return -1;
}

function searchElement(numbers, target) {
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
  return -1;
};

const arr = Array.from({ length: 100000001 }, (_, i) => i);
console.time('result')
// const result = searchElement(arr, 100000000);
// const result = arr.find(item => item === 10000000)
const result = binarySearch(arr, 100000000);
console.timeEnd('result')

console.log(result)

