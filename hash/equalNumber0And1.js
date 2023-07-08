function largestSubArrayEqualNumberZeroAnd1(arr) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let onesCount = 0;
    let zerosCount = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] == 0) onesCount++;
      else zerosCount++;
      if (onesCount == zerosCount) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
}

function equalNumber0And1(arr) {
  arr = arr.map((ele) => (ele == 0 ? -1 : ele));
  let map = {};
  let sum = 0;
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum == 0) {
      maxLength = i + 1;
    }
    if (sum in map) {
      maxLength = Math.max(maxLength, i - map[sum]);
    } else {
      map[sum] = i;
    }
  }
  return maxLength;
}

const arr = [1, 0, 0, 1, 1, 1, 0, 1, 0];
console.log(largestSubArrayEqualNumberZeroAnd1(arr));
console.log(equalNumber0And1(arr));
