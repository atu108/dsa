class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

function insertAtTheEnd(x, head = null) {
  const node = new Node(x);
  if (!head) {
    node.next = node;
    return node;
  }
  let current = head;
  while (current.next != head) {
    current = current.next;
  }
  current.next = node;
  node.next = head;
  return head;
}

function insertAtBeginning(x, head) {
  if (!head) return insertAtTheEnd(x);
  const node = new Node(x);
  let current = head;
  while (current.next != head) {
    current = current.next;
  }
  current.next = node;
  node.next = head;
  return node;
}

function insertAtBeginningEff(x, head) {
  if (!head) return insertAtTheEnd(x);
  const node = new Node(x);
  node.next = head.next;
  head.next = node;
  let temp2 = node.data;
  node.data = head.data;
  head.data = temp2;
  return head;
}

function insertAtEndEff(x, head) {
  if (!head) return insertAtTheEnd(x);
  const node = new Node(x);
  node.next = head.next;
  head.next = node;
  let temp = node.data;
  node.data = head.data;
  head.data = temp;
  return node;
}

function deleteHead(head) {
  if (!head || !head.next) return null;
  head.data = head.next.data;
  head.next = head.next.next;
  return head;
}

function deleteKthNode(k, head) {
  if (k <= 0) return head;
  if (k == 1) return deleteHead(head);
  let current = head;
  for (let i = 0; i < k - 2; i++) {
    current = current.next;
  }
  current.next = current.next.next;
  return head;
}

function traverse(head) {
  if (!head) return;
  let current = head;
  do {
    console.log(current.data);
    current = current.next;
  } while (current != head);
}

let head = insertAtEndEff(20);
head = insertAtEndEff(30, head);
head = insertAtEndEff(40, head);
traverse(head);
head = deleteKthNode(0, head);
head = insertAtBeginningEff(50, head);
console.log("---------------");
traverse(head);
