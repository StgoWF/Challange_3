// Assignment code here
// Characters to include in the password
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var numericCharacters = "0123456789";
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getPasswordOptions() {
    // Ask for password length
    var length = parseInt(prompt('How many characters would you like your password to contain?'), 10);
  
    // Validate password length
    if (length < 8 || length > 128 || isNaN(length)) {
      alert('Password length must be between 8 and 128 characters');
      return;
    }
  
    // Confirm character types
    var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');
    var hasNumericCharacters = confirm('Click OK to confirm including numeric characters.');
    var hasLowerCasedCharacters = confirm('Click OK to confirm including lowercase characters.');
    var hasUpperCasedCharacters = confirm('Click OK to confirm including uppercase characters.');
  
    // Ensure at least one character type is selected
    if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
      alert('Must select at least one character type');
      return;
    }
  
    // Return the user's password options
    return {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
  }
  
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  } // This closing bracket ends the writePassword function
  

// Define the generatePassword function
function generatePassword() {
    var options = getPasswordOptions();
    if (!options) return ''; // If no options, return an empty string
  
    var possibleCharacters = '';
    
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
    
    // The logic to pick random characters from possibleCharacters will go here
    
    return password; // This will return the generated password
  }
  
  
  // This event listener ensures the DOM is fully loaded before attaching the event listener to the button
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");
  
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
  });
  
