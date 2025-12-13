const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "value");   -> Old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Anotehr way to declear string

const gameName = new String ('hiteshhc')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,4)
console.log(newString)

//Slice
const anotherString = gameName.slice(1,5)
console.log(anotherString);

//Trim
const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim());

//Replace
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

//Include
console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

//split
const str = "hitesh-hc-com"
console.log(str.split('-'))