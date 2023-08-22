function helper(str, res = "", i, result) {
  if (str.length == i) {
    if (res.length) {
      result.add(res);
    }
    return;
  }

  helper(str, res, i + 1, result);
  helper(str, res + str[i], i + 1, result);
}

function subSequence(str) {
  let result = new Set();
  helper(str, "", 0, result);
  return result;
}

let list = subSequence("cda");
console.log(list);
