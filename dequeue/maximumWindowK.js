function maxWindK(arr, k) {
  let res = [];
  for (let i = 0; i <= arr.length - k; i++) {
    res.push(Math.max(...arr.slice(i, i + k)));
  }
  return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(maxWindK(arr, 3));
