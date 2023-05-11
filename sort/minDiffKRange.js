function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    arr = mergeSort(arr, low, mid);
    arr = mergeSort(arr, mid + 1, high);
    arr = mergeSortedArrays(arr, low, mid, high);
  }
  return arr;
}
function mergeSortedArrays(arr, low, mid, high) {
  let n1 = mid - low + 1;
  let n2 = high - mid;
  const leftArray = [];
  const rightArray = [];
  for (let l = 0; l < n1; l++) {
    leftArray[l] = arr[l + low];
  }
  for (let l = 0; l < n2; l++) {
    rightArray[l] = arr[mid + l + 1];
  }
  let k = low;
  let i = 0;
  let j = 0;
  while (i < n1 && j < n2) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = leftArray[i];
    k++;
    i++;
  }
  while (j < n2) {
    arr[k] = rightArray[j];
    k++;
    j++;
  }
  return arr;
}

const arr = [7, 3, 2, 4, 9, 12, 56];
function minDiffKRange(arr, k) {
  mergeSort(arr, 0, arr.length - 1);
  let minDiff = Infinity;
  let i = 0;
  for (; i < arr.length - k; i++) {
    minDiff = Math.min(minDiff, Math.abs(arr[i] - arr[i + k - 1]));
  }
  return minDiff;
}

console.log(arr, minDiffKRange(arr, 3));
