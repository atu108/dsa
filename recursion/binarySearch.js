function search(arr, ele, start, end) {
  if (start > end) return -1;
  const mid = start + Math.floor((end - start) / 2); // for number overflow
  if (arr[mid] == ele) return mid;
  else if (arr[mid] > ele) return search(arr, ele, 0, mid - 1);
  else return search(arr, ele, mid + 1, end);
}

const arr = [1, 2, 7, 7, 7, 7, 7, 7, 8, 8];
console.log(search(arr, 8, 0, arr.length));
