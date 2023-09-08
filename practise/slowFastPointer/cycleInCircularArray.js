/*
We are given an array containing positive and negative numbers. 
Suppose the array contains a number M at a particular index. 
Now, if M is positive we will move forward M indices and if M is 
negative move backwards M indices. 

You should assume that the array is circular which
 means two things:

If, while moving forward, we reach the end of the array, we will jump to the first
    element to continue the movement.
If, while moving backward, we reach the beginning of the array, we will jump to the
    last element to continue the movement. 
    Write a method to determine if the array has a cycle. 


The cycle should have more than one element and should 
follow one direction which means the cycle should not contain both forward 
and backward movements.
*/

function hasCycle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isForward = arr[i] >= 0;
    let set = new Set();
    let current = i;
    while (true) {
      set.add(current);
      if (isForward && arr[current] < 0) {
        break;
      }
      if (!isForward && arr[current] > 0) {
        break;
      }
      if (current == getNext(arr, current)) break;
      current = getNext(arr, current);
      if (set.has(current)) {
        if (set.size > 1) {
          return true;
        } else {
          break;
        }
      }
    }
  }
  return false;
}

function getNext(arr, current) {
  current = (arr[current] + current) % arr.length;
  if (current < 0) {
    current += arr.length;
  }
  return current;
}

console.log(hasCycle([-1, -2, -3, -4, -5]));
