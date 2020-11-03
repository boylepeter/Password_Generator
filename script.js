// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



var passLen = parseInt(prompt("How many characters long should your password be?"))

//*var alphabet1 = "abcdejghijklmnopqrstuvwxyz"
//var alphabet2 = "abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//var alphabet3 = "abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
//var alphabet4 = "abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"

//if confirm("Would you like to use upper, lower case, numbers, and special characters?"){
//  charset=alphabet4
//}
//else {confirm("Would you like to use upper, lower case, and numbers?"){
//  charset=alphabet3}
//}
//else {confirm("Would you like to use upper and lower case?"){
//  charset=alphabet2
//}}
//else {charset=alphabet1}


function generatePassword(length=passLen, charset="abcdejghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()") {
    return new Array(length)
      .fill(null)
      .map(()=> charset.charAt(Math.floor(Math.random() * charset.length)))
      .join('');
}

console.log(generatePassword()); 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
