//Expresions

var a = 2;
var b;
b = a + 3;
console.log(a);

//Age Example

var yearBorn = 1979;
var age = 2015 - yearBorn;
console.log(age)

//Modulo

var remainder = 32 % 10
console.log(remainder)

//The Order Operations PEMDAS

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// average is the sum of items divided by num of items.

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average)

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter)

//Expresions with Array

var orangeBins = [234, 567, 883];
var total = orangeBins[0] + orangeBins[1] + orangeBins[2]
console.log(total)

//Concatenating

var firstName = "Gerardo";
var lastName = "Nazarett";
var fullName = firstName +" "+ lastName
console.log(fullName)

var a = "6";
var b = "7";
var result = a + b
console.log(result)

//Casting

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result)

var areCode = 407;
var firstPart = 203;
var secondPart = 4529
var phoneNo = "("+String(areCode)+")" + String(firstPart)+ "-"+ String(secondPart);
console.log(phoneNo)

//Expressions

var a = 3;
a += 4; //a = a + 4 (+,-,/,*)
console.log(a)