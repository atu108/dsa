require("./index");
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    arr.swap(arr, i, minIndex);
  }
}

const arr = [9, 8, 10, 9, 2, 10];
selectionSort(arr);
console.log(arr);
