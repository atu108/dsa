function bubbleSort(arr, c, row) {
  if (row == 0) {
    return;
  }
  if (c < row) {
    if (arr[c] > arr[c + 1]) {
      let temp = arr[c];
      arr[c] = arr[c + 1];
      arr[c + 1] = temp;
    }
    bubbleSort(arr, c + 1, row);
  } else {
    bubbleSort(arr, 0, row - 1);
  }
}

const arr = [3, 2, 19, 7, 18, 91, 45, 67, 1];
bubbleSort(arr, 0, arr.length - 1);
console.log(arr);
