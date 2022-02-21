// Assignment code here: 

// sets return for elements: Generate and Password
var generateEl = document.getElementById("generate")
var passwordEl = document.getElementById("password")

// set variables for: uppercase, lowercase, numbers, symbols
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var numbers = '0123456789'
var symbols = '!@#$%^&*.'

// set up and store desired length of password:
function getlength() {
  var passwordLength = window.prompt("How many characters would you like in your password? (Choose a number between 8-20)")

  if (passwordLength >= 8 && passwordLength <= 20) {
    return passwordLength;
  }

  else {
    window.confirm("Please enter a valid number.")
    return getlength();
  }
}

// set up function for password variables

function getUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Password function

function generatePassword() {
  var passwordNew = "";

  var length = getlength();

  // check prompt for variables
  var upperCheck = window.confirm("Would you like to use uppercase letters?");
  var lowerCheck = window.confirm("Would you like to use lowercase letters?");
  var numbersCheck = window.confirm("Would you like to use numbers letters?");
  var symbolsCheck = window.confirm("Would you like to use symbols letters?");

  // loops for randomizing all four variables until desired password length is reached
  while(passwordNew.length < length) {
    var randomize = Math.floor(Math.random() * 4);

    switch(randomize) {
      case(0):
        if (upperCheck) {
          passwordNew += getUpperCase();
        }
        break;
        case(1):
        if (lowerCheck) {
          passwordNew += getLowerCase();
        }
        break;
        case(2):
        if (numbersCheck) {
          passwordNew += getNumbers();
        } break;
        case(3):
        if (symbolsCheck) {
          passwordNew += getSymbols();
        }
        break;
    }
  }

// Print generated password
  console.log(passwordNew);
  return passwordNew;
}

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
