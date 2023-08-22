function maxSum(arr, k) {
  let current = sum(arr.slice(0, k));
  let res = current;
  for (let i = k; i < arr.length; i++) {
    current = current + arr[i] - arr[i - k];
    res = Math.max(current, res);
  }
  return res;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(maxSum([1, 8, 30, -5, 20, 7], 4));
