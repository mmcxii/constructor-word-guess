function Letter(char) {
    this.char = char;
    this.placeholder = '_';
    this.guessed = false;
}

Letter.prototype.letterCheck = function(guess) {
    if (guess === this.char) {
        this.guessed = true;
    }
};

Letter.prototype.toString = function() {
    if (!this.guessed) {
        return this.placeholder;
    } else {
        return this.char;
    }
};

module.exports = Letter;
