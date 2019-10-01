class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
  }
  isEmpty() {
    return this.head === null && this.tail === this.head;
  }
}
module.exports = { LinkedList };
