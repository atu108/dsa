class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

module.exports = class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) {
      return;
    }
    let ele = this.head.data;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return ele;
  }

  getSize() {
    return this.size;
  }
  getFront() {
    return this.head;
  }
  getRear() {
    return this.tail;
  }
  isEmpty() {
    return this.size == 0;
  }
};
