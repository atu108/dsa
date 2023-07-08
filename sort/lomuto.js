require("./index");
function lomuto(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      arr.swap(i, j);
    }
  }
  arr.swap(i + 1, high);
  return i + 1;
}
//keep maintaing elements which are smaller than pivot on the left by i++  before j's boundry
//and if found anything in j's boundry samller swap it with new i++'s position
// now at last everything smaller than pivot will before or till i and greater beyond i.
// so last step would be to put pivot in the middle by i++ and swap with pivot;
const arr = [10, 20, 30, 80, 30, 90, 40, 50, 70];
console.log(lomuto(arr, 0, 8), arr);
