require("./index");
function hoare(arr, low, high) {
  let pivot = arr[low];
  let i = low - 1;
  let j = high + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i >= j) return i;
    arr.swap(i, j);
  }
}

const arr = [5, 3, 8, 4, 7, 2, 1, 10];
console.log(hoare(arr, 0, 7), arr);
