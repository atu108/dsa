function longestSubStringWithKDistinctChar(str, k) {
  let maxLength = 0;
  let windowStart = 0;
  let freq = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let currentStr = str[windowEnd];
    if (!(currentStr in freq)) {
      freq[currentStr] = 0;
    }
    freq[currentStr]++;
    while (Object.keys(freq).length > k) {
      let windowStartChar = str[windowStart];
      freq[windowStartChar]--;
      if (freq[windowStartChar] == 0) {
        delete freq[windowStartChar];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

const length = longestSubStringWithKDistinctChar("araaci", 1);
console.log(length);
