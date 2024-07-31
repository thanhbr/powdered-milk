// Bài toán 2: Tìm số lớn nhất trong mảng
// Cho một mảng các số nguyên, hãy viết hàm tìm và trả về số lớn nhất trong mảng.

export default function findMaxNumber(arr: number[]) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
