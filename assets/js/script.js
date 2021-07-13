// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* this function returns a random integer, to be used to select a character for the password
inspired from the example at codegrepper.com, written by Disturbed Duck */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this function is called by the writePassword function when the Generate Password button is clicked
function generatePassword(){
  // decided to use let instead of var to reduce the scope of these arrays and variables
  let passwordLength = 0;
  let specialCharacters = "!@#$%&*()";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numericCharacters = "1234567890";
  let useSpecialChar = false;
  let useUpperCase = false;
  let useLowerCase = false;
  let useNum = false;
  let possibleChar = ""; 
  let criteria = 0;
  let result = "";
  let guaranteedCharacters = "";

  // this loop will prompt the user for a password length, and will exit when the passwordLength is between 8 and 128
  do{
  passwordLength = Number( window.prompt("Please enter a password length between 8 and 128", ""));
  // if the password length is less than 8 or greater than 128, display a warning that the length is wrong
  // use isNaN to check that there is a number being used, exit if not

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128");
    return;
  } else if (Number.isNaN(passwordLength)){
    window.alert("A number must be entered");
    return;
  };
  // check to see how randomInteger works, remember to remove later
  // console.log(randomInteger(8, passwordLength));

  } while(passwordLength < 8 || passwordLength > 128);

  // This creates a prompt asking the user whether to use uppercase letters and returns a true or false
  useUpperCase = window.confirm("Would you like to use Uppercase Letters?");
  
  // This creates a prompt asking the user whether to use lowercase letters and returns a true or false
  useLowerCase = window.confirm("Would you like to use Lowercase Letters?");
  
  // This creates a prompt asking the user whether to use special letters and returns a true or false
  useSpecialChar = window.confirm("Would you like to use Special Characters?");

  // This creates a prompt asking the user whether to use numbers and returns a true or false
  useNum = window.confirm("Would you like to use numbers?");
  
  // Check to make sure that at least 1 criteria has been selected

  if (useUpperCase){
    criteria++;
    possibleChar = possibleChar.concat(upperCase);
    guaranteedCharacters = guaranteedCharacters.concat(upperCase.charAt(randomInteger(1, upperCase.length)));
  };
  if (useLowerCase){
    criteria++;
    possibleChar = possibleChar.concat(lowerCase);
    guaranteedCharacters = guaranteedCharacters.concat(lowerCase.charAt(randomInteger(1, lowerCase.length)));
  };
  if (useSpecialChar){
    criteria++;
    possibleChar = possibleChar.concat(specialCharacters);
    guaranteedCharacters = guaranteedCharacters.concat(specialCharacters.charAt(randomInteger(1, specialCharacters.length)));
  };
  if (useNum){
    criteria++;
    possibleChar = possibleChar.concat(numericCharacters);
    guaranteedCharacters = guaranteedCharacters.concat(numericCharacters.charAt(randomInteger(1, numericCharacters.length)));
  };

  if (criteria === 0){
    window.alert("At least 1 password criteria must be selected")
    return;
  };

  // this adds the guaranteed characters to the final password
  result = result.concat(guaranteedCharacters);

  /* pseudocode for creating the password:
  concat the character strings together into a string of all possible characters
  for i=criteria and i<=passwordLength, i++{
    randomly determine the index number using the length of the allChar string
    password.push(allChar.charAt(index));
  }*/

  for(var i=criteria;i<passwordLength;i++){
    result = result.concat(possibleChar.charAt(randomInteger(1, possibleChar.length)));
  };
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
