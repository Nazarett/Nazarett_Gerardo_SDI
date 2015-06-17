//Conditional Logic - else if

var kidHieght = 52;
var minHieght = 48;
var wParentHeight = 45; //the height of the kid with parent present


//if the child is old enough, print to the console " you can ride"
//if the kid is over 48 inches in height
if(kidHieght > minHieght){
    //code performed if condition is true
    console.log("You can ride the coaster");
}else if(kidHieght > wParentHeight){
    //code performes if condition is false
    console.log("You can ride, only with a parents present");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}

//Logical operators
var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget AND if our paycheck is over 300

if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone");
}else{
    console.log("No phone for you!!")
}

//Ternary Operator

var age = 11;
var book;

 //If the child is under 10, they get Green Eggs and Ham, otherwise they get time machine
//if(age <10){
    //book ="Green Eggs and Ham"
//}else{
    //book = "The time machine"
//}
//console.log(book)

//Optional way

book = age < 10 ? "Green Eggs and Ham" : "The Time Machine"
console.log(book)