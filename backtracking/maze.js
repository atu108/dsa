class Maze {
  constructor(maze, n, m) {
    this.n = n;
    this.m = m;
    this.maze = maze;
    this.sol = new Array(m);
    for (let i = 0; i < m; i++) {
      this.sol[i] = new Array(n).fill(0);
    }
    // have default start and end
    this.startI = 0;
    this.startJ = 0;
    this.endI = m - 1;
    this.endJ = n - 1;
  }
  solveMaze() {
    if (this.solveMazeRec(this.startI, this.startJ) == false) return false;
    else {
      console.log(this.sol);
      return true;
    }
  }

  solveMazeRec(i, j) {
    if (i == this.endI && j == this.endJ) {
      this.sol[i][j] = 1;
      return true;
    }
    if (this.isSafe(i, j)) {
      this.sol[i][j] = 1;
      if (this.solveMazeRec(i + 1, j) == true) return true;
      else if (this.solveMazeRec(i, j + 1) == true) return true;
      this.sol[i][j] == 0;
    }
    return false;
  }

  isSafe(i, j) {
    if (i < this.n && j < this.m && this.maze[i][j] == 1) {
      return true;
    }
    return false;
  }
}

const mazeMatrix = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];

let sol = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 1],
];

const maze = new Maze(mazeMatrix, 4, 4);
maze.solveMaze();
