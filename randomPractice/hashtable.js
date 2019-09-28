let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function() {
    console.log("ahhhhhhh");
  }
};
[[]];
user.age; //O(1)
user.spell = "abra kadabra"; //O(1)
user.scream(); // O(1)

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
      this.data[index].push([key, value]);
    } else {
    }
  }
  get(key) {
    let hashedKey = this._hash(key);
    return this.data[hashedKey];
  }
}
const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
myHashTable.get("grapes");

// Google Question
// Given an array =[2,5,1,2,3,5,1,2,4]
// should return 2
// Given an array =[2,1,1,2,3,5,1,2,4]
// should return 1
// Given an array [2,3,4,5]
// shoudl return undefined
// find the second recurring number
function secondRecurring(arr) {
  // create an enpty array
  // loop over the given array
  // if the current number exists in the empty array
  // return that number
  let startingArr = {};
  let count = 0;
  for (let number of arr) {
    if (startingArr[number] && count === 1) {
      return number;
    } else if (startingArr[number]) {
      count++;
    }
    startingArr[number] = 1;
  }
  return undefined;
}
