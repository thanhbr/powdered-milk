export function formatVND(number: number): string {
  return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
