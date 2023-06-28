class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.prev = null;
  }
}
class Dequeue {
  constructor() {
    this.size = 0;
    this.front = null;
    this.rear = null;
  }

  addFront(x) {
    const node = new Node(x);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.front.prev = node;
      node.next = this.front;
      this.front = node;
    }
    return this.front;
  }
  addRear(x) {
    const node = new Node(x);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      node.prev = this.rear;
      this.rear.next = node;
      this.rear = node;
    }
    return this.rear;
  }
  removeFront() {
    if (!this.front) return;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    else this.front.prev = null;
  }
  removeRear() {
    if (!this.rear) return;
    this.rear = this.rear.prev;
    if (!this.rear) this.front = null;
    else this.rear.next = null;
  }

  getRear() {
    if (!this.rear) return;
    return this.rear;
  }
  getFront() {
    if (!this.front) return;
    return this.front;
  }
}

let dq = new Dequeue();
dq.addFront(50);
dq.addFront(40);
dq.addFront(10);
dq.addFront(14);
dq.removeFront();
dq.addRear(70);
console.log(dq.getRear());
