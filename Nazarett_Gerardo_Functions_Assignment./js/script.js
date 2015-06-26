/*
Gerardo D. Nazarett
 Scalable Data Infrastructures - Online
 C201506 Term
Functions Assignment
*/

//Variables

//var tickets = prompt ("What numbers would you like to know \nPowerball or Florida lottery \nPlease type your choice"); //variable with prompt

var myLotNum;

var myPowerNum;

//Functions

function selectionValidationOne(lotteryOne) { //Starting function

 var clicks = 1; //variable for clicks

 while (lotteryOne === "") { //Loop and condition

  lotteryOne = prompt("Invalid entry."); //Prompt message when leaving blank space

  clicks++;

  if(clicks === 3){ // clicks conditions

   console.log("Enough times leaving blanks."); //message for limit of clicking
   break; // break will stop infinite loop

  }

 }

return lotteryOne; //returning values of lotteryOne back to code

}

//Lottery function assuming user choose Florida Lottery

function lotteryNum (min, max){ //Function for florida lottery numbers


 var randomNum = Math.random() * (max - min) + min; //Variable for random numbers with math formula for random numbers

randomNum = Math.round(randomNum); //Formula to round up number with no decimals

 return randomNum; //return value to code

}/

//Lottery function assuming user choose Powerball

function powerNum (min, max){ //Function for Powerball numbers

 var differentNum = Math.random() * (max - min) + min; //Variable for random numbers with math formula for random numbers

 differentNum = Math.round(differentNum); //Formula to round up number with no decimals

 return differentNum; //return value to code
}
//Code
//tickets = selectionValidationOne(tickets);
//console.log("Congratulations you choose " + tickets + " .") //Message leting user kow his selection

//Results of random numbers for Florida lottery
 myLotNum = lotteryNum(1, 13);
console.log("Your first Florida lottery number is " + myLotNum);
myLotNum = lotteryNum(14, 23);
console.log("Your second Florida lottery number is " +myLotNum);
myLotNum = lotteryNum(24, 33);
console.log("Your third Florida lottery number is " + myLotNum);
myLotNum = lotteryNum(36, 43);
console.log("Your fourth Florida lottery number is " +myLotNum);
myLotNum = lotteryNum(44, 53);
console.log("Your fifth Florida lottery number is " +myLotNum);


//Results of random numbers for Powerball
myPowerNum = powerNum(1, 19);
console.log("Your first Powerball lottery number is " + myPowerNum);
myPowerNum = powerNum(20, 29);
console.log("Your second Powerball lottery number is " +myPowerNum);
myPowerNum = powerNum(30, 39);
console.log("Your third Powerball lottery number is " +myPowerNum);
myPowerNum = powerNum(40, 49);
console.log("Your fourth Powerball lottery number is " +myPowerNum);
myPowerNum = powerNum(50, 59);
console.log("Your fifth Powerball lottery number is " +myPowerNum);
myPowerNum = powerNum(1, 35);
console.log("Your Powerball number is " +myPowerNum);
