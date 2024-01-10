

// function reverse(string) {
//   let reverseString = "";
//   console.log(typeof(string))
//   // console.log(string.length);
//   for(let i = string.length; i >=0; i--) {
//     reverseString += string[i]
   
//   }
//   // console.log(reverseString);

//   return isPalindrome(reverseString, string)
// }
// function isPalindrome(reverseString, string){
//   console.log(reverseString, string)
//   for(let i =0; i < string.length; i++){
//   if (reverseString[i] === string[i]) {
//     console.log("This is a Palindrom")
//   } else {
//     console.log("not a Palindrome")
//   }}
// }

  //^a-z0-9 represents that we must find all alphanumeric char and remove it.
function isPalindrome(string) {
  const reverse = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for(let i =0; i< reverse.length; i++) {
    
    if(reverse[i] !== reverse[reverse.length -i -1]) {
      
      return false
    }
  }
  return true;
}
console.log(isPalindrome("rare"))

// console.log(isPalindrome("rare"));
console.log(isPalindrome("acaca"));