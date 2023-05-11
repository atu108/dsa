require("./index");
function kthSmallest(arr, k, low, high) {
  while (low <= high) {
    let i = partision(arr, low, high);
    if (i == k - 1) {
      return arr[i];
    }
    if (i > k - 1) {
      high = i - 1;
    }
    if (i < k - 1) {
      low = i + 1;
    }
  }
  return -1;
}
function partision(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      arr.swap(i, j);
    }
  }
  arr.swap(i + 1, high);
  return i + 1;
}
const arr = [10, 3, 5, 15, 1, 7, 8];
console.log(kthSmallest(arr, 1, 0, 6));
