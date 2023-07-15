function prevGreaterElement(arr) {
  console.log(arr);
  const res = [];
  const stack = [];
  stack.push(0);
  res.push(-1);
  for (let i = 1; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length == 0) {
      res.push(-1);
    } else {
      res.push(arr[stack[stack.length - 1]]);
    }
    stack.push(i);
  }
  console.log(res);
}

prevGreaterElement([15, 10, 18, 12, 4, 6, 2, 8]);
