function numberOfWays(denominations, n, sum, dp) {
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
    numberOfWays(denominations, n, sum - denominations[n - 1], dp) +
    numberOfWays(denominations, n - 1, sum, dp);
  return dp[sum][n];
}

const denominations = [1, 2, 5];
const n = denominations.length;
const sum = 5;
const dp = Array(sum + 1)
  .fill(-1)
  .map(() => Array(n + 1).fill(-1));

console.log(numberOfWays(denominations, n, sum, dp)); // Output: 4
