//variables
//boolean
let flag: boolean = false;
console.log("The value assigned to flag is: " + flag);
//numbers
let decimal: number = 20;
console.log("The value assigned to number is: " + decimal);
let hex: number = 0xf00d;
console.log("The value assigned to number is: " + hex);
let binary: number = 0b1010;
console.log("The value assigned to number is: " + binary);
let octal: number = 0o744;
console.log("The value assigned to number is: " + octal);
//string
let color: string = "blue";
console.log("The value assigned to number is: " + color);
color = 'red';
console.log("The value assigned to number is: " + color);
let fullName: string = `Bob Bobbington`;
console.log("The value assigned to number is: " + fullName);
let age: number = 37;
console.log("The value assigned to number is: " + age);
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;
console.log("The value assigned to number is: " + sentence);
//array
let list: number[] = [1, 2, 3];
for(let i= 0; i<list.length; i++)
{
    console.log("The value assigned to number is: " + list);
}//for
//tuple 
let x: [string, number];
 x = ["hello", 10]; 
 console.log("Tuple example: "+x[0].substr(1));
 //enum 
 enum Color {Red = 1, Green, Blue} 
 let colorName: string = Color[2]; 
 let c: Color = Color.Green; 
 console.log("Enum: Value of colorName is: "+colorName);
  console.log("Enum: Value of c is: "+c); 
  console.log("Enum: Name of c is: " + Color[c]);
//any 
let notSure: any = 4; 
notSure = "maybe a string instead"; 
console.log("Value is a string: "+notSure+"."); 
notSure = false; 
console.log("Now value is a boolean: "+notSure+".");
//any array 
let listany: any[] = [1, true, "free"];
 for(let i = 0; i < listany.length;i++)
 { 
     console.log("Before: Entry "+(i+1)+" is: "+listany[i]+".");
 }
listany[1] = 100; 
for(let i = 0; i < listany.length;i++)
{
     console.log("After: Entry "+(i+1)+" is: "+listany[i]+".");
}


