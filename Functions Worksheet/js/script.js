//Circumference
//Calculate the circumference of a circle
var radius = 5; //Variable radius and value
var Pi = 3.14; //Variable Pi and value
var calcCircumference = function(Pi, radius){ //Function for circumference
    var circumference = 2 * Pi * radius; //Adding circumference formula
    return circumference; //Return value
}

var c = calcCircumference(3.14, 5); //Adding variable c with values

console.log("The circumference of the circle is " + c); //Console log plus message

//Stung!

var camelWeight = 720; //Camel weight
var stingsPerLbs = 8.666666667; // Stings per pound
var calcCamelStings = function(camelWeight, stingsPerLbs){ //Function for camel stings
    var camelStings = camelWeight * stingsPerLbs; //Camel sting formula
    return camelStings; //Return value

}

var s = calcCamelStings(720, 8.666666667); //Adding variable s with values
console.log("It takes " + c + "bee stings to kill this animal. "); //Console log plus message