function cloneLL(head) {
  let map = new Map();
  current = head;
  while (current) {
    if (!map.has(current)) {
      let node = new Node(current.data);
      map.set(current, node);
    }
    current = current.next;
  }
  current = head;
  while (current) {
    let node = map.get(current);
    node.next = map.get(current.next);
    node.random = map.get(current.random);
    current = current.next;
  }
  return map.get(head);
}

function cloneLLEff(head) {}

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.random = null;
  }
}
const node1 = new Node(11);
const node2 = new Node(10);
const node3 = new Node(22);
const node4 = new Node(22);
const node5 = new Node(32);
const node6 = new Node(34);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

node1.random = node3;
node2.random = node4;
node3.random = node1;
node4.random = node3;

const clonedLL = cloneLL(node1);
clonedLL.next = null;
console.log(clonedLL);
console.log(node1);
