class Tree {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

const root = new Tree(10);
const node1 = new Tree(20);
const node2 = new Tree(30);
const node3 = new Tree(40);
const node4 = new Tree(50);
const node5 = new Tree(60);
const node6 = new Tree(70);

node1.left = node3;
node1.right = node4;

node5.left = node6;
node2.right = node5;

root.left = node1;
root.right = node2;

module.exports = root;
