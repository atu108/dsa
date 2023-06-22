"use strict";
class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

export default class LinkList {
  #head = null;
  #tail = null;
  constructor() {
    this.length = 0;
  }

  add(x, pos = undefined) {
    if (!pos || pos == this.length) {
      const node = new Node(x);
      if (this.#head == null) {
        this.#head = node;
        this.#tail = node;
      } else {
        this.#tail.next = node;
        this.#tail = node;
      }
      this.length++;
      return this.#head;
    }
    if (pos == 1) return this.shift(x);
    if (pos > this.length) return this.#head;
    let i = 1;
    let current = this.#head;
    while (i < pos - 1) {
      current = current.next;
      i++;
    }
    const node = new Node(x);
    node.next = current.next;
    current.next = node;
    return this.#head;
  }

  get(x) {
    let current = this.#head;
    if (!current) return null;
    while (current.next) {
      if (current.data == x) return current;
      current = current.next;
    }
    return current.data == x ? current : -1;
  }

  traverse(head = this.#head) {
    if (!head) return;
    console.log(head.data);
    this.traverse(head.next);
  }
  shift(x) {
    let node = new Node(x);
    node.next = this.#head;
    this.#head = node;
    this.length++;
    return this.#head;
  }

  unshift() {
    if (!this.head) return null;
    this.#head = this.#head.next;
    this.length--;
    return this.#head;
  }

  push(x) {
    this.add(x);
  }

  pop() {
    let current = this.#head;
    if (!current) return null;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
    return this.#head;
  }

  remove(x) {}
}

function middleOfLL(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
}

function reverseLinkedList(head) {
  if (!head) return null;
  if (!head.next) return head;
  let current = head;
  let prev = null;
  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function recursiveReverse(current, prev = null) {
  if (!current) return prev;
  let next = current.next;
  current.next = prev;
  return recursiveReverse(next, current);
}

function removeDuplicates(head) {
  if (!head) return null;
  let current = head;
  while (current && current.next) {
    if (current.data == current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
}

const linkList = new LinkList();
linkList.add(5);
linkList.add(10);
linkList.add(10);
linkList.add(10);
linkList.add(15);
linkList.add(15);
let head = linkList.add(15);
console.log(removeDuplicates(head));
linkList.traverse();
