// Input:
// Một mảng các số nguyên đã được sắp xếp tăng dần.
// Một giá trị mục tiêu (target).

// Output:
// Chỉ số của phần tử đầu tiên có giá trị nhỏ hơn hoặc bằng mục tiêu.
// Nếu không tìm thấy, trả về -1.

export default function findLargestSmallerThanOrEqualTo(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) {
      left = mid + 1;
    } else right = mid - 1;
  }
  return arr[right] <= target ? right : -1;
}

// // 14/08/2024
// export default function findLargestSmallerThanOrEqualTo(arr: number[], target: number) {
//   let left = 0;
//   let right = arr.length - 1;
//   while(left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if(arr[mid] >= target) {
//       right = mid - 1;
//     } else left = mid + 1;
//   }
//   return right >= 0 && arr[right] <= target ? right : -1
// }
