function longestSubArrayWithGivenSum(arr, sum) {
  const prefixSumWithIndex = {};
  let prefixSum = 0;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    if (prefixSum == sum) {
      res = i + 1;
    }
    if (!prefixSumWithIndex[prefixSum]) {
      prefixSumWithIndex[prefixSum] = i;
    }
    if (prefixSumWithIndex[prefixSum - sum]) {
      res = Math.max(res, i - prefixSumWithIndex[prefixSum - sum]);
    }
  }
  return res;
}

const arr = [8, 3, 1, 5, -6, 6, 2, 2];

console.log(longestSubArrayWithGivenSum(arr, 4));
