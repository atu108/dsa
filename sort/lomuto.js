require("./index");
function lomuto(arr, low, high) {
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < arr[high]) {
      i++;
      arr.swap(arr, i, j);
    }
  }
  arr.swap(i + 1, high);
  return i + 1;
}
const arr = [10, 80, 30, 90, 40, 50, 70];
console.log(lomuto(arr, 0, 6), arr);
