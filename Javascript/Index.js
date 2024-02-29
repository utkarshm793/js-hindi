"use script"// treat all js code as newer version

//alert( 3+3)  // we are using nodejs, not browser
// ECMA  standards of javascript - TC39 and MDN 


// number
// bigint
// string = ""
// boolean = true/false
// null = standalone value  (null is a bject)
// undefined = value not asigned
// symbol = unique

//

// console.log(typeof null);

//  ******CONVERSION*******

let score = 23

// console.log(typeof score);

let valueInNumber = Number(score)

// "33"= 33
// "33sf"= NaN

let loggedIn = 1
let checkBool = Boolean(loggedIn) // "" = FALSE, "DSD" = TRUE


// console.log(checkBool);

// *******OPERATIONS**********

let value = 45;
let negvalue = -value;
//console.log(negvalue); // -45
//console.log(2**3);// power of 2^3

// console.log(+true); // 1

//prefix and postfix
let a = 3;
const b = a++; // a=4, b=3

let s = 3;
const d= ++s; // s=4, d=4

// === it will check strictly, like data type also

// PRIMITIVE datatypes
// 7 types - Strings, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
// id != anotherId due to symbol data type



// REFERENCE TYPE OR NON- PRIMITIVE

// Arrays, Objects, Functions

const heros =  ["shaktiman","hanuman"]

// ***** STACK AND HEAP MEMORY *****

// Stack (Primitive), Heap (Non-Primitive)

// stack me copy hi milta h jabki heap me ak reference milta h 

let myName = "Utkarsh Mishra";
let myNewName = myName;
myNewName = "Utkarsh Pandit";

// console.log(myName);
// console.log(myNewName);

let user1 = {
    name: "Utk",
    age: 19
}

let user2 = user1;

user2.name = "mis";
// console.log(user1.name);
// console.log(user2.name);

// ******* STRINGS ********

const name1= "utkarsh"
let surName = "mishra"

// console.log(`my name is ${name1} ${surName}`)

const MyName = new String('adarsh') // it gives like an object a d a r s h 

// console.log(MyName[1])  // it gives (d) of adarsh
// console.log(MyName.__proto__); // ways to access the strings it gives  = {}

// console.log(MyName.charAt(5)); // it gives h 

// console.log(MyName.indexOf(`r`)); // it gives 3

const newString = `Hello_World`

// console.log(newString.replace('llo', 'bbo'));
// console.log(newString.includes('he')) // check availability


// ******** NUMBERS *********


const balance = 234;

// console.log(balance.toString()); // it will convert number data type to string data type

// console.log(balance.toFixed(2)); // it will give 234.00

const number3 = 100000000;

// console.log(number3.toLocaleString());

// ******** MATH LIBRARY *********


// console.log(Math.abs(-34)); // gives positive value
// console.log(Math.round(3.8)); //
// to get the upper value we should use ceil instead of round and to get the lower value we should use floor

// console.log(Math.floor(Math.random()*10) + 1)

const max = 20;
const min = 10;

// console.log(Math.floor(Math.random()*(max-min +1)) + min);

// ********* DATE AND TIME *********

let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let createADate = new Date(2024, 8, 7)
console.log(createADate.toDateString())

let myTimeStamp = Date.now();

console.log(createADate.getTime());

console.log("Todays final")
