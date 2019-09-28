// 10--->5--->16
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
  insert(index, value) {
    if (index > this.length) {
      this.append(value);
      return this.print();
    }
    if (index === 0) {
      this.prepend(value);
      return this.print();
    }
    let newNode = new Node(value);
    let correctNode = this.traverseTo(index - 1);
    newNode.next = correctNode.next;
    correctNode.next.prev = newNode;
    newNode.prev = correctNode;
    correctNode.next = newNode;
    this.length++;
    return this.print();
  }
  delete(index) {
    const prevNode = this.traverseTo(index - 1);
    const nextNode = prevNode.next.next;
    prevNode.next = nextNode;
    this.length--;
    return this.print();
  }
  traverseTo(index) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (index === i) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }
  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    let tailNode = this.head;
    while (currentNode) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    this.tail = tailNode;
    return this.print();
  }
}
const testLL = new LinkedList(10);
