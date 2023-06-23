function isBalanced(str) {
  let stack = [];
  let map = { "(": ")", "{": "}", "[": "]" };
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(str[i]);
    } else {
      if (str[i] != map[stack.pop()]) return false;
    }
  }
  return !stack.length;
}

console.log(isBalanced("({})"));
