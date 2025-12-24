// Use of This
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this) //->It tell about current context
    }
}

 user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this);

/*
//Function
function chai(){
    let username = "hitesh"
    console.log(this.username);   // -> undefined
}
chai()

const chai1 = function() {
    let username = "hitsh"
    console.log(this.username)  // -> undefined
}

chai1()
*/

/*
// Making of arrow function, remove function keyword and ad arrow(=>) just after paranthesis
const chai =  () => {
    let username = "Hitesh"
    console.log(this.username)
}

chai()
*/

// Arror Function
/*
// basic arrow function OR Explixt return 
// -> we have to write returnn keyword when curly brackets are used,//{}//

const addTwo = (num1,num2) =>{
 return num1+num2
}

console.log(addTwo(3,4))
*/

// Implict return
// No need of writing return keyword when paranthesis//()// is used 

// const addTwo = (num1,num2) => num1+num2 OR
const addTwo = (num1,num2) => (num1+num2)


console.log(addTwo(3,4))


