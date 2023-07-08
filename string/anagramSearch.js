function anagramSearch(text, pat) {
  let textChar = new Array(256).fill(0);
  let patChar = new Array(256).fill(0);

  for (let i = 0; i < pat.length; i++) {
    textChar[text.charCodeAt(i)]++;
    patChar[pat.charCodeAt(i)]++;
  }

  for (let i = pat.length; i < text.length; i++) {
    if (textChar.join("") == patChar.join("")) return true;
    textChar[text.charCodeAt(i)]++;
    textChar[text.charCodeAt(i - pat.length)]--;
  }
  return false;
}

const text = "geeksforgeeks";
const pat = "orgees";

console.log(anagramSearch(text, pat));
