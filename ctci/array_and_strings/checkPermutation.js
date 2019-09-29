// Given two strings, write a method to decide if one is a permutaion of the other.
module.exports = (str, str2) => {
  if (str.length !== str2.length) {
    return false;
  }
  let hashMap = {};
  for (let letter of str) {
    hashMap[letter] = hashMap[letter] + 1 || 1;
  }
  for (let letter of str2) {
    if (hashMap[letter] > 0) {
      hashMap[letter]--;
    } else {
      return false;
    }
  }

  return true;
};
