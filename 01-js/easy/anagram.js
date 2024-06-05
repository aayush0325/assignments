/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert strings to lowercase
    const normalize = str => str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    // Normalize both strings
    str1 = normalize(str1);
    str2 = normalize(str2);
  
    // If the lengths of the normalized strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create frequency maps for both strings
    const charCount1 = {};
    const charCount2 = {};
  
    for (let char of str1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
    }
  
    for (let char of str2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
    }
  
    // Compare the frequency maps
    for (let char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }
  
    return true;
  }
}

module.exports = isAnagram;
