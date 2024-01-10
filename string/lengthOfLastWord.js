function lengthOfLastWord(s) {
  const string = s.toLowerCase().replace(/^\s+|\s+$/gm,'');
  const word = string.split(" ")
   console.log(word)
  for(let i = word.length-1; i >= 0; i--) {
     return word[i].length
  }
  return false;
}

// console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))