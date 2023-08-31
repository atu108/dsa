function smallestSubArray(arr, sum) {
  let minLength = Infinity;
  let windowStart = 0;
  let windowSum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum > sum) {
      windowSum -= arr[windowStart];
      windowStart++;
    }
    if (windowSum == sum) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
    }
  }
  return minLength == Infinity ? 0 : minLength;
}

let arr = [2, 1, 5, 2, 8];
let arrLength = smallestSubArray(arr, 3);
console.log(arrLength);
