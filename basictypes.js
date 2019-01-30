//variables
//boolean
var flag = false;
console.log("The value assigned to flag is: " + flag);
//numbers
var decimal = 20;
console.log("The value assigned to number is: " + decimal);
var hex = 0xf00d;
console.log("The value assigned to number is: " + hex);
var binary = 10;
console.log("The value assigned to number is: " + binary);
var octal = 484;
console.log("The value assigned to number is: " + octal);
//string
var color = "blue";
console.log("The value assigned to number is: " + color);
color = 'red';
console.log("The value assigned to number is: " + color);
var fullName = "Bob Bobbington";
console.log("The value assigned to number is: " + fullName);
var age = 37;
console.log("The value assigned to number is: " + age);
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
console.log("The value assigned to number is: " + sentence);
//array
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("The value assigned to number is: " + list);
} //for
//tuple 
var x;
x = ["hello", 10];
console.log("Tuple example: " + x[0].substr(1));
//enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log("Enum: Value of colorName is: " + colorName);
console.log("Enum: Value of c is: " + c);
console.log("Enum: Name of c is: " + Color[c]);
//any 
var notSure = 4;
notSure = "maybe a string instead";
console.log("Value is a string: " + notSure + ".");
notSure = false;
console.log("Now value is a boolean: " + notSure + ".");
//any array 
var listany = [1, true, "free"];
for (var i = 0; i < listany.length; i++) {
    console.log("Before: Entry " + (i + 1) + " is: " + listany[i] + ".");
}
listany[1] = 100;
for (var i = 0; i < listany.length; i++) {
    console.log("After: Entry " + (i + 1) + " is: " + listany[i] + ".");
}
