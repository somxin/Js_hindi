// Note -> We can iterate on arrays, Objects and Strings 
// for of

//   ["", "", ""]  //-> string in Array
//   [{}, {}, {}]  //-> Object in Array

//For of loop in Array
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// Maps
// For of loop in map
const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

console.log(map);

for(const [key,value] of map){
    console.log(key, ':-', value);
}

for(const key of map){
    console.log(key);
}

//For of loop in Object

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

/*
for(const [key, value] of myObject){  //-> It will give error
    console.log(key, ':-', value);
}
*/

 