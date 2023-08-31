/*
Given an array of sorted numbers and a target sum, 
find a pair in the array whose sum is equal to the given target.

*/
function twoSum(arr, sum) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let currentLeft = arr[left];
    let currentRight = arr[right];
    if (currentLeft + currentRight == sum) {
      return [left, right];
    }
    if (currentLeft + currentRight > sum) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

console.log(twoSum([1, 2, 3, 4, 6], 9));
