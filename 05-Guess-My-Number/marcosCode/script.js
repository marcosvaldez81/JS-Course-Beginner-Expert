'use strict';
/*
// DOM manipulation basic
console.log(document.querySelector('.message').textContent); // grab message class in html doc

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent); // grab message class in html doc

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


//console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
// --------------------------


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// What did we do here?
// grab the check button 
// used Add event listener function do do a event when check button is clicked
//print the value inputted in the box 
document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        //console.log(guess, typeof guess);

        // when there is no input
        if (!guess) {
            document.querySelector('.message').textContent = '❌ Incorrect Number!';

            // when guess equal to number
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = "#60b347"; // EDIT CSS CODE .style

            document.querySelector('.number').style.width = '30rem';

            // set the highscore
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }


            // if guess too high
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '📈 Guess is too high!';
                score--;
                document.querySelector('.score').textContent = score;
            } else { // else they lose!
                document.querySelector('.message').textContent = '💥You lost the game!';
                document.querySelector('.score').textContent = 0;

            }
            // if guess too low
        } else if (guess < secretNumber) {

            if (score > 1) {
                document.querySelector('.message').textContent = '📉 Guess is too low!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '💥You lost the game!';
                document.querySelector('.score').textContent = 0;

            }

        }
    });
//-------------------------------------------------------------------------------------
/*
Coding Challenge #1

    Implement a game rest functionality, so that the player can make a new guess!
    Your tasks:
    1. Select the element with the 'again' class and attach a click event handler
    2. In the handler function, restore initial values of the 'score' and 
    'secretNumber' variables
    3. Restore the initial conditions of the message, number, score and guess input 
    fields
    4. Also restore the original background color (#222) and number width (15rem)
*/


document.querySelector(".again").addEventListener
    ('click', function () {

        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start Guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = "#222";
        document.querySelector('.number').style.width = '15rem';


    });



//--------------------------------------------------------------




