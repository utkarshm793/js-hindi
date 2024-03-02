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
let checkBool = Boolean(loggedIn) // it gives true // "" = FALSE, "DSD" = TRUE


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

// console.log(number3.toLocaleString()); // 1,00,00,000

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
// console.log(createADate.toDateString())

let myTimeStamp = Date.now();

// console.log(createADate.getTime());

let myDate1 = createADate.toLocaleString('default', {

weekday: "long",

})

// ********** ARRAYS **********

const myArr = [1,2,3,true,null,"hello"]

 const myArr2 = new Array(1,4,3,5) // another way to create an array 

 //     ARRAY METHODS

//  myArr.push(6)
// myArr.pop()

// console.log(myArr.includes(9)); // it gives false

const newArr = myArr.join() // it gives same as an array but the data type of this is a string

// slice and splice

const myn1 = myArr.slice(1,4)
const myn2 = myArr.splice(1,4)

// console.log(myn1) // it will give [2,3,true]
// console.log("a", myArr)
// console.log(myn2) // it will give [2,3,true,null]

const marvel_heros = ["IronMan","Cap", "Thor" ]
const dc_heros = ["superman", "batman","wonderwomen"]

// console.log(marvel_heros.push(dc_heros))

const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros).  it will merge both arrays
 
const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros)

const checkArr = [1,2,[3,4,5,[6,7,8]],[9,10],]

// console.log(checkArr.flat(1)) //it removes the first bracket which inside the array

// console,log(Array.from("Utkarsh")) // it will make it array by taking its letters as an element

// console,log(Array.from({name: "Utkarsh"})) // it is a different case

// ********* OBJECTS - IMPORTANT TOPIC ************

// Singelton, object literals
// Object.creae  // this is a constructor method

const mySym = Symbol("key1")

const userA = {

name: "Utkarsh",
"full name": "Utkarsh Mishra",
[mySym]: "mykey1",
age: 19,
 location: "gorakhpur"
}

// console.log(userA.age) == console.log(userA.["age"])

// console.log(userA.["full name"]) // only can be access by this method

// console.log(userA.[mySym]) // the way to access the symbol data type in object

// Object.freeze(userA) // it will freeze all the upcoming changes in the object

userA.greeting = function(){
    // console.log("Hello everyone")
}


userA.greeting2 = function(){
    // console.log(`Hello everyone, ${this.name}`)
}


// console.log(userA.greeting())
// console.log(userA.greeting2())

// const tinderUser = new Object() // one way to create an object, it is a singelton object

const tinderUser ={} //  this is a non singelton object 
 
tinderUser.id = "2345rfgh"
tinderUser.name = "ukarsh mishra"
tinderUser.isLoggesIn = false

const regularUser = {
    email: "utkarshm793",
    fullname: {
        userFullName: {
            firstName: "utkarsh",
            lastName: "mishra"
        }

    }
}

// console.log(regularUser.fullname)  // to access things in the obect

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1,...obj2} // this is the another way to add an object
const obj4 = Object.assign({},obj1, obj2) // it is the main way to add an object 
// console.log(obj3)

const userArr = [
    {
        name: "utk",
        email: "utkm793@gmail"
    },
    {
        name: "utk1",
        email: "1utkm793@gmail"
    },
    {
        name: "utk2",
        email: "2utkm793@gmail"
    }
]

// console.log(userArr[1].name)gcfgtfcg

console.log(Object.keys(tinderUser))































































