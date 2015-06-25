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

function lotteryNum(min, max){

 var numOne = [];

 for (var a = 1; a < 54; a++){

  var random1 = Math.max(53);
  numOne[a] = Math.round(random1);
 }
 return numOne
}


//Code

firstNum =lotteryNum(1, 53)
alert("Your first number is " + firstNum )
