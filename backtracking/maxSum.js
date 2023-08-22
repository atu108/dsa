function maximumSum(arr, sizeOfArray) {
  // code here
  let max = arr[0];
  let res = [arr[0]];
  for (let i = 1; i < sizeOfArray; i++) {
    res[i] = res[i - 1] + arr[i];
    max = Math.max(max, res[i]);
  }
  console.log(res);
  return max;
}

console.log(maximumSum([5, -2, -3, 32, -5, 65], 6));
