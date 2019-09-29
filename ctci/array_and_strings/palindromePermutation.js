// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. Apermutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// Ex
// I: Tact Coa
// O: True( permutations: "taco cat",'atco cta',etc.)

function palindromePermutation(str) {
  let hashMap = {};
  str = str.split(" ").join("");
  for (let letter of str) {
    if (hashMap[letter]) {
      delete hashMap[letter];
    } else {
      hashMap[letter] = true;
    }
  }
  return Object.keys(hashMap).length <= 1;
}
module.exports = palindromePermutation;
