// Assigning variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
				"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var phrase = ["champion", "chicago", "bulls", "hangtime", "airness", "jordan"];
var wins = 0;
var losses = 0;
var guesses = 9;

// Computer randomly chooses a choice from the phrase array for User to guess.
var blankWord = phrase[Math.floor(Math.random() * phrase.length)];


// Creating an empty array to fill with underscores to match number of letters in word.
var answerSpaces = [];
	for (var i = 0; i < blankWord.length; i++) {
			answerSpaces[i] = "_";
		}
		console.log(answerSpaces);
		var letters = blankWord.length;

var lettersGuessed = [];

	// Checking to see if the User's guess matches alphabet, then a valid letter in the phrase.
	document.onkeyup = function(event) {
        var userGuess = event.key;
        userGuess = userGuess.toLowerCase();

		if (guesses > 0) {
		        if (letters > 0) {
				        //check alphabet
				        for (var k = 0; k < alphabet.length; k++) {
				        	if (userGuess === alphabet[k]){
				        		console.log(userGuess);
				        		lettersGuessed.push(userGuess);
				        		console.log(lettersGuessed);
				        		guesses--;
				        		console.log(guesses);
				        		alphabet.splice(alphabet.indexOf(userGuess), 1);		
					    			//check phrase
								    for (var j = 0; j < blankWord.length; j++) {
								    	if (userGuess === blankWord[j]) {
								    		answerSpaces[j] = userGuess;
								    		letters--;
								    		console.log(answerSpaces);
								    		console.log(letters);
								    		}
								    	}
								}
							}	
					} else {
						console.log ("You win");
					}

			} else {
				console.log("You Lose");
			}
		};





