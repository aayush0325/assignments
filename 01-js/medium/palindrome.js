/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(s) {
  s = s.toLowerCase();

  // Remove non-alphanumeric characters
  const cleanedString = s.replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is the same forwards and backwards
  return cleanedString === cleanedString.split('').reverse().join('');
}

module.exports = isPalindrome;
