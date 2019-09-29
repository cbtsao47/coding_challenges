// Implement an algorithm to determine if a string has all unique characters.
// What if you can't use additional data structures?

function isUnique(str) {
  const hashMap = {};
  let duplicate = false;
  for (let letter of str) {
    if (hashMap[letter]) {
      duplicate = true;
    } else {
      hashMap[letter] = true;
    }
  }
  return !duplicate;
}

function isUnique2(str) {
  let duplicate = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        duplicate = true;
      }
    }
  }
  return !duplicate;
}

module.exports = {
  isUnique,
  isUnique2
};
