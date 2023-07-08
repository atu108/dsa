function subSeq(p, str) {
  if (!str) {
    return [p];
  }
  const char = str[0];
  const left = subSeq(p + char, str.su);
}
