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
const d = ++s; // s=4, d=4

// === it will check strictly, like data type also

// PRIMITIVE datatypes
// 7 types - Strings, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
// id != anotherId due to symbol data type



// REFERENCE TYPE OR NON- PRIMITIVE

// Arrays, Objects, Functions

const heros = ["shaktiman", "hanuman"]

// ***** STACK AND HEAP MEMORY *****

// Stack (Primitive), Heap (Non-Primitive)

// stack me copy hi milta h jabki heap me ak reference milta h 

let myName = "Utkarsh Mishra";
let myNewName = myName;
myNewName = "Utkarsh Pandit";

// console.log(myName); // this will print utkarsh mishra
// console.log(myNewName); // this will print utkarsh pandit

let user1 = {
    name: "Utk",
    age: 19
}

let user2 = user1;

user2.name = "mis";
// console.log(user1.name);
// console.log(user2.name); // both will print the same thing

// ******* STRINGS ********

const name1 = "utkarsh"
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

const myArr = [1, 2, 3, true, null, "hello"]

const myArr2 = new Array(1, 4, 3, 5) // another way to create an array 

//     ARRAY METHODS

//  myArr.push(6)
// myArr.pop()

// console.log(myArr.includes(9)); // it gives false

const newArr = myArr.join() // it gives same as an array but the data type of this is a string

// slice and splice

const myn1 = myArr.slice(1, 4)
const myn2 = myArr.splice(1, 4)

// console.log(myn1) // it will give [2,3,true]
// console.log("a", myArr)
// console.log(myn2) // it will give [2,3,true,null]

const marvel_heros = ["IronMan", "Cap", "Thor"]
const dc_heros = ["superman", "batman", "wonderwomen"]

// console.log(marvel_heros.push(dc_heros))

const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros).  it will merge both arrays

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const checkArr = [1, 2, [3, 4, 5, [6, 7, 8]], [9, 10],]

// console.log(checkArr.flat(1)) //it removes the first bracket which inside the array

// console,log(Array.from("Utkarsh")) // it will make it array by taking its letters as an element

// console,log(Array.from({name: "Utkarsh"})) // it is a different case

// ********* OBJECTS - IMPORTANT TOPIC ************

// Singelton, object literals
// Object.create  // this is a constructor method

const mySym = Symbol("key1")

const userA = {

    name: "Utkarsh",
    "full name": "Utkarsh Mishra",
    [mySym]: "mykey1",
    age: 19,
    location: "gorakhpur"
}

// console.log(userA.age) == console.log(userA.["age"])

// console.log(userA.["full name"]) // full name only can be access by this method

// console.log(userA.[mySym]) // the way to access the symbol data type in object

// Object.freeze(userA) // it will freeze all the upcoming changes in the object

userA.greeting = function () {
    // console.log("Hello everyone")
}


userA.greeting2 = function () {
    // console.log(`Hello everyone, ${this.name}`)
}


// console.log(userA.greeting())
// console.log(userA.greeting2())

// const tinderUser = new Object() // one way to create an object, it is a singelton object

const tinderUser = {} //  this is a non singelton object 

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

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

const obj3 = { ...obj1, ...obj2 } // this is the another way to add an object
const obj4 = Object.assign({}, obj1, obj2) // it is the main way to add an object 
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
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

// console.log(tinderUser.hasOwnProprty('isLoggedIn'));

//.  ******* DE-STRUCTURING *********

const course = {

    coursename: "javascript",
    price: 999
}
// course.coursename // to call
const { coursename: name3 } = course

// console.log(name3)

//  ***** FUNCTIONS *******

function printName() {
    console.log("utkarsh mishra")
}

// printName() this is the way to call te funcyion 

// function addnum(num1,num2){
//    console.log(num1 + num2)
// }
// addnum(7,9)

function addnum(num1, num2) {
    return num1 + num2
}
const result1 = addnum(7, 8)
//  console.log(`result is ${result1}`)

function logginUsermsg(username) {
    if (!username) { // !username => (username === undefined)
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(logginUsermsg("utkarsh mishra"))
//  console.log(logginUsermsg()) it will print the statement given in the if condition


function calculateCart(...num) {
    return num
}

// console.log(calculateCart(200,300,400)) // it will give an array of [200,300,400] due to the (...num) 


function calculateCart(val1, val2, ...num) {
    return num
}

// console.log(calculateCart(200,300,400,500)) // it will return 400,500 because we have return num in the function

const myNewArray = [1, 2, 3]

function returnGivenValue(getarray) {
    return getarray[1]
}
// returnGivenValue(myNewArray) // this will print tyhe second value of the array


// ****** SCOPE *******


let u = 300
var t = 400


if (1) {
    let u = 30
    var t = 40
    const k = 500
    // console.log(`Inner let = ${u}`)

}

// console.log("outer let", u)

function one() {
    const username = "utkarsh"
    function two() {
        const website = "mine"
        // console.log(username)
    }
    // console.log(website) // this gives an error because the oter function can't call the inner elements 
    two()
}
one()


// ++++++++++++ INTERESTING  +++++++++++++



// $$$$$$$$$$$$$  DOM MANIPULATION  $$$$$$$$$$$$$$

// console.dir(document)

// document.getElementById('title') return the complete value 
// document.getElementById('title').className
// getAttribute, setAttribute

// forEach padhna h 

// *************** HIGH ORDEER LOOPS *****************

// forEach loop

const coding = ["js","cpp",'python']
// coding.forEach(function (item) {   // item will get the elements from the array
//     console.log(item)

// })

// coding.forEach( (item) => {
//     console.log(item)
// });

const printMe = (item, index, arr)=>{
    console.log(item, index, arr)
}

// coding.forEach(printMe)

const myCoding = [
    {
languageName: "jsavascript",
languageFileName: "java"

},

{
    languageName: "python",
    languageFileName: "py"
    
    }
]

// myCoding.forEach((value)=>{
//     console.log(value.languageFileName)
// })

// ***** FILTER,  MAP , REDUCE ********

// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values)

const  numBers = [1,2,3,4,5,6,7,8]

// const newNums = numBers.filter( (val) => val > 3)

// const newNums = numBers.filter( (val)=> {
//     return val >3                                 // always use return keyword during use of parenthesis {} brackets because it creates a scope     
// })

// console.log(newNums);

const myNums = [ ]

// numBers.forEach((nval)=>{
//     if (nval > 3) {
//         myNums.push(nval)
        
//     }
// })

























































