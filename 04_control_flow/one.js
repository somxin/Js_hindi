// if

// comparision operator
// <, >, <=, >=, ==, !=, ===

/*
const isUserLoggedIn = true
const temperature =  41

if(temperature === 41){
    console.log("less than 50");
}
else{
    console.log("temperature is greater then 50");
}
console.log("Exexuted");
*/


/*
// About scope  -> Explict scope

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
  //console.log(`User power: ${power}`);    //-> It will give error bcz score is out of block scope
*/

/*

//Short hand notation for if condition
const balance = 1000
if(balance > 500) console.log("test");
// Recomdation - Do not use it

*/
/*
//Nesting

const balance = 1000
if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const logggedInFromEmail = true


if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || logggedInFromEmail){
    console.log("User logged in");
}



