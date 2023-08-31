function maxSumSubArrayK(k, arr) {
  let maxSum = 0;
  let windowStart = 0;
  let windowSum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}

console.log(maxSumSubArrayK(3, [2, 1, 5, 1, 3, 2]));
