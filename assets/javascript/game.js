// Assigning variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
				"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var phrase = ["champion", "chicago", "bulls", "hangtime", "airness", "jordan"];
var wins = 0;
var losses = 0;
var guesses = 9;

var buttonStart = document.getElementById("start");
var buttonNew = document.getElementById("new");

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

// ADD RESET FUNCTION HERE AFTER GLOBAL VARIABLES


// Checking to see if the User's guess matches alphabet, then a valid letter in the phrase.
var playGame = {
	matching: function() {
		document.onkeyup = function(event) {
			// If statement to check if we have already won or lost before starting a new game.
			// If guesses does not equal 0 and letters does not equal 0, then proceed with game.
			// If it does equal 0, then RETURN and exit out of game function.

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
				        		document.getElementById("letter-choice").innerHTML = lettersGuessed;
				        		guesses--;
				        		console.log(guesses);
				        		document.getElementById("count").innerHTML = guesses;
				        		alphabet.splice(alphabet.indexOf(userGuess), 1);		
					    			//check phrase
								    for (var j = 0; j < blankWord.length; j++) {
								    	if (userGuess === blankWord[j]) {
								    		answerSpaces[j] = userGuess;
								    		letters--;
								    		console.log(answerSpaces);
								    		document.getElementById("spaces").innerHTML = answerSpaces;
								    		console.log(letters);
							    		}
						    		}
							}
						}	
					} else {
							
							wins++;
							console.log(wins);
							document.getElementById("win-section").innerHTML = wins;
							document.getElementById("loss-section").innerHTML = losses;
							document.getElementById("final-result").innerHTML = "You Win!";
							console.log ("You win");
							// create reset function???
							} 

				} else {
						losses++;
						console.log(losses);
						document.getElementById("win-section").innerHTML = wins;
						document.getElementById("loss-section").innerHTML = losses;
						document.getElementById("final-result").innerHTML = "You Lose!";
						console.log("You Lose");
						// create reset function???
						}
		}
	}
};

buttonStart.onclick = function() {
 	console.log("Start");
 	document.getElementById("win-section").innerHTML = wins;
	document.getElementById("loss-section").innerHTML = losses;
 	document.getElementById("spaces").innerHTML = answerSpaces;
 	playGame.matching();		
};

buttonNew.onclick = function() {
    console.log("New");
    document.getElementById("win-section").innerHTML = wins;
	document.getElementById("loss-section").innerHTML = losses;
    document.getElementById("spaces").innerHTML = answerSpaces;
    playGame.matching();
};



