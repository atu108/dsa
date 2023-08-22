class Solution {
  count(arr, n, x) {
    //code here
    let index = this.search(arr, 0, n - 1, x);
    if (index == -1) {
      return 0;
    }
    let count = 1;
    for (let i = index - 1; i >= 0; i--) {
      if (arr[i] == x) {
        count++;
      } else {
        break;
      }
    }
    for (let i = index + 1; i < n; i++) {
      if (arr[i] == x) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }

  search(arr, start, end, x) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) {
      return mid;
    }
    if (arr[mid] > x) {
      return this.search(arr, start, mid - 1, x);
    }
    if (arr[mid] < x) {
      return this.search(arr, mid + 1, end, x);
    }
    return -1;
  }
}

const sol = new Solution();
const arr = [1, 1, 2, 2, 2, 2, 2, 3];
let count = sol.count(arr, arr.length, 3);
console.log(count);
