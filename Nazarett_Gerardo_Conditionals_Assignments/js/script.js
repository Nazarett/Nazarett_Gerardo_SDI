//Gerardo D. Nazarett
//June 06 2015
//Conditionals Assignments

alert("We are calculating the average height of your family"); //Alert to inform user what are we doing
var momHeight = prompt("What is your mother's height in ft?"); //Prompt for mother's height
    console.log(momHeight);
        (momHeight > 0) ? alert("Thank you"):alert("Invalid entry"); //Example of ternary operator
if(momHeight > 0 && momHeight != 0){ //If  mother's height larger than zero continue
    console.log(momHeight)
    var dadHeight = prompt("What is you father's height in ft");//Prompt father's height
    console.log(dadHeight);
    if(dadHeight > 0){alert("Thank you") //Thank for proper entry
        console.log(dadHeight)
        var myHeight = prompt("What is your height");//Prompt your height
        console.log(myHeight)
        if(myHeight > 0){alert("Thank you") //Thanks for proper entry
            console.log(myHeight)
        }else{alert("Invalid entry \nPlease restart") //Invalid entry

        }


    }else{alert("Invalid entry \nPlease restart") //Invalid entry

    }
}else{ alert("Please restart") //Invalid entry

}
var averageHeight = (Number(momHeight) + Number(dadHeight) + Number(myHeight)) / 3; //Calculating average
console.log(averageHeight)
var result = ("Your family average height is " + averageHeight + "ft") //Final result
alert(result) //Average of family height
//My calculation on the family average height
//Mother 5 ft
//Father 6.9 ft
//Mine 5.5 ft
//The average height for the family was 5.8 ft





