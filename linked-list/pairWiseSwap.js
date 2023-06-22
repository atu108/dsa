function pairWiseSwap(head) {
  let current = head.next.next;
  let prev = head;
  head = head.next;
  head.next = prev;
  while (!current && current.next) {
    prev.next = current.next;
    prev = current;
    let next = current.next.next;
    current.next.next = current;
    current;
  }
}

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
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

function traverse(head) {
  if (!head) return;
  console.log(head.data);
  traverse(head.next);
}
