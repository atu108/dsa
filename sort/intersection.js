function intersection(arr1, arr2) {
  const l1 = arr1.length;
  const l2 = arr2.length;
  let i = 0;
  let j = 0;
  let res = [];
  while (j < l2) {
    if (arr2[j] == arr1[i]) {
      if (arr2[j] !== res[res.length - 1]) {
        res.push(arr2[j]);
      }
      j++;
      i++;
    } else if (arr2[j] > arr1[i]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
}

console.log(intersection([1, 3, 4, 5, 5, 5, 5, 5, 6], [3, 5, 5, 6]));
