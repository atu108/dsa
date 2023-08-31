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

function findStart(head) {
  let length = hasCycle(head);
  let pointer1 = head;
  let pointer2 = head;
  while (length > 0) {
    pointer2 = pointer2.next;
    length--;
  }
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1.value;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`cycle starts at : ${findStart(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`cycle starts at : ${findStart(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`cycle starts at : ${findStart(head)}`);
