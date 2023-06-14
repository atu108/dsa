function isAnagram(s1, s2) {
  if (s1.length != s2.length) return false;
  let s1CharFreq = {};
  let s2CharFreq = {};
  for (let i = 0; i < s1.length; i++) {
    if (!s1CharFreq[s1[i]]) s1CharFreq[s1[i]] = 1;
    else s1CharFreq[s1[i]]++;
    if (!s2CharFreq[s2[i]]) s2CharFreq[s2[i]] = 1;
    else s2CharFreq[s2[i]]++;
  }
  for (let prop in s1CharFreq) {
    if (s1CharFreq[prop] != s2CharFreq[prop]) return false;
  }
  return true;
}

function isAnagramEff(s1, s2) {
  if (s1.length != s2.length) return false;
  let count = new Array(256).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i)]++;
    count[s2.charCodeAt(i)]--;
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] != 0) return false;
  }
  return true;
}

const s1 = "listen";
const s2 = "silent";

console.time("naive");
console.log(isAnagram(s1, s2));
console.timeEnd("naive");

console.time("Eff");
console.log(isAnagramEff(s1, s2));
console.timeEnd("Eff");
