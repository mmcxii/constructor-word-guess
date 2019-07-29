//* Letter Class
class Letter {
    constructor(char) {
        this.char = char;
        this.placeholder = '_';
        this.guessed = false;
    }

    letterCheck(guess) {
        if (guess === this.char && this.guessed === false) {
            this.guessed = true;

            // Return bool for use in Word.guessCheck()
            return true;
        } else {
            return false;
        }
    }

    toString() {
        if (!this.guessed) {
            return this.placeholder;
        } else {
            return this.char;
        }
    }
}

// Export Letter Constructor
module.exports = Letter;
