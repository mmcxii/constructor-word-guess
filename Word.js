const Letter = require('./Letter');

function Word(word) {
    this.letters = [];

    word.split('').forEach((char) => {
        this.letters.push(new Letter(char));
    });
}

Word.prototype.display = function() {
    return console.log(this.letters.join(' ').toString());
};

Word.prototype.guessCheck = function(guess) {
    this.letters.forEach((letter) => {
        letter.letterCheck(guess);
    });

    this.display();
};

module.exports = Word;
