//* Letter Constructor
function Letter(char) {
    this.char = char;
    this.placeholder = '_';
    this.guessed = false;
}

//* Prototype Functions

// Check Letters
Letter.prototype.letterCheck = function(guess) {
    if (guess === this.char && this.guessed === false) {
        this.guessed = true;

        // Return bool for use in Word.guessCheck()
        return true;
    } else {
        return false;
    }
};

// Display letter or placeholder
Letter.prototype.toString = function() {
    if (!this.guessed) {
        return this.placeholder;
    } else {
        return this.char;
    }
};

// Export Letter Constructor
module.exports = Letter;
