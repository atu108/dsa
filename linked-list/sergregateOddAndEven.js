function segregate(head) {
  let current = head;
  if (!current || !head.next) return head;
  let oddStart = null;
  let oddEnd = null;
  let evenStart = null;
  let evenEnd = null;

  while (current) {
    if (current.data % 2 != 0) {
      if (!oddStart) {
        oddStart = current;
        oddEnd = current;
      } else {
        oddEnd.next = current;
        oddEnd = current;
      }
    } else {
      if (!evenStart) {
        evenStart = current;
        evenEnd = current;
      } else {
        evenEnd.next = current;
        evenEnd = current;
      }
    }
    current = current.next;
  }
  if (!evenEnd) {
    return oddStart;
  }
  if (!oddStart) {
    return evenStart;
  }
  evenEnd.next = oddStart;
  oddEnd.next = null;
  return evenStart;
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
const node = segregate(node1);
traverse(node);

function traverse(head) {
  if (!head) return;
  console.log(head.data);
  traverse(head.next);
}
