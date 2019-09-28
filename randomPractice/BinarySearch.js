// linear
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
function linearRecursive(arr, target) {
  if (!arr.length) {
    return false;
  }
  if (arr[0] === target) {
    return true;
  }
  return linearRecursive(arr.slice(1), target);
}

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return true;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] < target) {
      start = middle + 1;
    }
  }
  return false;
}
function binaryRecursive(arr, target) {
  if (!arr.length) {
    return false;
  }
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  if (target === arr[mid]) {
    return true;
  }
  if (target > arr[mid]) {
    return binaryRecursive(arr.slice(mid + 1), target);
  } else if (target < arr[mid]) {
    return binaryRecursive(arr.slice(start, mid), target);
  }
}
console.log("linear", linearSearch([1, 2, 3, 4], 3)); //true
console.log("linear", linearSearch([1, 2, 3, 4], 5)); //false
console.log("linear", linearSearch([], 5)); //false
console.log("linear recursive", linearRecursive([1, 2, 3, 4], 3)); //true
console.log("linear recursive", linearRecursive([1, 2, 3, 4], 4)); //true
console.log("linear recursive", linearRecursive([1, 2, 3, 4], 1)); //true
console.log("linear recursive", linearRecursive([1, 2, 3, 4], 0)); //false

console.log("");
console.log("binary", binarySearch([1, 2, 3, 4], -1)); //false
console.log("binary", binarySearch([1, 2, 3, 4], 4)); //true
console.log("binary", binarySearch([1, 2, 3, 4], 5)); //false
console.log("binary", binarySearch([], 5)); //false
console.log("binary", binarySearch([], -1)); //false
console.log("binary recursive", binaryRecursive([1, 2, 3, 4], 4)); //true
console.log("binary recursive", binaryRecursive([1, 2, 3, 4], 1)); //true
console.log("binary recursive", binaryRecursive([1, 2, 3, 4], 2)); //true
console.log("binary recursive", binaryRecursive([1, 2, 3, 4], 6)); //false
console.log("binary recursive", binaryRecursive([1, 2, 3, 4], -1)); //false

console.log(Math.floor(1 / 2));
