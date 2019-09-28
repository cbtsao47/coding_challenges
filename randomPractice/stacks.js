class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Stacks
class Stack {
  constructor() {
    this.top = null;
    this.bottom = this.top;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length) {
      let currentTop = this.top;
      this.top.next = currentTop;
    }
    this.top = newNode;
    this.length++;
  }
  pop() {
    if (!this.length) {
      return null;
    } else {
      const currentTop = this.top;
      this.top = this.top.next;
      this.length--;
      return currentTop;
    }
  }
  peek() {
    return this.top;
  }
}
const myStack = new Stack();
