function floorSqrt(x) {
  let low = 1;
  let high = Math.floor(x / 2);
  let approx = low;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid > x) {
      high = mid - 1;
    }
    if (mid * mid < x) {
      approx = mid;
      low = mid + 1;
    }
    if (mid * mid == x) {
      return mid;
    }
  }
  return approx;
}

console.log(floorSqrt(5));
