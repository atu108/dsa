function subArrayWithGivenSum(arr, sum) {
  const prefixSumSet = new Set();
  let prefixSum = 0;
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    if (prefixSumSet.has(prefixSum - sum)) return true;
    if (prefixSum == sum) return true;
    prefixSumSet.add(prefixSum);
  }
  return false;
}

let arr = [7, 0, -3, -2, 1];
console.log(subArrayWithGivenSum(arr, 4));
