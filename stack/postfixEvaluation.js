const Stack = require("./index");

function postFixEval(str) {
  str = str.split(" ");
  const op = {
    "^": 3,
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1,
  };
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] in op) {
      op1 = stack.pop();
      op2 = stack.pop();
      stack.push(compute(str[i], op1, op2));
    } else {
      stack.push(Number(str[i]));
    }
  }
  return stack.peek();
}

function compute(operator, op1, op2) {
  switch (operator) {
    case "^":
      return Math.pow(op2, op1);
    case "*":
      return op2 * op1;
    case "/":
      return op2 / op1;
    case "+":
      return op2 + op1;
    case "-":
      return op2 - op1;
  }
}

console.log(postFixEval("10 2 3 ^ ^"));
