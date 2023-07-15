var RandomizedSet = function () {
  this.set = [];
  // record the value index to simpilfy the element swap
  this.valueIndexMap = new Map();
};

RandomizedSet.prototype.insert = function (val) {
  if (this.valueIndexMap.has(val)) {
    return false;
  }
  this.set.push(val);
  this.valueIndexMap.set(val, this.set.length - 1);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.valueIndexMap.has(val)) {
    return false;
  }
  const indexToRemove = this.valueIndexMap.get(val);
  // update valueIndexMap first
  this.valueIndexMap.set(this.set[this.set.length - 1], indexToRemove);
  this.valueIndexMap.delete(val);
  this.set[indexToRemove] = this.set[this.set.length - 1];
  this.set[this.set.length - 1] = val;
  this.set.pop();
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  return this.set[Math.floor(Math.random() * this.set.length)];
};

const randomiseSet = new RandomizedSet();

randomiseSet.insert(1);
randomiseSet.insert(2);
randomiseSet.insert(3);
randomiseSet.insert(4);
randomiseSet.insert(5);

console.log(
  randomiseSet.set,
  randomiseSet.valueIndexMap,
  randomiseSet.getRandom()
);
randomiseSet.remove(1);
console.log(
  randomiseSet.set,
  randomiseSet.valueIndexMap,
  randomiseSet.getRandom()
);
