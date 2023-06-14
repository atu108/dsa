function leftMostNonRepeating(str) {
  const charArr = new Array(26).fill(-1);
  let res = Infinity;
  for (let i = 0; i < str.length; i++) {
    const charValue = str.charCodeAt(i) - 97;
    if (charArr[charValue] == -1) charArr[charValue] = i;
    else if (charArr[charValue] >= 0) charArr[charValue] = -2;
  }
  for (let i = 0; i < 26; i++) {
    if (charArr[i] > -1) {
      res = Math.min(res, charArr[i]);
    }
  }
  return res == Infinity ? -1 : res;
}

const str = "geeksforgeeks";

console.log(leftMostNonRepeating(str));
