// ****************************************
//
// These are coding challenges for section: JS Fundamentals Part 1
//
// ****************************************


// ------------------------------------------------------------------------------

// Coding Challenge # 1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK

// ------------------------------------------------------------------------------
// Test 1
// let marksWeight = 78;
// let markHeight = 1.69;

// let johnWeight = 92;
// let johnHeight = 1.95;
// let markHigherBMI = true;

// // test 1
// let markBMI = (marksWeight) / (markHeight) ** 2
// let johnBMI = (johnWeight) / (johnHeight) ** 2
// console.log("Mark BMI = ", markBMI);
// console.log("John BMI =", johnBMI);

// markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI);


// Test 2
// marksWeight = 95;
// markHeight = 1.88;

// johnWeight = 85;
// johnHeight = 1.76;

// console.log()

// markBMI = (marksWeight) / (markHeight) ** 2
// johnBMI = (johnWeight) / (johnHeight) ** 2
// console.log("Mark BMI = ", markBMI);
// console.log("John BMI =", johnBMI);

// markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI);

// ------------------------------------------------------------------------------

// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement
// GOOD LUCK

// marksWeight = 78;
// markHeight = 1.69;

// johnWeight = 92;
// johnHeight = 1.95;
// isMarkHigherBMI = true;

// isMarkHigherBMI = (markBMI > johnBMI);
//console.log(markHigherBMI);

// regular output
// if (isMarkHigherBMI) {
//     console.log("Mark's BMI is higher than John's!");
// } else {
//     console.log("John's BMI is higher than Marks!");
// }


// Test 2 TEMPLATE STRING
// marksWeight = 95;
// markHeight = 1.88;

// johnWeight = 85;
// johnHeight = 1.76;
// isMarkHigherBMI = (markBMI > johnBMI);

// if (isMarkHigherBMI) {
//     console.log(`Mark's BMI is ${markBMI} is higher than John's ${johnBMI} .`);
// } else {
//     console.log(`John's BMI is ${johnBMI} is higher than Mark's ${markBMI} .`);
// }

// ------------------------------------------------------------------------------
// Challenge #3

// Your tasks:
// 1. Calculate the average score for each team,using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)


// 3.Bonus 1: Include a requirement for a minimum score of 100 .
// With this rule,a team only wins if it has a higher score than the other team,
// and the same time a score of at least 100 points.
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉


// 4. Bonus 2: Minimum score also applies to a draw!
// So a draw only happens when both teams have the same score and
// both have a score greater or equal 100 points. Otherwise, no team wins the trophy


// Test data:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//--------------------------------------------------------------------------
// Data 1 :
// let dolphinSumOfScores = (96 + 108 + 89)/3;
// let koalasSumOfScores = (89+91+110)/3;
// console.log(" ");
// console.log("Test 1 with Data 1:\n")
// console.log(`Dolphins average score is = ${dolphinSumOfScores}`);
// console.log(`Koalas average score is = ${koalasSumOfScores}`);

// function scores(dolphinSumOfScores, koalasSumOfScores){
//     if(dolphinSumOfScores > koalasSumOfScores ){
//         console.log("Dolphins average score is > than Koalas Score");
//     }else if(dolphinSumOfScores === koalasSumOfScores ){
//         console.log("Draw!");
//     }else{
//         console.log("Koalas score is > than Dolphins");
//     }
// }
// //--------------------------------------------------------------------------
// // Data 2:

// console.log(" ");
// console.log("Test 2 with Data 2:\n")
// dolphinSumOfScores = (97 + 112 + 101)/3;
// koalasSumOfScores = (109+95+106)/3;
// console.log(`Dolphins average score is = ${dolphinSumOfScores}`);
// console.log(`Koalas average score is = ${koalasSumOfScores}`);

// function scores(dolphinSumOfScores, koalasSumOfScores){
//     if(dolphinSumOfScores > koalasSumOfScores && dolphinSumOfScores >= 100){
//         console.log("Dolphins average score is > than Koalas Score");
//     }else if(dolphinSumOfScores === koalasSumOfScores && dolphinSumOfScores >=100 && koalasSumOfScores >= 100 ){
//         console.log("Draw!");
//     }else if(koalasSumOfScores > dolphinSumOfScores && koalasSumOfScores >= 100){
//         console.log("Koalas score is > than Dolphins");
//     }
//     else{
//         console.log("Teams both have same score but are both less than 100 points each. No winner!");
//     }
// }
// console.log("Final verdict: "), scores(dolphinSumOfScores,koalasSumOfScores);

// //--------------------------------------------------------------------------

// //Data 3:

// console.log(" ");
// console.log("Test 3 with Data 3:\n")
// dolphinSumOfScores = (97 + 112 + 101)/3;
// koalasSumOfScores = (109+95+123)/3;
// console.log(`Dolphins average score is = ${dolphinSumOfScores}`);
// console.log(`Koalas average score is = ${koalasSumOfScores}`);

// function scores(dolphinSumOfScores, koalasSumOfScores){
//     if(dolphinSumOfScores > koalasSumOfScores && dolphinSumOfScores >= 100){
//         console.log("Dolphins average score is > than Koalas Score");
//     }else if(dolphinSumOfScores === koalasSumOfScores && dolphinSumOfScores >=100 && koalasSumOfScores >= 100 ){
//         console.log("Draw!");
//     }else if(koalasSumOfScores > dolphinSumOfScores && koalasSumOfScores >= 100){
//         console.log("Koalas score is > than Dolphins");
//     }
//     else{
//         console.log("Teams both have same score but are both less than 100 points each. No winner!");
//     }
// }
// console.log("Final verdict: "), scores(dolphinSumOfScores,koalasSumOfScores);

// //--------------------------------------------------------------------------

// CHALLENGE # 4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// GOOD LUCK �

const tip1 = .15; //tip 15% if the bill value is between 50 and 300.
const tip2 = .20;; // tip 20% if bill over 300

// test 1 = 275
const bill = 430;
const total = bill >= 50 && bill <= 300 ? (bill * tip1) + bill : (bill * tip2) + bill;
const calculatedTip = bill >= 50 && bill <= 300 ? (bill * tip1) : (bill * tip2);
console.log(`The bill was ${bill}, the tip was ${calculatedTip}, and the total value of ${total}.`);






