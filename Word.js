//* Requirements
const Letter = require('./Letter');

//* Word Constructor
function Word(word) {
    this.letters = [];
    word.split('').forEach((char) => {
        this.letters.push(new Letter(char));
    });

    this.remaining = this.letters.length;
}

//* Protype Functions

// Display the word
Word.prototype.display = function() {
    // Line Break
    console.log('');

    // Display a string of letters (and/ or placeholders)
    return console.log(this.letters.join(' ').toString());
};

// Check a guess against the current word
Word.prototype.guessCheck = function(guess) {
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
};

//* Export the Word Constructor
module.exports = Word;
