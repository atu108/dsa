const Stack = require("./index");

class StackWithGetMin extends Stack {
  constructor() {
    super();
    this.min = new Stack();
  }

  push(key) {
    if (this.min.isEmpty() || this.min.peek() >= key) {
      this.min.push(key);
    }
    return super.push(key);
  }

  pop() {
    let key = super.pop();
    if (key == this.min.peek()) {
      this.min.pop();
    }
    return key;
  }

  getMin() {
    return this.min.peek();
  }
}

const stack = new StackWithGetMin();

stack.push(20);
stack.push(2);
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
stack.push(30);
stack.push(50);
stack.push(4);
console.log(stack.getMin());
stack.pop();
stack.pop();
console.log(stack.getMin());
