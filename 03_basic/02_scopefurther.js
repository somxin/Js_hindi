function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);  // -> Error because we are tryint to acces outside the block

    two()

}

one()

if(true){
     const username = "hitesh"
     if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
     }
     //console.log(website);  // -> error bcz beyond scope
}

//console.log(username)  // -> error bcz beyond scope

// ++++++++++ Interesting +++++++++++ //
console.log(addone(5))   // valid

function addone(num){
    return num + 1
}
// console.log(addone(5))  // valid


// Function and sometime we call it expression, Here Variable holds the value of function
const addTwo = function(num){
    return num + 2
}
addTwo(5)

