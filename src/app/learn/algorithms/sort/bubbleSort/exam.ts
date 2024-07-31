// Time Complexity of Insertion Sort
// Best case: O(n) , If the array is already sorted then it is the best-case scenario.
// Average case: O(n 2 ) , If the array is in reverse order then this condition is the worst case.
// Worst case: O(n 2 ) , If the array is in reverse order then this condition is the worst case.

// Auxiliary Space: O(1)

export default function bblSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
