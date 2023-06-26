module.exports = class Stack {
  #stack;
  constructor() {
    this.#stack = [];
  }

  push(item) {
    return this.#stack.push(item);
  }
  pop() {
    return this.#stack.pop();
  }
  size() {
    return this.#stack.length;
  }
  peek() {
    return this.#stack[this.#stack.length - 1];
  }
  isEmpty() {
    return !this.#stack.length;
  }
};

// const stack = new Stack();
// stack.push(10);
// console.log(stack.peek());
// stack.push(20);
// console.log(stack.size());
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.isEmpty());
