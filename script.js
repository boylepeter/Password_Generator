// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lower = "abcdejghijklmnopqrstuvwxyz";
var upper = "abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var special = "abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
var letters = "";

var passLen = parseInt(prompt("How many characters long should your password be? (Must be 8-128 characters)"))
if ( 128 < passLen || passLen < 8 || passLen === 0 ){ 
  alert("Must be between 8 and 128 characters.");
  location.reload()}

else if (confirm("Would you like to use upper, lower case, numbers, and special characters?")) {
letters += special; alert("Your password will contain upper, lower case, numbers, and special characters.")}

else if (confirm("Would you like to use upper, lower case, and numbers?")) {
letters += numbers; alert("Your password will contain upper, lower case, and numbers.")}

else if (confirm("Would you like to use upper and lower case?")) {
letters += upper; alert("Your password will contain upper and lower case.")}

else {
letters += lower; alert("Your password will contain lower case letters only.")}

       


function generatePassword(length=passLen, charset=letters) {
    return new Array(length)
      .fill(null)
      .map(()=> charset.charAt(Math.floor(Math.random() * charset.length)))
      .join('');
}

console.log(generatePassword()); 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
