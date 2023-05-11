require("./index");
function quickSort(arr, low, high) {
  if (low < high) {
    let p = hoare(arr, low, high);
    quickSort(arr, low, p);
    quickSort(arr, p + 1, high);
  }
}

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
    if (i >= j) return j;
    arr.swap(arr, i, j);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getMinSum(arr) {
  quickSort(arr, 0, arr.length - 1);
  let minSum = Infinity;
  for (let i = 1; i < arr.length; i++) {
    minSum = Math.min(minSum, Math.abs(arr[i] - arr[i - 1]));
  }
  return minSum;
}

console.log(getMinSum([29, 45, 9, 15, 1, 6, 19]));
