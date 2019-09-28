class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);

    // if tree is empty
    if (!this.root) {
      // insert it
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    // if root node exists
    while (currentNode) {
      if (currentNode.value < value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
      if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
      if (currentNode.value === value) {
        return "duplicated value";
      }
    }
  }
  find(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      }
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      }
    }
    return false;
  }
  bfs(value) {
    let list = new Set();
    let q = [];
    
  }
  dfs(value) {}
}
