function missingNumber(arr, n) {
  let countOfNonPositiveNumbers = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= 0) {
      this.swap(arr, i, countOfNonPositiveNumbers);
      countOfNonPositiveNumbers++;
    }
  }

  arr = arr.slice(countOfNonPositiveNumbers, n);
  n = arr.length;
  for (let i = 0; i < n; i++) {
    if (Math.abs(arr[i]) - 1 < n && arr[Math.abs(arr[i]) - 1] > 0)
      arr[Math.abs(arr[i]) - 1] = -1 * arr[Math.abs(arr[i]) - 1];
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(missingNumber([4,3,5,1,2], 5));
