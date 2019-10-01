class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
  }
  isEmpty() {
    return this.head === null && this.tail === this.head;
  }
  add(value) {
    const newNode = { value, next: null };
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  remove(position) {
    for (let count = 0; count <= position; count++) {}
  }
}
module.exports = { LinkedList };
