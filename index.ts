// YouVerify Assessment

// Question 1
// Is Unique
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use an additional data structure

const uniqueCharacters = (str) => {
  for(let i = 0; i < str.length; i++)
    for(let j = i + 1; j < str.length; j++)
      if (str[i] == str[j])
        return false;
  return true;
}

console.log(uniqueCharacters('bsioknn'))


// Question 2
// Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other

const arePermutations = (str1, str2) => {
// Get lengths of both strings
let n1 = str1.length;
let n2 = str2.length;

// If length of both strings is not same,
// then they cannot be Permutation
if (n1 != n2)
  return false;

let ch1 = str1.split(' ');
let ch2 = str2.split(' ');

// Sort both strings
ch1.sort();
ch2.sort();

// Compare sorted strings
for(let i = 0; i < n1; i++)
  if (ch1[i] != ch2[i])
    return false;

return true;
}
console.log(arePermutations('hhsh', 'hhsh'))


// Question 3
// URLify
// Write a method to replace all spaces with '%20'.

// replaces space with '%20'
const urlify = (str) => {
  return str.split(' ').join('%20');
}
console.log(urlify('Miss Eugenia Ikwuegbu'))


// Question 4
// Palindrome Permutation
// Given a string, write a function to check if it is a permutation of a palindrome

const palindromePermutation = (str) => {
  // Create a list
  let list = [];

  // For each character in input strings,
  // remove character if list contains
  // else add character to list
  for(let i = 0; i < str.length; i++)
  {
    if (list.includes(str[i]))
      list.splice(list.indexOf(str[i]), 1);
    else
      list.push(str[i]);
  }
  if (str.length % 2 == 0 && list.length == 0 ||
    (str.length % 2 == 1 && list.length == 1))
    return true;
  else {
    return false;
  }
}
console.log(palindromePermutation('gshjds'))


//Question 5
// One Array
// There are 3 types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character.
// Given 2 strings, check if they are one edit (or zero edits) away

const oneArray = (str1, str2 ) => {
// Find lengths of given strings
  let m = str1.length, n = str2.length;

  // If difference between lengths is
  // more than 1, then strings can't
  // be at one distance
  if (Math.abs(m - n) > 1)
    return false;

  // Count of edits
  let count = 0;
  let i = 0, j = 0;

  while (i < m && j < n)
  {
    // If current characters
    // don't match
    if (str1[i] != str2[j])
    {
      if (count == 1)
        return false;

      // If length of one string is
      // more, then only possible edit
      // is to remove a character
      if (m > n)
        i++;
      else if (m< n)
        j++;

      // If lengths of both
      // strings is same
      else {
        i++;
        j++;
      }
      // Increment count of edits
      count++;
    }
    // If current characters match
    else {
      i++;
      j++;
    }
  }

  // If last character is extra in any string
  if (i < m || j < n)
    count++;

  return count == 1;

  }
console.log(oneArray('pale', 'pakke'))

// Question 6
// String Compression
// Implement a method to perform basic string compression using the counts of repeated characters.

const stringCompression = (str) => {
  if (str.length ==0) {
    console.log('Please enter valid string.');
    return;
  }
  let output = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i+1]) {
      output += str[i] + count;
      count = 0;
    }
  }
  return output;
}

stringCompression(''); //Please enter valid string.
console.log(stringCompression('aaaa')); //a4
console.log(stringCompression('aaaabbc')); //a4b2c1
console.log(stringCompression('aaaabbcaabb')); //a4b2c1a2b2

