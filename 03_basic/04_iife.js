// Immediately Invoked Function Expression (IIFE)

/*
//Normal Function
function chai(){
    console.log(`DB CONNECTED`)
}
chai()
*/

//IIFE

(function chai(){               //-> named IIFE
    console.log(`DB CONNECTED`)
}
)();

// As a arrow function

( () => {
    console.log(`DB CONNECTED TWO`);
})();

// as a parameter
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Hitesh")

