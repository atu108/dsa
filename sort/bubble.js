function bubbleSort(arr, dse = true) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (dse) {
        if (arr[j] < arr[j + 1]) {
          swap(arr, j, j + 1);
          swapped = true;
        }
      } else {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          swapped = true;
        }
      }
    }
    if (!swapped) break;
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [9, 8, 10, 9, 2, 10];
bubbleSort(arr, false);
console.log(arr);
