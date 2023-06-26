const Stack = require("./index");
function inFixToPreFix(str) {
  let str = s;
  const op = {
    "^": 3,
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1,
    "(": 0,
  };
  let res = "";
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(str[i]);
      continue;
    }
    if (str[i] == ")") {
      while (!stack.isEmpty() && stack.peek() != "(") {
        res += stack.pop();
      }
      stack.pop();
      continue;
    }
    if (op[str[i]]) {
      if (stack.isEmpty()) {
        stack.push(str[i]);
      } else {
        if (op[stack.peek()] > op[str[i]]) {
          while (!stack.isEmpty() && op[str[i]] <= op[stack.peek()]) {
            res += stack.pop();
          }
          stack.push(str[i]);
        } else if (op[stack.peek()] < op[str[i]]) {
          stack.push(str[i]);
        } else {
          res += stack.pop();
          stack.push(str[i]);
        }
      }
      continue;
    }
    res += str[i];
  }
  while (!stack.isEmpty()) {
    res += stack.pop();
  }
  return res;
}
