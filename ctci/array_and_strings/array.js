class DynamicArray {
  constructor(capacity = 1) {
    this.data = {};
    this.length = 0;
    this.capacity = capacity;
  }
  resize(arr) {
    // create new array
    const newArr = new DynamicArray(arr.capacity * 2);
    // copy to new array
    for (let i = 0; i < arr.length; i++) {
      newArr.data[i] = arr.data[i];
      newArr.length++;
    }
    arr.data = newArr.data;
    arr.capacity = newArr.capacity;
  }
  pop() {
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  push(value) {
    if (this.length >= this.capacity) {
      this.resize(this);
    }
    this.data[this.length] = value;
    this.length++;
    return this.data;
  }
}
module.exports = DynamicArray;
