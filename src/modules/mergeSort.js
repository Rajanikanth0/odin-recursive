function merge(arr, start, mid, end) {
  const left = arr.slice(start, mid);
  const right = arr.slice(mid, end);
  let x = 0, y = 0, z = start;

  while(x < left.length && y < right.length) {
    arr[z++] = (left[x] <= right[y]) ? left[x++] : right[y++];
  }

  while(x < left.length) arr[z++] = left[x++];
  while(y < right.length) arr[z++] = right[y++];
}

export const mergeSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("mergeSort() requires an array");
  };

  return sort(arr);

  function sort(arr, start = 0, end = arr.length) {
    if ((end - start) <= 1) return arr;
  
    const mid = Math.floor((start + end) / 2);
    sort(arr, start, mid);
    sort(arr, mid, end);
    merge(arr, start, mid, end);
  
    return arr;
  }
};