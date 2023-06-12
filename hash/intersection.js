function intersection(arr1, arr2) {
  const elementsInArr1 = {};
  let intersection = new Set();
  for (const ele in arr2) {
    elementsInArr1[ele] = 1;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (elementsInArr1[arr1[i]]) {
      intersection.add(arr1[i]);
    }
  }
  return intersection;
}

const arr = [2, 3, 4, 5, 1, 3, 4];
const arr2 = [3, 4, 2, 5, 1];
console.log(intersection(arr, arr2));
