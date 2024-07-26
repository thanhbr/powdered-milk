// Cho:
// Một mảng các số nguyên
// Một số nguyên cần tìm

// Yêu cầu:
// Viết hàm tìm tất cả các vị trí của số cần tìm trong mảng.
// Điều kiện: Nếu tìm thấy nhiều vị trí, hãy trả về mảng các vị trí theo thứ tự tăng dần.
// Độ phức tạp: Thực hiện thuật toán tìm kiếm tuyến tính đơn giản.

export function findNumberSorted(
  arr: number[],
  target: number
): number[] {
  if(arr.length === 0) return [];
  let includes: number[] = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) includes.push(i)
  }
  return includes;
}
