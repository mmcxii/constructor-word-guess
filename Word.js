//* Requirements
const Letter = require('./Letter');

//* Word Class
class Word {
    constructor(word) {
        this.letters = [];
        word.split('').forEach((char) => {
            this.letters.push(new Letter(char));
        });

        this.remaining = this.letters.length;
    }

    display() {
        // Display a string of letters (and/ or placeholders)
        return console.log('\n' + this.letters.join(' ').toString());
    }

    guessCheck(guess) {
        // Loop over the letters in the current word...
        this.letters.forEach((letter) => {
            // Check the guess...
            if (letter.letterCheck(guess)) {
                // If the guess is correct decriment the remaining letters
                this.remaining--;
            }
        });

        // Update the display
        this.display();

        // Return the count of remaining letters for use in index.js
        return this.remaining;
    }
}

//* Export the Word Constructor
module.exports = Word;
