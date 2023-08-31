/*
 Given a string with lowercase letters only, if you are allowed to replace no more than K letters with any letter, 
 find the length of the longest substring having the same letters after replacement.
*/

function lengthOfLongestSubstring(str, k) {
  let maxLength = 0;
  let windowStart = 0;
  let freq = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let charEnd = str[windowEnd];
    if (!(charEnd in freq)) {
      freq[charEnd] = 0;
    }
    freq[charEnd]++;
    let maxRepeatingCount = Math.max(...Object.values(freq));
    if (windowEnd - windowStart + 1 - maxRepeatingCount > k) {
      let startChar = str[windowStart];
      freq[startChar]--;
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("aabcebb", 2));
