// Assigning variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
				"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var phrase = ["champion", "chicago", "bulls", "hangtime", "airness", "jordan"];
var wins = 0;
var losses = 0;
var guesses = 9;

// Randomly chooses a choice from the phrase array. This is the Computer's word for User to guess.
var blankWord = phrase[Math.floor(Math.random() * phrase.length)];


// Creating an empty array to fill with underscores to match number of letters in word.
var answerSpaces = [];
	for (var i = 0; i < blankWord.length; i++) {
			answerSpaces[i] = "_";
		}
		console.log(answerSpaces);
		var letters = blankWord.length;

// Checking to see if the User's guess matches a valid letter in the phrase.
document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess);
	    for (var j = 0; j < blankWord.length; j++) {
	    	if (userGuess === blankWord[j]) {
	    		answerSpaces[j] = userGuess;
	    		letters--;
	    		console.log(answerSpaces);
	    	}
	    }
	}
