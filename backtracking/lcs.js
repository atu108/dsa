let m = 0;
function lcs(s1, s2, n1, n2, matrix) {
  if (matrix[n1][n2] != -1) {
    return matrix[n1][n2];
  }
  if (n1 == 0 || n2 == 0) {
    matrix[n1][n2] = 0;
  } else {
    if (s1[n1 - 1] == s2[n2 - 1]) {
      matrix[n1][n2] = 1 + lcs(s1, s2, n1 - 1, n2 - 1, matrix);
    } else {
      matrix[n1][n2] = Math.max(
        lcs(s1, s2, n1, n2 - 1, matrix),
        lcs(s1, s2, n1 - 1, n2, matrix)
      );
    }
  }
  return matrix[n1][n2];
}

function lcsEff(s1, s2, n1, n2) {
  let matrix = [];
  for (let i = 0; i < n1 + 1; i++) {
    matrix.push(new Array(n2 + 1).fill(-1));
  }

  let count = lcs(s1, s2, n1, n2, matrix);
  return count;
}

let s2 = "cxyz";
let s1 = "abcdabcdxyz";
let count = lcsEff(s1, s2, s1.length, s2.length);
console.log(count);
