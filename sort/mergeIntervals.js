function mergeIntervals(arr, n) {
  arr.sort((a, b) => {
    return a[0] - b[0];
  });
  let i = 1;
  let count = 0;
  while (count < n) {
    if (arr[i - 1][1] > arr[i][0]) {
      arr[i][0] = Math.min(arr[i - 1][0], arr[i][0]);
      arr[i][1] = Math.max(arr[i - 1][1], arr[i][1]);
      deleteAnIndex(arr, i - 1);
    } else {
      i++;
    }
    count++;
  }
}

function deleteAnIndex(arr, k) {
  for (let i = k + 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.pop();
}

const arr = [
  [5, 10],
  [2, 3],
  [6, 8],
  [1, 7],
];
mergeIntervals(arr, arr.length - 1);
console.log(arr);
