const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

// Check whether array is empty or not???
const arr = [];
if(arr.length === 0){
    console.log("Array is empty");
}

// Check whether Object is empty or not???

const emptyObj = {}

if(Object.keys(emptyObj).length ==0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??); null undefined

let val1;
//val1 = 5 ?? 10  // -> 5

//val1 = null ?? 10  // -> 10

//val1 = undefined ?? 15  //-> 15

val1 = null ?? 10 ?? 20

console.log(val1);


//Terniary operator
//Another form of if else statement

// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80")
