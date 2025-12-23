// Rest Operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,400,500,2000,1))



function calculateCartPrice1(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice1(200,400,500,2000,1))

//How to handle/pass object in a function

const user = {
    username: "hitesh",
    price: 1199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} ans price is ${anyObject.price}`);
}
handleObject(user);

// How to pass array in a function

const myNewArray = [200,400,1000,600]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))