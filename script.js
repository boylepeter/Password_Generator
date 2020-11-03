// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



var passLen = parseInt(prompt("How many characters long should your password be?"))

var lower = "abcdejghijklmnopqrstuvwxyz";
var upper = "abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var special = "abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
var letters = "";

var checkSpecial = confirm("Would you like to use upper, lower case, numbers, and special characters?");

var checkNumbers = confirm("Would you like to use upper, lower case, and numbers?")

var checkUpper = confirm("Would you like to use upper and lower case?")

var checkLower = confirm("Would you like to use lower case letters?")

  if (checkLower) {
   letters += lower;
  }
  if (checkUpper) {
  letters += upper;
  }
  if (checkNumbers) {
  letters += numbers;
  }
  if (checkSpecial) {
  letters += special;
  }
       


function generatePassword(length=passLen, charset=letters) {
    return new Array(length)
      .fill(null)
      .map(()=> charset.charAt(Math.floor(Math.random() * charset.length)))
      .join('');
}

console.log(generatePassword()); 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
