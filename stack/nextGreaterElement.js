function nextGreater(arr) {
  console.log(arr);
  let size = arr.length;
  const stack = [];
  let res = [];
  stack.push(arr[size - 1]);
  res[size - 1] = -1;
  for (let i = size - 2; i >= 0; i--) {
    while (stack.length > 0 && arr[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length == 0) {
      res[i] = -1;
    } else {
      res[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  console.log(res);
}

nextGreater([5, 15, 10, 8, 6, 12, 9, 18]);
