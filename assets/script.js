// Assignment Code
var generateBtn = document.querySelector("#generate");

//delclare all variables that will be randomly chosen for password
var upInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowInput = "abcdefghijklmnopqrstuvwxyz";
var numInput = "0123456789";
var specInput = "!@#$%^&*_-+";

//an empty array that will take the variables, once confirmed


//all confirmation statements that will determine characters used; activated with button click
function genFunction (generateBtn) {
var pwDisplay1 = [];
var confirmUpper = confirm("Include uppercase characters?");
var confirmLower = confirm("Include lowercase characters?");
var confirmNumber = confirm("Include numbers?");
var confirmSpecial = confirm("Include special characters?");

//if statement to verify criteria was entered, if not then event listener for generated password is disabled
if (!confirmUpper === true && !confirmLower === true && !confirmNumber === true && !confirmSpecial === true) {
  alert("MUST ENTER A CRITERIA")
  function cancelBtn () {
    generateBtn.removeEventListener("click", writePassword);
  }
}
else {
  //prompt for character amount, result variable delcared for final display
var charAmount = prompt("How many characters would you like to include? (8 to 128 characters");
}
var result = "";

 //if statement to verify character amount is valid, if not then alert is activated.
newAmount = parseInt(charAmount);
 if (newAmount < 8 || newAmount > 128) {
   alert("not a valid number");
 }
 else {
   var approvedAmount = newAmount;
 }

//if statements for confirmations, these variables will be pushed into empty array (pwDisplay1). 
if (confirmUpper === true) {
  pwDisplay1.push(upInput);
}
if (confirmLower === true) {
  pwDisplay1.push(lowInput);
}
if (confirmNumber === true) {
  pwDisplay1.push(numInput);
}
if (confirmSpecial === true) {
  pwDisplay1.push(specInput);
}
//for loop to randomly select number of characters requested
for (var i=0; i<approvedAmount; i++) {
password = pwDisplay1[Math.floor(Math.random() * pwDisplay1.length)];
result += password.charAt(Math.floor(Math.random() * password.length));
}

return result;
}

// Write password to the #password input
function writePassword() {
  
  var result = genFunction();
  var passwordText = document.querySelector("#password");
  passwordText.value = result;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

