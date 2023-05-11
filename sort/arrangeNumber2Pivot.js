require("./index");
function arrangeNumbers2Pivots(arr, low, high) {
  let i = low;
  let mid = low;
  let j = high;
  while (mid <= j) {
    if (arr[mid] == 0) {
      arr.swap(i, mid);
      i++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      arr.swap(mid, j);
      j--;
    }
  }
}

let arr = [0, 0, 1, 2, 0, 1, 2, 0];
arrangeNumbers2Pivots(arr, 0, arr.length - 1);
console.log(arr);
