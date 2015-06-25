/*
Gerardo D. Nazarett
 Scalable Data Infrastructures - Online
 C201506 Term
Functions Assignment
*/

//Variables
var firstNum;
var secondNum
var thirdNum
var fourthNum
var fifthNum

//Functions

function lotteryNumOne (max, min, num){

 var arrayOne = [];

 for (var a = 1; a < num; a++) {

  var randomOne = Math.random() * (max - min) + min;
  arrayOne[a] = Math.round(randomOne);
 }

 return arrayOne;
}


//Code
firstNum = lotteryNumOne (1, 53, 2);

alert("Your first number is " + firstNum);

