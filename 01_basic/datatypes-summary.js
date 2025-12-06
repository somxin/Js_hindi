//primitive
// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId) // these 2 are not equal
console.log(id)             // Symbol(123)
console.log(anotherId)     //  Symbol(123)

//const bigNumber = 3456789876n


// Reference (Non primitive)
// Array, Objects , Functions

const heros = ["Shaktiman","naagraj","doga"];

let myObj = {
    name:"hitesh",
    age:22,
    gender:"M"
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);



//****************Notes***************/
/*
* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/