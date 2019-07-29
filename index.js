//* Requirements
require('colors');
const inquirer = require('inquirer');
const Word = require('./Word');

//* Declare Variables
const words = ['dingus', 'node', 'javascript', 'sass', 'supercalifragilisticexpialidocious'];
let lives, rounds, prevA, prev2, answer, randomWord;

//* Assign Variables
answer = words[r(words.length)];
randomWord = new Word(answer);
lives = 10;
rounds = 0;

//* Begin the First Loop
askForGuess();

function askForGuess() {
    // Display the letters in the word
    randomWord.display();

    inquirer
        // Ask the user for their guess
        .prompt([
            {
                message: 'Guess a letter:',
                name: 'guess',
                type: 'input',
            },
        ])
        .then((res) => {
            // Reference the guess and number of remaining letters
            const guess = res.guess;
            let remaining = randomWord.remaining;

            // Check the guess and how many letters are unguessed

            // If the guess is correct...
            if (randomWord.guessCheck(guess) < remaining) {
                // Update remaining letter count
                remaining = randomWord.remaining;

                // Display message (as well as victory message when word is completed)
                console.log(remaining !== 0 ? 'Correct Guess!!\n'.green : 'You completed the word!'.green);

                // If the guess is incorrect...
            } else {
                // Decriment remaining lives
                lives--;

                // Display message and inform user of remaining lives
                console.log(`Incorrect Guess!! Lives remaining ${lives}\n`.red);
            }

            // If all letters have been guessed...
            if (remaining === 0) {
                // Reference previous two words used
                prev2 = prevA;
                prevA = answer;

                // Find a word that does not match either of those two words
                while (
                    words.indexOf(prevA) === words.indexOf(answer) ||
                    words.indexOf(prev2) === words.indexOf(answer)
                ) {
                    // Reference the new word
                    answer = words[r(words.length)];
                }

                // Create a new Word object for the next word
                randomWord = new Word(answer);

                // Incriment round and reset lives
                rounds++;
                lives = 10;

                // Display message
                console.log(
                    `You have completed ${rounds} word${rounds === 1 ? '' : 's'} so far, keep it up!`
                );

                // Inform the user a new word has been chosen
                console.log('Next Word:\n'.cyan);
            }

            // If the user has not lost yet...
            if (lives > 0) {
                // Begin another loop
                askForGuess();

                // If the user runs out of lives...
            } else {
                // Display message (game will end)
                console.log(
                    `You survived ${rounds} rounds${rounds === 1 ? 's' : ''}! Better luck next time!`
                );
            }
        });
}

//* Helper Functions

// Generate a random number
function r(max) {
    return Math.floor(Math.random() * max);
}
