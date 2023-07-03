function febo(n) {
  if (n <= 1) return 1;
  return febo(n - 1) + febo(n - 2);
}

console.log(febo(5));
