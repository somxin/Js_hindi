const coding = ["js", "ruby", "java", "python", "cpp"]

// we will write call back function in forEach

// coding.forEach( function greet(){} )

// no name for call back function -> We will remove greet


coding.forEach( function (val){    // This val bring each element of array in function
    console.log(val);           // Do whatever you want to do with that element
} )


// With the help of arrow function
coding.forEach( (item) => {
    console.log(item);
})
// Another important point
coding.forEach( (item, index, arr) => {   //-> It has access of item, index and whole array
    console.log(item, index, arr);
} )


// With the help of another function

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);


// Array of Objects
// *****Very Important*****//
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },

]

myCoding.forEach( (item) => {
 console.log(item.languageName);
})

 

