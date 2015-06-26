/*
Gerardo D. Nazarett
 Scalable Data Infrastructures - Online
 C201506 Term
Functions Assignment
*/

//Variables
alert ("Please choose between Powerball or Florida Lottery");

var tickets = prompt ("Would you like to play \nPowerball or Florida lottery");


//Functions

function selectionValidationOne(lotteryOne) {

 var clicks = 1;

 while (lotteryOne === "") {

  lotteryOne = prompt("Invalid entry.");

  clicks++;

  if(clicks === 3){

   console.log("Enough times leaving blanks.")
   break;

  }

 }

return lotteryOne;
}


//Code
tickets = selectionValidationOne(tickets);
console.log("Congratulations you choose " + tickets + " .")
