//Circumference
//Calculate the circumference of a circle

var calcCircumference = function(Pi, radius){ //Adding function
    var circumference = 2 * Pi * radius
    return circumference;
}

var c = calcCircumference(3.14, 5)

console.log(c)