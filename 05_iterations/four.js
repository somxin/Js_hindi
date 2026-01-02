// for in 

const myObject = {
   js: 'javascript',
   cpp: 'C++',
   rb: 'ruby',
   swift: "swift by apple" 
}

for(const key in myObject){
    console.log(key);
}

for(const key in myObject){
    console.log(`${key} shortcut for ${myObject[key]}`);
}

// for in loop in Array

const programming = ['js','rb','py','java', 'cpp'];

for(const key in programming){
    console.log(key);
}

for(const key in programming){
    console.log(programming[key]);
}

// map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

/*
// map is not iterative 'for' for in loop
for(const key in map){
    console.log(key);
}
*/

