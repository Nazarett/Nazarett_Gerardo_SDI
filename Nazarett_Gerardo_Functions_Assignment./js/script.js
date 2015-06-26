/*
Gerardo D. Nazarett
 Scalable Data Infrastructures - Online
 C201506 Term
Functions Assignment
*/

//Variables
//alert ("Welcome, ready to play Powerball or Florida Lottery"); //Alert to welcome user and giving him information for whats next

//var tickets = prompt ("Would you like to play \nPowerball or Florida lottery \nPlease type your answer"); //variable with prompt

var myLotNum;

//Functions

function selectionValidationOne(lotteryOne) { //Starting function

 var clicks = 1; //variable for clicks

 while (lotteryOne === "") { //Loop and condition

  lotteryOne = prompt("Invalid entry."); //Prompt message when leaving blank space

  clicks++;

  if(clicks === 3){ // clicks conditions

   console.log("Enough times leaving blanks.") //message for limit of clicking
   break; // break will stop infinite loop

  }

 }

return lotteryOne; //returning values of lotteryOne back to code

}

//Lottery function assuming user choose Florida Lottery

function lotteryNum (min, max){


 var randomNum = Math.random() * (max -min) + min;

randomNum = Math.round(randomNum);

 return randomNum;

}


//Code
//tickets = selectionValidationOne(tickets);
//console.log("Congratulations you choose " + tickets + " .") //Message leting user kow his selection
 myLotNum = lotteryNum(1, 13);
console.log(myLotNum);
myLotNum = lotteryNum(14, 23);
console.log(myLotNum);
myLotNum = lotteryNum(24, 33);
console.log(myLotNum);
myLotNum = lotteryNum(36, 43);
console.log(myLotNum);
myLotNum = lotteryNum(44, 53);
console.log(myLotNum);
