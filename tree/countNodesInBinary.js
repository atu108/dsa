function count(root) {
  if (!root) return 0;
  let h1 = 0;
  let curr = root;
  while (curr) {
    h1++;
    curr = curr.left;
  }
  let h2 = 0;
  curr = root;
  while (curr) {
    h2++;
    curr = curr.right;
  }
  if (h1 == h2) {
    return Math.pow(2, h1) - 1;
  } else {
    return 1 + count(root.left) + count(root.right);
  }
}
