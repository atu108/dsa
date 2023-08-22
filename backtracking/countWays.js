function countWays(n) {
  // code here
  let arr = Array(n - 1)
    .fill(-1)
    .map((ele, index) => index + 1);
  let dp = Array(n + 1)
    .fill(-1)
    .map((ele, index) => Array(n).fill(-1));
  console.log(dp);
  return countWaysRecur(arr, n - 1, n, dp);
}

function countWaysRecur(arr, n, sum, dp) {
  if (sum == 0) {
    return 1;
  }
  if (sum < 0 || n == 0) {
    return 0;
  }
  if (dp[sum][n] != -1) {
    return dp[sum][n];
  }
  dp[sum][n] =
    countWaysRecur(arr, n, sum - arr[n - 1], dp) +
    countWaysRecur(arr, n - 1, sum, dp);
  return dp[sum][n];
}

console.log(countWays(5));
