class TwoStacksInArray {
  constructor(n) {
    this.arr = new Array(n);
    this.top1 = -1;
    this.top2 = n;
  }

  push1(ele) {
    if (this.top1 + 1 > this.top2) return false;
    this.arr[++this.top1] = ele;
    return true;
  }
  push2(ele) {
    if (this.top2 - 1 < this.top1) return false;
    this.arr[--this.top2] = ele;
    return true;
  }
  pop1() {
    return this.arr[this.top1--];
  }
  pop2() {
    return this.arr[this.top2++];
  }
  size1() {
    return this.top1 + 1;
  }
  size2() {
    return this.arr.length - this.top2;
  }
}

const twoStackArr = new TwoStacksInArray(11);

twoStackArr.push1(2);
twoStackArr.push1(2);
twoStackArr.push1(2);
twoStackArr.push1(1);
twoStackArr.push1(1);
twoStackArr.push1(1);

twoStackArr.push2(1);
twoStackArr.push1(4);
twoStackArr.push1(1);
twoStackArr.push1(1);
console.log(twoStackArr.push1(1));
console.log(twoStackArr.pop2());
console.log(twoStackArr.push1(4));
console.log(twoStackArr.pop1());

twoStackArr.push2(1);
twoStackArr.push2(1);
twoStackArr.push2(1);
twoStackArr.push2(1);
twoStackArr.push2(1);
twoStackArr.push2(1);
twoStackArr.push2(1);

console.log(twoStackArr.size1(), twoStackArr.size2());
