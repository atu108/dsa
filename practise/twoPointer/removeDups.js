/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; 
after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
*/

function removeDuplicates(arr) {
  let i = 1;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] != arr[j]) {
      j++;
      arr[j] = arr[i];
    }
    i++;
  }
  return j;
}
let arr = [2, 3, 3, 3, 6, 9, 9];
console.log(removeDuplicates(arr), arr);
