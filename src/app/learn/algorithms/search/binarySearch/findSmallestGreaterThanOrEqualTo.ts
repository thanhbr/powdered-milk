// Input:
// Một mảng các số nguyên đã được sắp xếp tăng dần.
// Một giá trị mục tiêu (target).

// Output:
// Chỉ số của phần tử đầu tiên có giá trị lớn hơn hoặc bằng mục tiêu.
// Nếu không tìm thấy, trả về -1.

export default function findSmallestGreaterThanOrEqualTo(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      right = mid;
    } else left = mid + 1;
  }
  return arr[left] >= target ? left : -1;
}
