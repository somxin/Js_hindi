function sayMyName(){
    console.log("HI")
    console.log("This is Sachix")
}
sayMyName()

//Printing the value
function addTwoNumbers1(number1,number2){
    console.log(number1 + number2)
}
addTwoNumbers1(3,5)

// returning the value
function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
    // return number1 + number2
}
const result = addTwoNumbers(3,5)

console.log("Result: ", result)


//check mark in if 
function loginUsermessage(){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUsermessage("Hitesh"))
console.log(loginUsermessage())

//Taking defult value
function loginUsermessage(username = "Sam"){
    return `${username} just logged in`
}

console.log(loginUsermessage("Hitesh"))
console.log(loginUsermessage())