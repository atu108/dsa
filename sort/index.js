Array.prototype.swap = function swap(i, j) {
  if (!Array.isArray(this)) throw "Please pass a valid array";
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

exports.test = function (param) {
  console.log("called");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done", param);
      resolve();
    }, 10000);
  });
};
