// Stack , Heap
//Stack(Primitive)
// Heap(Non-Primitive)

//Stack
let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename // copy
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

//Heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log(userOne.email)

let userTwo = userOne //By Reference
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


