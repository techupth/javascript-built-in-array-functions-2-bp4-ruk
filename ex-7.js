function isPalindrome(string) {
  // Start coding here
  let cleanedString = string.toLowerCase().replace(/[\W_]/g, "");
  let reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false