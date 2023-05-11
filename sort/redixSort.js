/*
    - When numbers are in range N^2 counting dort will take more time 
    than merge and quick sort as they take O(nlogn).

    - Use redix sort to sort numbers in long range

    - Sorts numbers based on digit sorting
    eg
    it will sort first the ones digit
    it will then sort ten digit 
    it will then sort 100th digit
    and so on
*/

function redixSort(arr) {
  const max = Math.max(...arr);
  for (let i = 1; Math.floor(max / i) > 0; i = i * 10) {
    countingSort(arr, i);
  }
}

function countingSort(arr, exp) {
  let n = arr.length;
  let countArr = new Array(10).fill(0);
  for (let i = 0; i < n; i++) {
    countArr[Math.floor(arr[i] / exp) % 10]++;
  }
  for (let i = 1; i < 10; i++) {
    countArr[i] = countArr[i - 1] + countArr[i];
  }
  let temp = [];
  for (let i = n - 1; i >= 0; i--) {
    let index = Math.floor(arr[i] / exp) % 10;
    temp[countArr[index] - 1] = arr[i];
    countArr[index]--;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
}

const arr = [5, 6, 5, 9, 10, 10, 0, 99, 98, 78, 34, 46];
redixSort(arr);
console.log(arr);
