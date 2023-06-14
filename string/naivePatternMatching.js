function patternMatching(str, pattern) {
  const indexs = [];
  for (let i = 0; i <= str.length - pattern.length; i++) {
    if (
      Array.prototype.slice.call(str, i, i + pattern.length).join("") == pattern
    ) {
      indexs.push(i);
    }
  }
  return indexs;
}

const str = "abcdabcd";
const pattern = "cd";

console.log(patternMatching(str, pattern));
