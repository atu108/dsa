function rotation(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    let char1 = str2[0];
    const middle = str2.slice(1, str2.length);
    str2 = middle + char1;
    if (str1 == str2) {
      return true;
    }
  }
  return false;
}

function rotationEff(str1, str2) {
  if (str1.length != str2.length) return false;
  return (str1 + str1).search(str2) == -1 ? false : true;
}

const str1 = "ABAAA";
const str2 = "BAAAA";
console.time("naive");
console.log(rotation(str1, str2));
console.timeEnd("naive");
console.time("eff");
console.log(rotationEff(str1, str2));
console.timeEnd("eff");

// const arr = new Array(10000000).fill(Math.random() * 10);
// console.time("String");
// String(arr);
// console.timeEnd("String");
// console.time("Join");
// arr.join("");
// console.timeEnd("Join");
// console.time("loop");
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//   str += arr[i];
// }
// console.timeEnd("loop");
