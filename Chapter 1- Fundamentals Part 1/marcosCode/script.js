// ****************************************
//
// This script is devoted to learning/testing basic fundamentals of JS.
// I puruposley made bunch of space between topics to make it clear to read and follow.
//
// ****************************************


// Basic Vars/Syntax

// let js = "amazing!";
// if (js === "amazing!") alert("javascript is fun!");

// console.log(40 + 8 + 23 - 10);

// console.log("marcos");


// let firstName = "Marcos";
// console.log(firstName);

// let number = 25;
// console.log(number);


// let javascriptIsFun = true;

// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "marcos");

// // dynamic programming below, can change the type of a var like python
// javascriptIsFun = "Hello world";
// console.log(typeof javascriptIsFun);

// // undefined (see console.log)
// let year;
// console.log(year);
// console.log(typeof year);
// console.log(typeof null);

//let age = 31;
//age = 35; // reassigning the value.

// immutable variable... const var type can NOT be changed. its sort of permanent.
// Must be assigned something. It cannot be a empty var.
//const birthYear = 1999;
//birthYear = 1990;


// let is block scoped, var is function scoped

// var job = 'programmer';
// job = 'teacher';





// -----------------------------------

// Operators BELOW

// const ageMarcos = 2037 - 1991;
// const ageJeremiah = 1000 - 450;
// console.log("Age of Marcos: ", ageMarcos, "\nJeremiah age:", ageJeremiah);

// Decided not to do more notes, quite similar to java syntax. I know the syntax.





// ----------------------------

// Template Literals

// const firstName = "Marcos";
// const lastName = "Valdez";
// const job = "IT";
// const birthYear = 1999;
// const year = 2022;

// // the java/python way to concatonate strings
// const marcos = "My name is " + firstName + ' '+ lastName + ' , age'  + (year - birthYear)
//                 + 'and I work ' +  job + '.' + '\nOne day I aspire to be a fullstack developer, or a general developer!';

// // Template Literal here below
// const marcosNew = `My name is ${firstName} ${lastName}, age ${year - birthYear} and I work in ${job}.
// One day I aspire to be a fullstack developer, or a general developer!`;

// console.log(marcos);


// console.log(marcosNew);




// -------------------------------------------


// Taking Decisions: if/else statements

// const age = 22;
// const isOldEnough = age >= 18; // boolean value

// if(isOldEnough){
//     console.log("Marcos can start driving! 🚗");
// }else{
//     console.log("More time to go!");
// }


// ------------------------------------------------------

// Type Conversion and Coercion

// Conversion is where we MANUALLY convert one variable type to another
// coercion is where JS automatically converts a variable to another

//Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear, inputYear)); // Number() converts string to a integer
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);

// // Type Coercion

// console.log('I am ' + 23 + 'years old.');
// console.log('23' - '10' - 3); // converts the strings to ints... wow!
// console.log('23' / '2');

// let n = '1' + 1; // '11' wow!
// n = n - 1;
// console.log(n);

//-----------------------------------------------------------------------

// Truthy and Falsy Vals

// 5 falsy values: 0, ' ,, undefined, null, NaN

// console.log(Boolean(0)); //falsy val
// console.log(Boolean(undefined)); //falsy val
// console.log(Boolean('Marcos')); //truthy val
// console.log(Boolean({})); //truthy val
// console.log(Boolean('')); //falsey val

// let height = 0; // falsey value!

// if (height) {
//     console.log("Not a falsy value!");
// } else {
//     console.log("falsey val"); // this runs because 0 is a falsey value!
// }

//-----------------------------------------------------------------------

// Equality Operators: == vs ===
// "===" is STRICT equals
// "==" is LOOSE
// != is LOOSE
// !== STRICT
// STRICT:
// const age = 18;
// if (age === 18) console.log("You just became an adult!"); // this 3 = is equal to in JS


// // LOOSE:
// const age2 = '15';
// if (age2 == 15) console.log("You are still a youngster!"); // loose! JS will convert string to int

// // prompt = input()_ python
// const number = prompt(" What is your favorite number?"); // INPUT FROM USER

//-----------------------------------------------------------------------

// SWITCHES

// const day = "thursday";
// switch (day) {
//     case 'monday':
//         console.log("I plan to trade");
//         break
//     case 'tuesday':
//         console.log("Trade again but alos have to go in office.");
//         break
//     case 'wednesday':
//     case 'thursday':
//         console.log("Rest days tbh");
//         break
//     case 'friday':
//         console.log("Party!");
//         break
//     case 'saturday':
//     case 'sunday':
//         console.log("relaaaaax");
//         break
//     default:
//         console.log("Not a valid day!");
// }
//-----------------------------------------------------------------------

// The Conditional TERNARY OPERATOR "?"

// This ? operator is essentially a if block. It REQURIES a : after tho to act as a ELSE
// block.

// this code block isnt very common.
// const age = 23;
// age >= 18 ? console.log("I like to drink wine. 🍷") :
//     console.log("I like to drink water");


// // this code block IS more common. Dont need CONSOLE.LOG
// const drink = age >= 18 ? "wine. 🍷" : "water";
// console.log(drink);


// console.log(`I like to drink ${age >= 18 ? "wine. 🍷" : "water"}`);