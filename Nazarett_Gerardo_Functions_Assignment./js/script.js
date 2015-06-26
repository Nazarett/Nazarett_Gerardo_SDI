/*
Gerardo D. Nazarett
 Scalable Data Infrastructures - Online
 C201506 Term
Functions Assignment
*/

//Variables
alert ("Please choose between Powerball or Florida Lottery");

var Tickets = prompt ("Would you like to play \nPowerball or Florida lottery");


//Functions

function selectionValidationOne(lotteryOne) {

 var click = 1;

 while (lotteryOne === "") {

  lotteryOne = prompt("Invalid entry");

 }

 console.log("You choose " + lotteryOne)
}


//Code
selectionValidationOne(Tickets);

