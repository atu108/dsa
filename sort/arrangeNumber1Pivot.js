require("./index");
function segregateNumbers(arr, low, high) {
  let pivot = 0;
  let i = low - 1;
  let j = high;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i >= j) return;
    arr.swap(i, j);
  }
}

const arr = [-2, -4, 5, 6, 7, 9, -9, 3];
segregateNumbers(arr, 0, arr.length - 1);
console.log(arr);
