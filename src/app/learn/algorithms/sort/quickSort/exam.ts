const partition = (arr: number[], low: number, high: number) => {
  const pivot = arr[high]; // Chọn phần tử cuối cùng làm phần tử trục
  let i = low - 1; // Chỉ số của phần tử nhỏ hơn phần tử trục

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      // Nếu phần tử hiện tại nhỏ hơn phần tử trục
      i++; // Tăng chỉ số của phần tử nhỏ hơn
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Hoán đổi vị trí hai phần tử
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Hoán đổi phần tử trục với phần tử đầu tiên của danh sách con bên phải
  return i + 1; // Trả về chỉ số của phần tử trục
};

export const quickSort = (arr: number[], low: number, high: number) => {
  if (low < high) {
    // Nếu danh sách con có ít nhất hai phần tử
    const pi = partition(arr, low, high); // Chia danh sách con

    quickSort(arr, low, pi - 1); // Sắp xếp danh sách con bên trái
    quickSort(arr, pi + 1, high); // Sắp xếp danh sách con bên phải
  }
  return arr; // Trả về danh sách đã sắp xếp
};
