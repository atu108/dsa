function zeroSumSubArr(arr) {
  let prefixSum = 0;
  let prefixSumSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    if (prefixSumSet.has(prefixSum)) return true;
    if (prefixSum == 0) return true;
    prefixSumSet.add(prefixSum);
  }
  return false;
}

let arr = [-3, 0, -3, -2, 3];
console.log(zeroSumSubArr(arr));
