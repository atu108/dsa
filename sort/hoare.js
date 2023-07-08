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

//keep moving from left and right towards the center until
//1 )on left element is smaller than pivot 2) on right greater than pivot
// If any voilates stop. if they have crossed then i will be the middle point of the partision
// else swap elements at i and continue the process;

const arr = [5, 3, 8, 4, 7, 2, 1, 10];
console.log(hoare(arr, 0, 7), arr);
