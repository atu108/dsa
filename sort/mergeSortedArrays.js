function mergeSortedArrays(arr1, arr2) {
  const l1 = arr1.length;
  const l2 = arr2.length;
  const mergedArray = new Array(l1 + l2 - 2);
  let j = 0;
  let i = 0;
  let k = 0;
  while (i < l1 && j < l2) {
    if (arr1[i] <= arr2[j]) {
      mergedArray[k] = arr1[i];
      i++;
    } else {
      mergedArray[k] = arr2[j];
      j++;
    }
    k++;
  }
  while (i < l1) {
    mergedArray[k] = arr1[i];
    i++;
    k++;
  }
  while (j < l2) {
    mergedArray[k] = arr2[j];
    k++;
    j++;
  }
  return mergedArray;
}

console.log(
  mergeSortedArrays(
    [1, 10, 11, 13, 14, 16, 20, 20, 23],
    [8, 11, 12, 13, 24, 25]
  )
);
