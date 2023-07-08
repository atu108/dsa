// function removeA(str, i = 0, ans = "") {
//   if (i >= str.length) return ans;
//   if (str[i] != "a") ans = ans + str[i];
//   return removeA(str, i + 1, ans);
// }

// console.log(removeA("bbbabcbcbaaaatuch"));

function removeSubString(str, pat) {
  if (!str) return "";
  if (str.startsWith(pat)) {
    return removeSubString(str.substring(pat.length), pat);
  } else {
    return str[0] + removeSubString(str.substring(1), pat);
  }
}

console.log(removeSubString("abcdappleatul", "atul"));
