// Ipmlement a method to perform basic string compression using the counts of repeated characters. For example, the string 'aabcccccaaa' would become a2b1c5a3. if the compressed string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters(a-z).

function stringCompression(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += `${str[i]}${count}`;
      count = 1;
    }
  }
  return str.length < result.length ? str : result;
}

module.exports = {
  stringCompression
};
