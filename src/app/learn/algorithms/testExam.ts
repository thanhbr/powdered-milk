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

function recursiveBinarySearch(arr, target) {
  return searchBinary(arr, target, 0, arr.length - 1);
}

function searchBinary(arr, target, leftIndex, rightIndex) {
  if(leftIndex > rightIndex) return -1;

  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if(arr[middleIndex] === target) return middleIndex;

  if(arr[middleIndex] > target) {
    return searchBinary(arr, target, 0, middleIndex - 1)
  } else return searchBinary(arr, target, middleIndex + 1, arr.length)
}

const arr = Array.from({ length: 100000001 }, (_, i) => i);
console.time('result')
// const result = searchElement(arr, 100000000);
// const result = arr.find(item => item === 10000000)
// const result = binarySearch(arr, 100000000);
const result = recursiveBinarySearch(arr, 100000000);
console.timeEnd('result')

console.log(result)

