// There are three types of edits that can be performed on strings : insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero eidts) away.
// EX
// I: pale, ple
// O: true
// I: pale, pale
// O: true
// I: pale, bake
// O: false

function oneAway(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  let difference = str1.length - str2.length;
  if (Math.abs(difference) > 1) {
    return false;
  }
  let count = 0;
  if (difference > 0) {
    for (let i = 0; i < str2.length; i++) {
      if (str1[i] !== str2[i]) {
        str1 = str1.slice(0, i) + str1.slice(i + 1);
        count++;
        if (str1[i] !== str2[i]) {
          return false;
        }
      }
    }
  } else if (difference < 0) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        str2 = str2.slice(0, i) + str2.slice(i + 1);
        count++;
        if (str1[i] !== str2[i]) {
          return false;
        }
      }
    }
  } else {
    for (let i = 0; i < str2.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
    }
  }
  return count < 2;
}
module.exports = {
  oneAway
};
