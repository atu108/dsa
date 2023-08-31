/*
Given two strings containing backspaces 
(identified by the character #), check if the two strings are equal.
*/

function backspaceCompare(str1, str2) {
  let point1 = str1.length - 1;
  let point2 = str2.length - 1;
  while (point1 >= 0 || point2 >= 0) {
    let i = getNextChar(str1, point1);
    let j = getNextChar(str2, point2);
    if (i < 0 && j < 0) {
      return true;
    }
    if (i < 0 || j < 0) {
      return false;
    }
    if (str1[i] != str2[j]) {
      return false;
    }
    point1 = i - 1;
    point2 = j - 1;
  }
  return true;
}

function getNextChar(str, point) {
  let backSpaces = 0;
  while (point >= 0) {
    if (str[point] == "#") {
      backSpaces++;
    } else if (backSpaces > 0) {
      backSpaces--;
    } else {
      break;
    }
    point--;
  }
  return point;
}

console.log(
  backspaceCompare("", "x#")
  //   backspaceCompare("xy#z", "xyz#"),
  //   backspaceCompare("xp#", "xyz##"),
  //   backspaceCompare("xywrrmp", "xywrrmu#p")
);
