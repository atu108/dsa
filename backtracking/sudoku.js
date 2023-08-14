let board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
let n = 9;
function solve() {
  let i;
  let j;
  outer: for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (board[i][j] == 0) {
        break outer;
      }
    }
  }
  if (i == n && j == n) {
    return true;
  }
  for (let k = 1; k <= n; k++) {
    if (isSafe(i, j, k)) {
      board[i][j] = k;
      let solution = solve();
      if (solution) return true;
      board[i][j] = 0;
    }
  }
  return false;
}

function isSafe(i, j, val) {
  // isValue valid in row
  for (let k = 0; k < n; k++) {
    if (board[i][k] == val) {
      return false;
    }
  }
  // isValue valid in col
  for (let k = 0; k < n; k++) {
    if (board[k][j] == val) {
      return false;
    }
  }
  // is value valid in submatrix
  let subMatrixSize = Math.sqrt(n);
  let subMatrixInitialI = i - (i % subMatrixSize);
  let subMatrixInitialJ = j - (j % subMatrixSize);
  for (let i = 0; i < subMatrixSize; i++) {
    for (let j = 0; j < subMatrixSize; j++) {
      if (board[i + subMatrixInitialI][j + subMatrixInitialJ] == val) {
        return false;
      }
    }
  }
  return true;
}

solve();
console.log(board);
