function partision(arr, pivot) {
  let p = [];
  let i = 0;
  let j = arr.length - 1;
  let k = 0;
  while (i <= j) {
    if (arr[k] <= pivot) {
      p[i] = arr[k];
      i++;
    } else {
      p[j] = arr[k];
      j--;
    }
    k++;
  }
  return p;
}

const arr = [90, 8, 10, 2, 30, 1, 90, 8, 10];

console.log(partision(arr, 80));
