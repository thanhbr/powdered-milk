// node src/app/learn/algorithms/testExam.ts

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while(high >= low) {
    mid = low + Math.floor((high - low) / 2);
    if(arr[mid] === target) return mid;

    if(arr[mid] > target) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return -1;
}

const arr = Array.from({ length: 100000001 }, (_, i) => i);
console.time('result')
// const result = binarySearch(arr, 100000000);
const result = arr.find(item => item === 10000000)
console.timeEnd('result')

console.log(result)

