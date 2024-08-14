export default function findElement(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;
  let mid: number;
  while (high >= low) {
    mid = Math.floor((high + low) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return -1;
}



// // 14/08/2024
// export default function findElement(arr: number[], target: number) {
//   let low = 0;
//   let high = arr.length - 1;
//   let mid: number;
//   while (high >= low) {
//     mid = Math.floor((high + low) / 2);

//     if(arr[mid] === target) return mid;
//     if(arr[mid] > target) {
//       high = mid - 1;
//     } else low = mid + 1;
//   }
//   return -1;
// }
