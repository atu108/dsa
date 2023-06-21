function middleOfLinkList(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
}

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}
const node1 = new Node(10);
const node2 = new Node(15);
const node3 = new Node(20);
const node4 = new Node(25);
const node5 = new Node(30);
const node6 = new Node(35);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(middleOfLinkList(node1));
