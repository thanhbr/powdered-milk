export function findAllIndices(
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
