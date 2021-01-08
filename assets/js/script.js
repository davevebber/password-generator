let specialSymbols = '!@#$%^&*()';
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
 
// function to write the password
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// function to generate the password
function generatePassword() {
  let passwordLength = prompt('How long would you like your password? (Between 9 and 128 characters)');
    if (passwordLength < 9 || passwordLength > 128 || passwordLength === "") {
      alert('Password length must be between 9 and 128 characters long.')
    }
  let lowerCase = confirm('Would you like to use lowercase letters?');
  let upperCase = confirm('Would you like to use uppercase letters?');
  let numbers = confirm('Would you like to use numbers?');
  let symbols = confirm('Would  you like to use special symbols?')

 
  let minimumCount = 0;
  let minimumNumbers = "";
  let minimumLowerCases = "";
  let minimumUpperCases = "";
  let minimumSpecialCharacters = "";

  let functionArr = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

let randomPasswordGenerated = "";

for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  let randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;

}


randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;
return randomPasswordGenerated;

}