/*
Given an array containing 0's and 1's, if you are allowed to replace no more than K 0's with 1's, 
find the length of the longest contiguous subarray having all 1's.
*/
function maxNumberOf1(arr, k) {
  let maxLength = 0;
  let windowStart = 0;
  let max1count = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] == 1) {
      max1count++;
    }

    if (windowEnd - windowStart + 1 - max1count > k) {
      if (arr[windowStart] == 1) {
        max1count--;
      }
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(maxNumberOf1([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
