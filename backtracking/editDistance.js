function editDistanceRecur(str1, str2, m, n, matrix) {
  if (n == 0) {
    matrix[m][n] = m;
  }
  if (m == 0) {
    matrix[m][n] = n;
  }
  if (matrix[m][n] != -1) {
    return matrix[m][n];
  }
  if (str1[m - 1] == str2[n - 1]) {
    matrix[m][n] = editDistanceRecur(str1, str2, m - 1, n - 1, matrix);
  } else {
    // three calls insert, delete, replace, and take min steps among them to do
    matrix[m][n] =
      1 +
      Math.min(
        //insert
        editDistanceRecur(str1, str2, m, n - 1, matrix),
        editDistanceRecur(str1, str2, m - 1, n, matrix),
        editDistanceRecur(str1, str2, m - 1, n - 1, matrix)
      );
  }
  return matrix[m][n];
}

function editDistance(str1, str2) {
  let matrix = new Array(str1.length + 1).fill(0);
  matrix = matrix.map((a) => new Array(str2.length + 1).fill(-1));
  return editDistanceRecur(str1, str2, str1.length, str2.length, matrix);
}

let str1 = "atul";
let str2 = "ratulya";
console.log(editDistance(str1, str2));
