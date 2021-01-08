// Assignment code here
let specialSymbols = '!@#$%^&*()';
let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  let passwordLength = prompt('How long would you like your password? (Between 9 and 128 characters)');
    if (passwordLength< 9 || passwordLength > 128 || passwordLength === "") {
      alert('Password length must be between 9 and 128 characters long.')
      return passwordLength;
    }

  let lowerCase = confirm('Would you like to use lowercase letters?');

  let upperCase = confirm('Would you like to use uppercase letters?');
  
  let numbers = confirm('Would you like to use numbers?');

  let symbols = confirm('Would  you like to use special symbols?')

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
