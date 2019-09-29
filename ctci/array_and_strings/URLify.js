// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.(Note: if implementing in Java, please use a character array so that you can perform this operation in place.)
// Example
// I: 'Mr John Smith      ',13
// O: 'Mr%20John%20Smith'

function URLify(str) {
  return str
    .trimEnd()
    .split(" ")
    .join("%20");
}

function URLify2(str) {
  const trimmed = str.trimEnd();
  return trimmed.replace(/\s/g, "%20");
}
function URLify3(str) {
  let result = "";
  str = str.trimEnd();
  for (let letter of str) {
    if (letter === " ") {
      result += "%20";
    } else {
      result += letter;
    }
  }
  return result;
}
module.exports = {
  URLify,
  URLify2,
  URLify3
};
