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






