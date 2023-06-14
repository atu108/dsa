function isPal(str) {
  return str == str.split("").reverse().join("");
}

function isPalEff(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] != str[end]) return false;
    start++;
    end--;
  }
  return true;
}
let str = new Array(1000000).fill("abba").join("");
console.time("reverse");
console.log(isPal(str));
console.timeEnd("reverse");

console.time("eff");
console.log(isPalEff(str));
console.timeEnd("eff");
