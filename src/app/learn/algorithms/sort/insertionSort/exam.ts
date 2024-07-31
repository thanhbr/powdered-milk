// Time Complexity of Insertion Sort
// Best case: O(n) , If the list is already sorted, where n is the number of elements in the list.
// Average case: O(n 2 ) , If the list is randomly ordered
// Worst case: O(n 2 ) , If the list is in reverse order

// Auxiliary Space: O(1), Insertion sort requires O(1) additional space,
// making it a space-efficient sorting algorithm.

// // node src/app/learn/algorithms/sort/insertionSort/exam.ts
// function insertionSort(arr) {
//   let i, key, j;
//   for(i = 1; i < arr.length; i++) {
//     key = arr[i];
//     j = i - 1;

//     while(j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//       console.log('arr--', arr);
//     }
//     arr[j + 1] = key;
//     console.log('arr', arr);
//   }
//   return arr;
// }
// const result = insertionSort([12, 11, 13, 5, 6 ]);
// console.log(result);

export default function insertionSort(arr: number[]): number[] {
  let i: number, key: number, j: number;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
