// Arrays & Objects

/*
Array
High-level, list-like object used to be traversed and mutated.
    - uses integers as element index
    - can be accessed by bracket notation [index] or dot notation (method)
    - arrays are zero index
        - first object at zero
        - last object at array array.length - 1

*/

//Create an array

let british = ["Rolls Royce", "Bentley", "Caterham", "Aston Martin"];
// console.log(british);

// british[0]; //stored in memory not where we can see
// console.log(british[0], british[1]);

// console.log(british[1]);

// console.log(british[british.length - 1]); //this will get the last value without knowing how many items are in the array

// // Array Methods

// console.log(british.length);

// british.push("Holly Shiftwell");

// british.splice(1, 0, "Mini");
// console.log(british);

// let bReturn = british.pop();
// console.log(bReturn);
// console.log(british);

console.log(british.unshift("Jaguar", "Holly Shiftwell")); //can add multiple items to the beginning of the array and returns the array length (number of items)
// console.log(british);

// console.log(british.shift()); //removes the first item in an array and returns the value
// console.log(british);

console.log(british.indexOf("Caterham", 4)); //searches an array for an index of an item/element, second param is used to tell it where to start searching

console.log(british.includes("Caterham")); //determines whether array has specific item/element - returns true/false. second param used to tell it where to start searching

// Advanced array manipulations  for in loop provides index; for of loop provides values

let german = ["BMW", "Mercedes", "Audi", "Porsche", "Alpina", "VW"];

// for (cars of german) {
//     console.log(cars);
// }

// array.forEach() runs a function for each element in an array

german.forEach(car => console.log(car));
// same as (function(car) {console.log(car)})

// array.map() --> transforms elements in original array by a callback function and returns a new, modified array

let germanUpper = german.map(car => car.toUpperCase());
console.log(germanUpper);

// array.filter() --> creates a new array with elements that pass the test in a given function

console.log(germanUpper.filter(car => car.startsWith("A")));


//Objects
/* Containers for values in a JSON format (JavaScript Object Notation)
most of the data is being passed around the web via JSON, some via Yaml and xml
    - exists as a string
    - has properties and methods
    - .property
    - .method()
    - associative arrays (each property is associated with a string value)
*/

// define JS object with an object literal

let car = {
    //key: value pair (properties) that are comma separated
    make: "Porsche",
    model: "911",
    country: "Germany",
    driver: "Bethany Hanna"
};

// Accessing object values

console.log(car.make); // access using key
console.log(car["model"]); //access using the object key
let returnKeys = Object.keys(car); //returns keys in an object
console.log(returnKeys)
console.table(car);

// Object property reassignment
car.make = "Maserati";
console.log(car.make);
car["model"] = "GranTurismo S";
console.log(car);

// Object Constructor

let client = new Object; //creates an empty object
console.log(client);

client.firstName = "Paul";
client.lastName = "Niemczyk";
client.birthYear = 1990;
console.log(client);

let manager = {
    firstName: "Brad",
    lastName: "Titus",
    birthYear: 1990,
    //1st way have to input the birthyear outside the object
    // setAge: function(birthYear){
    //     return 2021 - birthYear
    //2nd way have to call function outside of object still
    // setAge: function() {
    //     return 2021 - this.birthYear
    // }
    setAge: function() {
        this.age = 2021 - this.birthYear //this creates new 'age' property inside manager object with the value of the calculation committed in the function once it has been called.
    }
}

// manager.calcAge();
manager.setAge();
console.log(manager.age);

// let setAge = function () {

// }

// let setAge = () => //cannot use arrow functions inside of an object
//DRY = Do not Repeat Yourself
//this is in w3 schools and is used in functions, methods, objects, global use
//this is used to reference a property inside of an object or to an object


const movieChallenge = {
    name: "Practical Magic",
    runTime: 157,
    genre: "Drama",
    characters: [{
            actorName: "Sandra Bullock",
            actorAge: 57,
            actorItems: ["Speed", "28 Days", "Miss Congeniality", "While You Were Sleeping", "Divine Secrets of the Ya-Ya Sisterhood"]
        }, {
            actorName: "Nicole Kidman",
            actorAge: 54,
            actorItems: ["Days of Thunder", "Batman Forever", "Eyes Wide Shut", "Moulin Rouge!", "The Stepford Wives"]
        }, {
            actorName: "Stockard Channing",
            actorAge: 77,
            actorItems: ["Grease", "Without A Trace", "Must Love Dogs", "Life or Something Like It", "The Business of Strangers"]
        }, {
            actorName: "Dianne West",
            actorAge: 73,
            actorItems: ["Edward Scissorhands", "Bullets over Broadway", "The Birdcage", "The Horse Whisperer", "I Am Sam"]
        }]
        // Your code here
};

console.log(movieChallenge.characters[2].actorItems[2]);

/*Loops, Conditionals, and Functions Challenge
Challenge yourself by creating a callback function that detects whether a number is even, odd, or if it even is a number, and returns a value based on that information.

After you have implemented the number feature, create a loop that iterates from 0 to 10, and give the callback function the number the loop is currently on.

Hint: To help you see what comes back from the function, consider saving it in a variable and console.log it.

You will use the index.js file in the file directory to solve this challenge.

To test that your challenge meets the requirements, click on the ✓ on the left side panel to open up tests, and then click the run tests button.

To view the results of the test, click on the console window on the right or bottom section of the Replit editor.

Requirements
Here, you are given a boilerplate function called 'callback'.

Your procedure is to modify the function to take in a number.

When that number is even, the function should return 'the number is even'.
When that number is odd, the function should return 'the number is odd'.
When the number is neither even or odd, the function should return 'what is this?'.
Your index.js file contains a loop that utilizes this callback function.
*/
//my notes on this: will need to use % modulus 2 to determine if it is even or odd, looping through 0 - 10, must pass function the number it is on
//break it down - need a loop, need a function, need an if?

let callback = (num) => {
    if (typeof num != 'number') {
        return 'what is this?'
    } else if (num % 2 === 0) {
        return 'the number is even'
    } else { return 'the number is odd' }
}

for (let i = 0; i <= 10; i++) { callback(i) }