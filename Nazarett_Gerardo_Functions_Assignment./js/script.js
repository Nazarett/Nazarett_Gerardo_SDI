/*
Gerardo D. Nazarett
 Scalable Data Infrastructures - Online
 C201506 Term
Functions Assignment
*/

//Variables
var myNum = prompt("Please choose your first \n number between 1 and 53"); //Variable with prompt to choose a number

//Functions
function numApproval(numSelected){

    if (numSelected  === 1) {
        numSelected = prompt("Invalid entry please try again");
    }
    console.log("Your first number is " + numSelected + ".")
}

//Code

numApproval(myNum);