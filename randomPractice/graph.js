class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(n1, n2) {
    this.adjacentList[n1].push(n2);
    this.adjacentList[n2].push(n1);
  }
}
