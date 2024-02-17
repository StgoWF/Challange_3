// Assignment code here
// Characters to include in the password
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var numericCharacters = "0123456789";
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to get password options from the user
function getPasswordOptions() {
    // Prompt the user for the password length
    var length = parseInt(prompt('How many characters would you like your password to contain?'), 10);
  
    // Check if the entered length is a number and within the allowed range
    if (length < 8 || length > 128 || isNaN(length)) {
      alert('Password length must be between 8 and 128 characters');
      return;
    }
  
    // Confirm with the user which character types to include
    var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');
    var hasNumericCharacters = confirm('Click OK to confirm including numeric characters.');
    var hasLowerCasedCharacters = confirm('Click OK to confirm including lowercase characters.');
    var hasUpperCasedCharacters = confirm('Click OK to confirm including uppercase characters.');
  
    // Make sure the user selects at least one character type
    if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
      alert('Must select at least one character type');
      return;
    }
  
    // Return an object containing the user's password criteria
    return {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
  }
  // Function to write the generated password into the password input field
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log(password); // This should log the generated password string
    passwordText.value = password;
  
  } 
  

// Function to generate a password based on selected options
function generatePassword() {
    var options = getPasswordOptions();// Get the password criteria from the user
    // Check if options is valid
    if (!options) {
      return "No password generated.";// Return a default message if no options are selected
    }

    // String to store all possible characters for the password
    var possibleCharacters = '';
    // Initialize an empty string for the password
    var password = '';

    // Add selected characters to the possibleCharacters string
    if (options.hasSpecialCharacters) {
      possibleCharacters += specialCharacters;
    }
    if (options.hasNumericCharacters) {
      possibleCharacters += numericCharacters;
    }
    if (options.hasLowerCasedCharacters) {
      possibleCharacters += lowerCasedCharacters;
    }
    if (options.hasUpperCasedCharacters) {
      possibleCharacters += upperCasedCharacters;
    }
    
    // Build the password by randomly picking characters from the possibleCharacters string
    for (var i = 0; i < options.length; i++) {
        var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
        password += possibleCharacters[randomIndex];
      }
    return password; // Return the generated password

    
  }
  
// Event listener to ensure the DOM is fully loaded before functions are executed
document.addEventListener('DOMContentLoaded', function () {
    // Select the generate button
    var generateBtn = document.querySelector("#generate");
  
    // Add a click event listener to the generate button to execute writePassword function
    generateBtn.addEventListener("click", writePassword);
  });
  
