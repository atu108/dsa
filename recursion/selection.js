function selection(arr, r, c, maxTill) {
  if (r == 0) {
    return;
  }
  if (c < r) {
    if (arr[c + 1] > arr[maxTill]) {
      selection(arr, r, c + 1, c + 1);
    } else {
      selection(arr, r, c + 1, maxTill);
    }
  } else {
    let temp = arr[c];
    arr[c] = arr[maxTill];
    arr[maxTill] = temp;
    selection(arr, r - 1, 0, 0);
  }
}

const arr = [3, 3, 19, 7, 18, 91, 45, 67, 1];
selection(arr, arr.length - 1, 0, 0);
console.log(arr);
