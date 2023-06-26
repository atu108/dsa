function naive(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let k = i - 1; k >= 0 && arr[i] < arr[k]; k--) {
      sum += arr[i];
    }
    for (let k = i + 1; k < arr.length && arr[i] < arr[k]; k++) {
      sum += arr[i];
    }
    res = Math.max(res, sum);
  }
  return res;
}

function better(arr) {
  const nextSmallerArr = nextSmaller(arr);
  const prevSmallerArr = prevSmaller(arr);
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    sum += arr[i] * (nextSmallerArr[i] - i - 1);
    sum += arr[i] * (i - prevSmallerArr[i] - 1);
    res = Math.max(sum, res);
  }
  return res;
}

function nextSmaller(arr) {
  let res = [];
  let stack = [];
  res[arr.length - 1] = arr.length;
  stack.push(arr.length - 1);
  for (let i = arr.length - 2; i >= 0; i--) {
    while (
      stack.length > 0 &&
      arr[i] <=
        arr[
          stack[stack.length - 1] == arr.length
            ? arr.length - 1
            : stack[stack.length - 1]
        ]
    ) {
      stack.pop();
    }

    if (stack.length == 0) {
      res[i] = arr.length;
    } else {
      res[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  return res;
}

function prevSmaller(arr) {
  let res = [];
  let stack = [];
  res[0] = -1;
  stack.push(0);
  for (let i = 1; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length == 0) {
      res[i] = -1;
    } else {
      res[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  return res;
}

function efficient(arr) {
  let res = 0;
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      let area = 0;
      let eleIndex = stack.pop();
      if (stack.length == 0) {
        area = arr[eleIndex] * i;
      } else {
        area += arr[eleIndex] * (i - stack[stack.length - 1] - 1);
      }
      res = Math.max(area, res);
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const eleIndex = stack.pop();
    let area = 0;
    if (stack.length == 0) {
      area = arr[eleIndex] * arr.length;
    } else {
      area = arr[eleIndex] * (arr.length - stack[stack.length - 1] - 1);
    }
    res = Math.max(area, res);
  }
  return res;
}

const arr = [60, 20, 50, 30, 10, 50];
console.time("naive");
console.log(naive(arr));
console.timeEnd("naive");
console.time("better");
console.log(better(arr));
console.timeEnd("better");
console.time("best");
console.log(efficient(arr));
console.timeEnd("best");
