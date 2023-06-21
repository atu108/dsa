class Node {
  constructor(x) {
    this.data = x;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(x) {
    const node = new Node(x);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return this.head;
  }

  reverseLinkedList() {
    if (!this.head || !this.head.next) return this.head;
    let current = this.head;
    let prev = null;
    this.tail = this.head;
    this.tail.prev = this.head.next;
    this.tail.next = null;
    while (current) {
      prev = current.prev;
      current.prev = current.next;
      current.next = prev;
      current = current.prev;
    }
    this.head = prev.prev;

    return prev.prev;
  }
}
let linkList = new DoublyLinkedList();
linkList.add(10);
linkList.add(12);
linkList.add(15);
console.log(linkList.head);

console.log(linkList.reverseLinkedList());
linkList.add(45);
console.log(linkList.head);
