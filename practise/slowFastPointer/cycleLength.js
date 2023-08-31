class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return calculateLength(slow);
    }
  }
  return 0;
}

function calculateLength(slow) {
  let current = slow;
  length = 0;
  while (true) {
    length++;
    current = current.next;
    if (current == slow) {
      break;
    }
  }
  return length;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle length: ${hasCycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle length: ${hasCycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle length: ${hasCycle(head)}`);
