function naive(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  let res = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let width = cols - j;
      for (let k = i; k < rows && arr[k][j] == 1; k++) {
        let currentWith = 1;
        while (j + currentWith < cols && arr[k][j + currentWith] == 1) {
          currentWith++;
        }
        width = Math.min(width, currentWith);
        height = k - i + 1;
        res = Math.max(res, width * height);
      }
    }
  }
  let arr = [
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
  ];
  return res;
}

function efficient(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let maxArea = maxAreaHistogram(matrix[0]);
  for (let i = 1; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 1) {
        matrix[i][j] += matrix[i - 1][j];
      }
    }
    maxArea = Math.max(maxArea, maxAreaHistogram(matrix[i]));
  }
  return maxArea;
}

function maxAreaHistogram(arr) {
  let stack = [];
  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      const eleIndex = stack.pop();
      let area =
        arr[eleIndex] *
        (stack.length == 0 ? i : i - stack[stack.length - 1] - 1);
      maxArea = Math.max(area, maxArea);
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const eleIndex = stack.pop();
    let area =
      arr[eleIndex] *
      (stack.length == 0
        ? arr.length
        : arr.length - stack[stack.length - 1] - 1);
    maxArea = Math.max(area, maxArea);
  }
  return maxArea;
}

let arr = [
  [0, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 0],
];
console.time("naive");
console.log(naive(arr));
console.timeEnd("naive");
console.time("efficient");
console.log(efficient(arr));
console.timeEnd("efficient");
