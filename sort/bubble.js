require("./index");
function bubbleSort(arr, dse = true) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (dse) {
        if (arr[j] < arr[j + 1]) {
          arr.swap(j, j + 1);
          swapped = true;
        }
      } else {
        if (arr[j] > arr[j + 1]) {
          arr.swap(j, j + 1);
          swapped = true;
        }
      }
    }
    if (!swapped) break;
  }
}

const arr = [9, 8, 10, 9, 2, 10];
bubbleSort(arr, false);
console.log(arr);
