function stockSpan(arr) {
  console.log(arr);
  const res = [];
  const stack = [];
  stack.push(0);
  res.push(1);
  for (let i = 1; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length == 0) {
      res.push(i + 1);
    } else {
      res.push(i - stack[stack.length - 1]);
    }
    stack.push(i);
  }
  return res;
}

stockSpan([60, 10, 20, 15, 35, 50, 70, 30]);
