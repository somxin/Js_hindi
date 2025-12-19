// singleton


// object literals
const mySym = Symbol("key1") // Symbol

const Jsuser = {
    name: "Hitesh",
    "full name" : "Hitesh Choudhary",
    [mySym] : "mykey1", //Symbol act as a key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
/*
console.log(Jsuser.email)
console.log(Jsuser["email"])


//console.log(Jsuser.full name)
console.log(Jsuser["full name"])


console.log(Jsuser[mySym])
console.log(typeof Jsuser[mySym])

// update Object
Jsuser.email = "hitesh@chatgpt.com"

// lock object
// Object.freeze(Jsuser) // After this changes will not propogate
Jsuser.email = "hitesh@microsoft.com"
console.log(Jsuser["email"])

console.log(Jsuser)

*/

Jsuser.greeting = function(){
    console.log("Hello JS user")
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
