/*
Given an array, 
find the length of the smallest subarray in it 
which when sorted will sort the whole array.
*/

function shortestWindowSort(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low++;
  }
  if (low == arr.length - 1) {
    return 0;
  }
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high--;
  }

  let subArrayMax = -Infinity;
  let subArrayMin = Infinity;
  for (let i = low; i <= high; i++) {
    subArrayMax = Math.max(subArrayMax, arr[i]);
    subArrayMin = Math.min(subArrayMin, arr[i]);
  }
  while (low > 0 && arr[low - 1] > subArrayMin) {
    low--;
  }

  while (high < arr.length && arr[high + 1] < subArrayMax) {
    high++;
  }
  return high - low + 1;
}

console.log(shortestWindowSort([1, 2, 5, 3, 7, 10, 9, 12]));
//5, We need to sort only the subarray [5, 3, 7, 10, 9]
//to make the whole array sorted

console.log(shortestWindowSort([1, 3, 2, 0, -1, 7, 10]));
//5, We need to sort only the subarray [1, 3, 2, 0, -1]
//to make the whole array sorted

console.log(shortestWindowSort([1, 2, 3]));
//0, The array is already sorted

console.log(shortestWindowSort([3, 2, 4, 1]));
// 3, The whole array needs to be sorted.
