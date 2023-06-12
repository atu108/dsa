function countDistinct(arr) {
  let elements = { length: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (elements[arr[i]]) {
      elements[arr[i]]++;
    } else {
      elements[arr[i]] = 1;
      elements["length"]++;
    }
  }
  return elements.length;
}

function countDistinctWithSet(arr) {
  let set = new Set(arr);
  return set.size;
}

let arr = [14, 15, 12, 12, 13, 14, 15];
console.log(countDistinctWithSet(arr));
