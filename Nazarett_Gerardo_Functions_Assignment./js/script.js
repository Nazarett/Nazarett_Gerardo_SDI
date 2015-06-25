/*
Gerardo D. Nazarett
 Scalable Data Infrastructures - Online
 C201506 Term
Functions Assignment
*/

//Variables
var myFirstNum = prompt("Please choose your first \nnumber between 1 and 53"); //Variable with prompt to choose a number

//Functions
function numApproval(num1Selected){

    var click = 1

    while (num1Selected === "" ) {

        num1Selected = prompt("Invalid entry please try again");

        click++;

        if(click === 3){

            console.log("You maxed out attempts")
            break;

        }
    }

    console.log("Your first number is " + num1Selected + ".")
}

//Code

numApproval(myFirstNum);