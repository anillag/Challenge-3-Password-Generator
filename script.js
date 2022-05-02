// Assignment code here

// **********************
// ** Pseudocode Start **
// **********************
// User clicks button to begin password prompt sequence
// User prompts take input to select criteria
// User prompted for password length between 8-128
// User prompted for lowercase letters, y/n
// User prompted for uppercase letters, y/n
// User prompted for numerical values, y/n
// User prompted for special characters, y/n
// Validate all user input as it's being collected
// Validate that at least one character type was selected
// Generate password based on selected criteria
// Display password in either window.alert() or replace HTML
// **********************
// *** Pseudocode End ***
// **********************

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
