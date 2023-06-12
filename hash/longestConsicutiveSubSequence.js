function longestConsecutiveSubSequence(arr) {
  const arrSet = new Set(arr);
  let maxCount = 1;
  for (const value of arrSet) {
    if (arrSet.has(value - 1)) continue;
    let current = 1;
    while (arrSet.has(value + current)) {
      current++;
    }
    maxCount = Math.max(maxCount, current);
  }
  return maxCount;
}

const arr = [12, 1, 3, 4, 11, 3, 3, 2, 9, 10, 10, 13];

console.log(longestConsecutiveSubSequence(arr));
