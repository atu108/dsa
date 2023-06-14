function isSubsequence(s1, s2) {
  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length) {
    if (s1[i] == s2[j]) j++;
    i++;
  }
  return j == s2.length;
}

console.log(isSubsequence("abcdefghijklmnopqrstuvwxyz", "kmx"));
