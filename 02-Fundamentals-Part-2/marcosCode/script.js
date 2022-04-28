'use strict';

// let hasDriverLicense = false;

// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("I can drive ;D");


/*
//------------------------------------------------------------------------------

// FUNCTIONS

// BASIC FUNCTIONS BELOW
function logger() {
    console.log("This is a function!");
}

// calling /running / invoking function
logger()
logger()
logger()


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 1);
const applejuice = fruitProcessor(2, 2);
console.log(applejuice);


// FUNCTIONS & EXPRESSIONS BELOW

Generic function, will work with any number we pass in
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);


ASSIGN FUNCTION TO A VARIABLE (FUNCTION EXPRESSIONS)
const calcAge2 = function (birthYear) {
    return 2037 - (birthYear);
}

const age2 = calcAge2(1999);
console.log(age1, age2);






// // ARROW FUNCTION
// return statemetns automatically print the return statement
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

// Have to return statement because it isnt 1 line of code like ^
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;

    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1999, "Marcos"));
console.log(yearsUntilRetirement(1991, "Jonas"));
*/




// FUNCTIONS WITHIN A FUNCTION

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


//------------------------------------------------------------------------------

// FUNCTIONS REVIEW
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;

//     return `${firstName} retires in ${retirement} years.`;
// }


// ---------------------------------------------------------------------------------

/*
// ARRAYS

// Basic Arrays:

// const friends = ['Marcos', 'Ysenia', 'Jeremiah']; // literal syntax, more common way
// console.log(friends);
// console.log(" ");


// const years = new Array(1991, 1995, 2000, 2021); // other way to declare array

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Precious";
// console.log(friends);


// METHOD ARRAYS


const friends = ['Marcos', 'Ysenia', 'Jeremiah'];

// Add elements
friends.push('Jay');
console.log(friends);
friends.unshift("Precious"); // UNSHIFT adds element to the front of the array
console.log(friends);

// new array is precious, marcos, ysenia, jeremiah, jay^

// Remove elements
friends.pop(); // remove the last element of the array
console.log(friends);

friends.shift(); // remove the first element of the array (which would be precious)
console.log(friends);

// Get index of element Marcos
console.log("Index for Marcos is at, ", friends.indexOf('Marcos'));

friends.push(21);

// Boolean checking
console.log(friends.includes('Marcos')); // true
console.log(friends.includes('Pauline')); // false
console.log(friends.includes('23')); // false because '23' is a string
console.log(friends.includes(21)); // true because its a int

if (friends.includes('Marcos')) {
    console.log('You have a friend called Marcos');
}

*/

// ---------------------------------------------------------------------------------

// OBJECTS DATA STRUCTURE
/*
// Basic marcos object
const marcos = {
    firstName: 'Marcos',
    lastName: 'Valdez',
    age: 2037 - 1999,
    job: 'teacher',
    friends: ['Ysenia, Precious, Jeremiah']
};

console.log(marcos);


// Dot vs Bracket Notation


console.log(marcos.lastName); // dot notation
console.log(marcos['lastname']); // bracket
const nameKey = 'Name';
console.log(marcos['first' + nameKey]);
console.log(marcos['last' + nameKey]);



const interestedIn = prompt("what do you want to know about Marcos? Choose firstname,lastname,age,job,friends");

console.log(marcos[interestedIn]);


if (marcos[interestedIn]) {
    console.log(marcos[interestedIn]);
} else {
    console.log("Error input!");
}


marcos.location = "USA"; // add to the object
console.log(marcos);

// Challenge
// "Marcos has 3 friends, and his best friend is Precious"

console.log(`${marcos.firstName} has ${marcos['friends'].length} friends, and his
his best friend is called, ${marcos.friends[0]}`)

*/


// OBJECT METHODS
/*
const marcos = {
    firstName: 'Marcos',
    lastName: 'Valdez',
    birthYear: 1999,
    job: 'teacher',
    friends: ['Ysenia, Precious, Jeremiah'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this); //the whole marcos object returns
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

//console.log(marcos.calcAge(marcos.birthYear));
//console.log(marcos['calcAge'](1999));
console.log(marcos.calcAge());
console.log(marcos.age);


// Challenge
// "Marcos is a 23 year old man. He has a drivers license."


console.log(`${marcos.firstName} is a ${marcos.age} year old ${marcos.job}.
He has ${marcos.hasDriversLicense ? 'a' : 'no'} drivers license.`);

*/
// ---------------------------------------------------------------------------------


// FOR LOOPS

// Gym for loop example

// for loop keeps running while condition is true ( rep <=10) or array.length **
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep} 🏋️`);

// }

// const marcos = [
//     'Marcos',
//     'Valdez',
//     1999,
//     'teacher',
//     ['Ysenia, Precious, Jeremiah']
// ];

// for (let i = 0; i < marcos.length; i++) {
//     console.log(marcos[i], typeof marcos[i]);
// };

// const years = [1999, 2000, 2001, 2002];

// const age = []

// for (let i = 0; i < years.length; i++) {
//     age.push(2037 - years[i]);
//     console.log(age);
// }

// Continue and BREAK
/*console.log('--- CONTINUE---')
for (let i = 0; i < marcos.length; i++) {
    //console.log(marcos[i], typeof marcos[i]);

    if (typeof marcos[i] !== 'string') continue; // if its not a string we iterate to next i
    console.log(marcos[i], typeof marcos[i])

};
console.log('--- BREAK---')
for (let i = 0; i < marcos.length; i++) {
    //console.log(marcos[i], typeof marcos[i]);

    if (typeof marcos[i] === 'number') break; // if its not a int break
    console.log(marcos[i], typeof marcos[i])

};
*/

// LOOP BACKWARDS & LOOPS IN LOOPS

// array
const marcos = [
    'Marcos',
    'Valdez',
    1999,
    'teacher',
    ['Ysenia, Precious, Jeremiah']
];


/*
for (let i = marcos.length - 1; i >= 0; i--) {
    console.log(i, marcos[i]);

}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------------Starting exercise ${exercise}`);


    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repitition ${rep}`);
    }

}
*/
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repitition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1 // trunc gets rid of the decimal
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice} !`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
