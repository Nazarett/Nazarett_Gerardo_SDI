//Circumference
//Calculate the circumference of a circle
var radius = 5 //Circumference radius
var Pi = 3.14 //Variable Pi and value
var calcCircumference = function(Pi, radius){ //Adding function
    var circumference = 2 * Pi * radius //Adding circumference formula
    return circumference; //Return value
}

var c = calcCircumference(3.14, 5) //Adding variable c with values

console.log(c)