/*
Given an unsorted array of numbers and a target key, 
remove all instances of key in-place and return the new length of the array.
*/

function removeElement(arr, target) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != target) {
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
}

const arr = [3, 2, 3, 6, 3, 10, 9, 3];
console.log(removeElement(arr, 3), arr);
