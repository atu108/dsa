const s1 = "aefghah";
const s2 = "adtrgha";
const m = s1.length;
const n = s2.length;
let memo = new Array(m + 1).fill(new Array(n + 1).fill(-1));
console.log(longestCommonSubSeq(s1, s2, m, n));
function longestCommonSubSeq(s1, s2, m, n) {
  if (memo[m][n] != -1) {
    return memo[m][n];
  }
  if (n == 0 || m == 0) {
    memo[m][n] = 0;
  } else {
    if (s1[m - 1] == s2[n - 1]) {
      memo[m][n] = 1 + longestCommonSubSeq(s1, s2, m - 1, n - 1);
    } else {
      memo[m][n] = Math.max(
        longestCommonSubSeq(s1, s2, m, n - 1),
        longestCommonSubSeq(s1, s2, m - 1, n)
      );
    }
  }
  return memo[m][n];
}
