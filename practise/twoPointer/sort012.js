/*
Given an array containing 0s, 1s and 2s, 
sort the array in-place. 
You should treat numbers of the array as objects, 
hence, we can’t count 0s, 1s, and 2s to recreate the array.
*/

function sort(arr) {
  let low = -1;
  let high = arr.length;
  let i = 0;
  while (i <= high) {
    if (arr[i] == 0) {
      low++;
      swap(arr, i, low);
    } else if (arr[i] == 1) {
      i++;
    } else {
      high--;
      swap(arr, i, high);
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [1, 1, 0, 1, 0, 0, 1, 1, 1, 0];

sort(arr);

console.log(arr);
