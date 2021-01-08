// variables 
const lower = ('abcdefghijklmnopqrstuvwxyz').split('');
const upper = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');
const num = ('1234567890').split('');
const sym = ('!@#$%^&*()').split('');
let passHolder = [];
let passwordArr = [];

function generatePassword() {
  // prompts for how you want your password
  let passwordLength = prompt('How long would you like your password to be? Please choose between 8 and 128 character.')
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === '') {
      alert('Password length must be between 8 and 128 characters')
    };
  let lowerCase = confirm('Would you like to use lowercase letters?');
  let upperCase = confirm('Would you like to use uppercase letters?');
  let numbers = confirm('Would you like to use numbers?');
  let symbols = confirm('Would you like to use symbols?');
    if (lowerCase === false && upperCase === false && numbers ===false && symbols === false) {
      alert('You must choose at least one variable for your password.')
    }

  // if statements to determine what characters you want in password
  if (lowerCase === true) {
     passHolder = passHolder.concat(lower)
   } 

   if (upperCase === true) {
     passHolder = passHolder.concat(upper)
   }

   if (numbers === true) {
    passHolder =  passHolder.concat(num)
  }

  if (symbols === true) {
    passHolder = passHolder.concat(sym)
  }

  for (let i = 0; i < passwordLength; i++) {
    passwordArr.push(passHolder[Math.floor(Math.random() * passHolder.length)])
  }

return(passwordArr.join(''));
};

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);