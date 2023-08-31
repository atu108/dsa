/*
Given an array of unsorted numbers, 
find all unique triplets in it that add up to zero.
*/

function triplet0Sum(arr) {
  let res = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }
    twoSum(arr, i + 1, arr.length - 1, -arr[i], res);
  }
  return res;
}

function twoSum(arr, start, end, sum, triplets) {
  let left = start;
  let right = end;
  while (left < right) {
    let currentLeft = arr[left];
    let currentRight = arr[right];
    let currentSum = currentLeft + currentRight;
    if (currentSum == sum) {
      triplets.push([-sum, currentLeft, currentRight]);
      left++;
      right--;
      while (left < right && arr[left] == arr[left - 1]) {
        left++;
      }
      while (left < right && arr[right] == arr[right + 1]) {
        right--;
      }
    } else if (currentSum > sum) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

const arr = [-3, 0, 1, 2, -1, 1, -2];
console.log(triplet0Sum(arr));
