/*
    Gerardo D. Nazarett
    SDI 1506
    GoToTraining Session
    Variables, prompts, and outputs
 */


//alert("java script works")


// Variables
var myFirstName;
var myLastName;
var myAge;
var isEmployed   = true;

// prompts
myFirstName = prompt("Enter your first name");
myLastName = prompt ("Enter your last name");
myAge = prompt ("Enter your age")

// casting the string to a number
myAge = Number(myAge);


//outputs
console.log("Hello, " + myFirstName + " " + myLastName + ".");
console.log("It Is " + isEmployed + " that you are employed");
console.log("You will be " + (myAge + 2) + " in two years");




// PEMDAS
// Parentheses, exponents, multiplicacion, division, addition, substraction