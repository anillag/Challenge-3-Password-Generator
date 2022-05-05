// Assignment code here
var contentValidation = 0;
var pwLength = "";
var pwLowercase = "";
var pwUppercase = "";
var pwNumerals = "";
var pwSpChars = "";

const valuesLowercase = "abcdefghijklmnopqrstuvwxyz";
const valuesUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const valuesNumerals = "0123456789";
const valuesSpChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

// **********************
// ** Pseudocode Start **
// **********************
// User clicks button to begin password prompt sequence
function generatePassword() {
  // User prompted for password length between 8-128 - DONE
  var pwLength = window.prompt("Welcome to the Password Generator!  Please enter your desired password length, between 8 and 128");
  console.log("Password should be " + pwLength + " characters in length.");
  if (pwLength < 8 || pwLength > 128 || pwLength === "" || pwLength === null) {
    window.alert("Value selected is outside of the acceptable range or was left blank.  Please try again.")
    return generatePassword();
  }
  // User prompted for lowercase letters, y/n
  var pwLowercase = window.prompt("Would you like lowercase letters included in your password?  [Y/N]");
  console.log(pwLowercase);
  pwLowercase = pwLowercase.toUpperCase();
  console.log(pwLowercase);
  if (pwLowercase === "" || pwLowercase === null) {
    window.alert("Entry was left blank.  Please try again.")
    return generatePassword();
  } 
  // User prompted for uppercase letters, y/n
  var pwUppercase = window.prompt("Would you like uppercase letters included in your password?  [Y/N]");
  console.log(pwUppercase);
  pwUppercase = pwUppercase.toUpperCase();
  console.log(pwUppercase);
  if (pwUppercase === "" || pwUppercase === null) {
    window.alert("Entry was left blank.  Please try again.")
    return generatePassword();
  } 
  // User prompted for numerical values, y/n
  var pwNumerals = window.prompt("Would you like numerals included in your password?  [Y/N]");
  console.log(pwNumerals);
  pwNumerals = pwNumerals.toUpperCase();
  console.log(pwNumerals);
  if (pwNumerals === "" || pwNumerals === null) {
    window.alert("Entry was left blank.  Please try again.")
    return generatePassword();
  } 
  // User prompted for special characters, y/n
  var pwSpChars = window.prompt("Would you like special characters included in your password?  [Y/N]");
  console.log(pwSpChars);
  pwSpChars = pwSpChars.toUpperCase();
  console.log(pwSpChars);
  if (pwSpChars === "" || pwSpChars === null) {
    window.alert("Entry was left blank.  Please try again.")
    return generatePassword();
  }

  // Begin validation to check that at least ONE OR MORE options were selected ("Y")
  console.log('Beginning data validation to make sure at least one option was selected ("Y").')
  if (pwLowercase === "Y") {
    console.log("Password should contain lowercase letters.  Current 'contentValidation' value is " + contentValidation + ".  Incrementing 'contentValidation' variable by 1.");
    contentValidation++;
    console.log("New 'contentValidation' variable is " + contentValidation + ".");
  } else {
    console.log("Password should NOT contain lowercase letters.  Skipping increment of 'contentValidation'.  Current 'contentValidation' value is " + contentValidation + ".")
  }
  if (pwUppercase === "Y") {
    console.log("Password should contain uppercase letters.  Current 'contentValidation' value is " + contentValidation + ".  Incrementing 'contentValidation' variable by 1.");
    contentValidation++;
    console.log("New 'contentValidation' variable is " + contentValidation + ".");
  } else {
    console.log("Password should NOT contain uppercase letters.  Skipping increment of 'contentValidation'.  Current 'contentValidation' value is " + contentValidation + ".");
  }
  if (pwNumerals === "Y") {
    console.log("Password should contain numerals.  Current 'contentValidation' value is " + contentValidation + ".  Incrementing 'contentValidation' variable by 1.");
    contentValidation++;
    console.log("New 'contentValidation' variable is " + contentValidation + ".");
  } else {
    console.log("Password should NOT contain numerals.  Skipping increment of 'contentValidation'.  Current 'contentValidation' value is " + contentValidation + ".");
  }
  if (pwSpChars === "Y") {
    console.log("Password should contain special characters.  Current 'contentValidation' value is " + contentValidation + ".  Incrementing 'contentValidation' variable by 1.");
    contentValidation++;
    console.log("New 'contentValidation' variable is " + contentValidation + ".");
  } else {
    console.log("Password should NOT contain special characters.  Skipping increment of 'contentValidation'.  Current 'contentValidation' value is " + contentValidation + ".");
  }
  
  // Finalize validation that at least ONE OR MORE options was selected ("Y")
  if (contentValidation > 0) {
    console.log("The 'contentValidation' variable is set to " + contentValidation + ".  At least one option was selected.  Allowing script to continue.");
  } else {
    console.log("The 'contentValidation' variable is set to " + contentValidation + ".  No options were selected.  Restarting password generator.");
    window.alert("No options were selected.  Please try again.");
    return generatePassword();
  }
};


// User prompts take input to select criteria - DONE
// Validate all user input as it's being collected - DONE
// Validate that at least one character type was selected - DONE
// Generate password based on selected criteria
// Display password in either window.alert() or replace HTML
// Joseph's hint, use pop and/or push to add characters to the array for characters
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