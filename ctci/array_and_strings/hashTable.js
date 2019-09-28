class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.size = size;
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }
  set(key, value) {
    const pair = [key, value];
    const index = this._hash(key);

    if (this.data[index]) {
      this.data[index].push(pair);
    } else {
      this.data[index] = [pair];
    }
  }
  peek(key) {
    const index = this._hash(key);
    if (this.data[index]) {
      for (let element of this.data[index]) {
        if (element[0] === key) {
          return element[1];
        }
      }
    }
    return false;
  }
  print() {
    console.log(this.data);
  }
}
const ht = new HashTable(4);

ht.set("hi", 2);
ht.set("hi", 3);
ht.set("hey", 2);
console.log(ht.peek("his", 3));
ht.print();
