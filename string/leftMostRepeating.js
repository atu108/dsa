function leftMostRepeating(str) {
  let charArr = new Array(26).fill(false);
  let initial = 97;
  let res = Infinity;
  for (let i = str.length - 1; i >= 0; i--) {
    if (!charArr[str.charCodeAt(i) - initial])
      charArr[str.charCodeAt(i) - initial] = true;
    else res = Math.min(res, i);
  }
  return res == Infinity ? -1 : res;
}

const str = "abccd";

console.log(leftMostRepeating(str));
