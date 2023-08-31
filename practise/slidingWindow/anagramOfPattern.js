/*
    Given a string and a pattern, find all anagrams of the pattern in the given string.
*/

function findAnagramsOfPattern(str, pattern) {
  let windowStart = 0;
  let patternFreq = new Array(26).fill(0);
  let strFreq = new Array(26).fill(0);
  let result = [];
  for (let i = 0; i < pattern.length; i++) {
    patternFreq[pattern.charCodeAt(i) - 97]++;
  }
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    strFreq[str.charCodeAt(windowEnd) - 97]++;
    if (windowEnd - windowStart + 1 > pattern.length) {
      strFreq[str.charCodeAt(windowStart) - 97]--;
      windowStart++;
    }
    if (patternFreq.toString() == strFreq.toString()) {
      result.push(windowStart);
    }
  }
  return result;
}

console.log(findAnagramsOfPattern("abbcabc", "abc"));
