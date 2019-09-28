class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    // when there's nothing in the tree
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // when there's something in the tree
    let currentNode = this.root;
    // while currentNode
    while (currentNode) {
      // if value<currentNode
      if (value < currentNode.value) {
        if (!currentNode.left) {
          // insert left
          currentNode.left = newNode;
        }
        currentNode = currentNode.left;
      }
      // if value>currentNode
      if (value > currentNode.value) {
        if (!currentNode.right) {
          // insert right
          currentNode.right = newNode;
        }
        currentNode = currentNode.right;
      }
      if (value === currentNode.value) {
        return;
      }
    }
  }
  find(value) {
    const currentNode = this.root;
    while (currentNode) {
      switch (currentNode.value) {
        case currentNode.value === value:
          return true;
        case currentNode.value > value:
          currentNode = currentNode.right;
          break;
        case currentNode.value < value:
          currentNode = currentNode.left;
          break;
      }
    }
    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let parentNode = null;
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
      }
    }
  }
  traverse() {
    let currentNode = this.root;
    let visited = new Set();
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      visited.add(currentNode.value);
      console.log(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(8);
