/*
let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)
*/

if(true){
let a = 10
const b = 20
var c = 30
}

// console.log(a)
// console.log(b)
console.log(c)


let x = 300

if(true){
    let x = 10
    const y = 20
    console.log("INNER: ", x)     // Block Variable
}

console.log(x)   // Global variable