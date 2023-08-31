//Given a string, find the length of the longest substring, which has no repeating characters.

function longestStringWithNoRepeatingChar(str) {
  let maxLength = 0;
  let windowStart = 0;
  let freqMap = {};

  for (let i = 0; i < str.length; i++) {
    let endChar = str[i];
    if (endChar in freqMap) {
      windowStart = Math.max(windowStart, freqMap[endChar] + 1);
    }
    freqMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }
  return maxLength;
}

let maxLength = longestStringWithNoRepeatingChar("abccde");

console.log(maxLength);
