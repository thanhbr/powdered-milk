// Tìm tất cả các vị trí của một phần tử trong mảng
// Cho một mảng và một phần tử cần tìm,
// hãy viết hàm trả về một mảng chứa tất cả các chỉ số của phần tử đó trong mảng ban đầu.

export default function findAllIndices(
  arr: any[],
  target: any
): any[] {
  if(arr.length === 0) return [];
  let indices: any[] = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) indices.push(i);
  }
  return indices;
}
