Array.prototype.swap = function swap(i, j) {
  if (!Array.isArray(this)) throw "Please pass a valid array";
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};
