function pairWithGivenSum(arr, sum) {
  const diff = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (diff.has(sum - arr[i])) {
      return true;
    }
    diff.add(arr[i]);
  }
  return false;
}

const arr = [2, 3, 2, 5, -1, 3, 8];
console.log(pairWithGivenSum(arr, 4));
