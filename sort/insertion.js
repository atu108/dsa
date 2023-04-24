function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

const arr = [
  90, 8, 10, 2, 30, 1, 90, 8, 10, 2, 30, 1, 90, 8, 10, 2, 30, 1, 90, 8, 10, 2,
  30, 1,
];
console.time("sorting");
insertionSort(arr);
console.log(arr);
console.timeEnd("sorting");

/*
    when array is smaller ? Why inner loop may run for n when the smallest ele is at the end also 
    it will make lots of memory writes for shifting at line 6
*/
