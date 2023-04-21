function majorityElement(arr, size) {
  if (size == 1) return arr[0];
  let counts = {};
  for (let i = 0; i < size; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] = counts[arr[i]] + 1;
      if (counts[arr[i]] > size / 2) {
        return arr[i];
      }
    } else {
      counts[arr[i]] = 1;
    }
  }
  return -1;
}

console.log(majorityElement([1, 2, 3], 3));
