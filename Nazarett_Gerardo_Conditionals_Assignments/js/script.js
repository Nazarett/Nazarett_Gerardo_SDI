//Gerardo D. Nazarett
//June 06 2015
//Conditionals Assignments

alert("We are calculating the average height of your family"); //Alert to inform user what are we doing
var momHeight = prompt("What is your mother's height in ft?"); //Prompt for mother's height
    console.log(momHeight);
        (momHeight > 0) ? alert("Thank you"):alert("Invalid entry"); //Example of ternary operator
if(momHeight > 0){ //If  mother's height larger than zero continue
    console.log(momHeight)
    var dadHeight = prompt("What is you father's height in ft");
    console.log(dadHeight);
    if(dadHeight > 0){alert("Thank you")
        console.log(dadHeight)
        var myHeight = prompt("What is your height");
        console.log(myHeight)
        if(myHeight > 0){alert("Thank you")
            console.log(myHeight)
        }else{alert("Invalid entry \nPlease restart")

        }


    }else{alert("Invalid entry \nPlease restart")

    }
}else{ alert("Please restart")

}
averageHeight = (momHeight) + (dadHeight) + (myHeight);
console.log(averageHeight)
var result = ("Your family average height is " + averageHeight + "ft")
alert(result)





