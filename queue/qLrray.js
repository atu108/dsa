class Queue {
  constructor(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.q = new Array(capacity);
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }
    let ele = this.q[this.front];
    this.front = ++this.front % this.capacity;
    this.size--;
    return ele;
  }

  enqueue(value) {
    if (this.isFull()) {
      return;
    }
    this.rear = ++this.rear % this.capacity;
    this.q[this.rear] = value;
    if (this.isEmpty()) {
      this.front = this.rear;
    }
    this.size++;
  }

  getFront() {
    return this.q[this.front];
  }

  getRear() {
    return this.q[this.rear];
  }

  isFull() {
    return this.capacity <= this.size;
  }

  isEmpty() {
    return this.size == 0;
  }
}

const q = new Queue(3);

q.enqueue(78);
q.enqueue(98);
console.log(q.getFront());
q.enqueue(45);
q.enqueue(76);
console.log(q.getRear());
q.dequeue();
console.log(q.getFront());
q.enqueue(88);
console.log(q.getRear());
