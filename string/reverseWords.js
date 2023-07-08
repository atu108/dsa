function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

const str = "I love Coding";

function reverseWordsEff(str) {
  //reverse individual words then reverse the whole string;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      str = reverseAString(str, start, i - 1);
      console.log(str);
      start = i + 1;
    }
  }
  str = reverseAString(str, start, str.length - 1);
  str = reverseAString(str, 0, str.length - 1);
  return str;
}

function reverseAString(str, start, end) {
  while (end > start) {
    let temp = str[end];
    str[end] = str[start];
    str[start] = temp;
    start++;
    end--;
  }
  return str;
}

// console.time("normal");
// console.log(reverseWords(str));
// console.timeEnd("normal");

// console.time("eff");
// console.log(reverseWordsEff(str));
// console.timeEnd("eff");

let str1 = "Atul Singh";

console.log((str1[2] = "K"), str1);
