function lengthOfLongestSubstring(s) {
  let duplicate = {}
  let string =""
  for(let i =0; i<s.length; i++) {
   
    if(duplicate[s[i]]) {
      duplicate += s[i];
      console.log(duplicate)
    } else {
      i++;
    }
    console.log(duplicate)
  }
  return duplicate;
}

console.log(lengthOfLongestSubstring("abcabcbb"))