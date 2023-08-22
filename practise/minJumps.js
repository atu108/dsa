function minJumps(arr, n) {
  //code here
  let currentIndex = 0;
  let count = 1;
  while (currentIndex < n) {
    if (arr[currentIndex] == 0) {
      return -1;
    }
    count++;
    if (arr[currentIndex] == 1) {
      currentIndex = currentIndex + arr[currentIndex];
      continue;
    }
    let nextJumpIndex = currentIndex + arr[currentIndex];
    let nextJumpValue = arr[nextJumIndex];
    for (let i = currentIndex + 1; i < nextJumpIndex; i++) {
      if (nextJumpValue < arr[i]) {
        nextJumpValue = arr[i];
        nextJumpIndex = i;
      }
    }
    currentIndex = maxJumIndex + maxJum;
  }
  return count;
}

let arr = [1, 3, 1, 1, 1, 4, 2, 0, 1, 1];

let count = minJumps(arr, arr.length);
console.log(count);
