class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = this.first;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    const currentFirst = this.first;
    this.first = this.first.next;
    currentFirst.next = null;
    this.length--;
    return currentFirst;
  }
  isEmpty() {
    return this.length === 0;
  }
}
