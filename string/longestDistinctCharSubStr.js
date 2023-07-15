function method1(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let subStr = str.slice(i, j);
      if (subStr.trim() && hasDistinct(subStr)) res = Math.max(res, j - i);
    }
  }
  return res;
}

function hasDistinct(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] == undefined) map[str[i]] = true;
    else return false;
  }
  return true;
}

function method2(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    const visited = new Array(256).fill(false);
    for (let j = i + 1; j <= str.length; j++) {
      if (visited[str.charCodeAt(j)]) break;
      else {
        res = Math.max(res, j - i);
        visited[str.charCodeAt(j)] == true;
      }
    }
  }
  return res;
}

function method3(str) {
  const visited = new Array(256).fill(-1);
  let i = 0;
  let res = 0;
  for (let j = 0; j < str.length; j++) {
    i = Math.max(i, visited[str.charCodeAt(j)] + 1);
    res = Math.max(res, j - i + 1);
    visited[str.charCodeAt(j)] = j;
  }
  return res;
}

const str = "abbcccdefgk";

console.log(method1(str));
console.log(method2(str));
console.log(method3(str));
