// Assignment Code
var generateBtn = document.querySelector("#generate");

//delclare all variables that will be randomly chosen for password
var upInput = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowInput = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numInput = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specInput = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+'];

//declares password variable to password ID
//an empty array that will take the variables, once confirmed
var pwDisplay1 = [];

//all confirmation statements that will determine characters used
var confirmUpper = confirm("Include uppercase characters?");
var confirmLower = confirm("Include lowercase characters?");
var confirmNumber = confirm("Include numbers?");
var confirmSpecial = confirm("Include special characters?");
var charAmount = prompt("How many characters would you like to include? (8 to 128 characters");

newAmount = parseInt(charAmount);
 if (newAmount < 8 || newAmount > 128) {
   alert("out of range");
   var failedAmount = newAmount;
 }
 else {
   var approvedAmount = newAmount;
 }
//if statements for confirmations, these variables will be pushed into empty array (pwDisplay1)
if (confirmUpper === true) {
  pwDisplay1 = pwDisplay1.concat(upInput);
}
if (confirmLower === true) {
  pwDisplay1 = pwDisplay1.concat(lowInput);
}
if (confirmNumber === true) {
  pwDisplay1 = pwDisplay1.concat(numInput);
}
if (confirmSpecial === true) {
  pwDisplay1 = pwDisplay1.concat(specInput);
}

//for loop to randomly select number of characters requested
//takes one random character from all selected variables
for (i=0; i<approvedAmount; i++) {
password = pwDisplay1[Math.floor(Math.random() * pwDisplay1.length)];
console.log(password);
}
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

