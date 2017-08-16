// Assigning global variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
				"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var phrase = ["champion", "chicago", "bulls", "hangtime", "airness", "jordan", "shoes", "player", "basketball",
				"dunk","fly", "jumpman", "points", "defense", "sport", "dribble", "crossover", "brand", "shot"];
var wins = 0;
var losses = 0;
var guesses = 10;

// Use for checking letters and to calculate guesses
var validate = false;
var checker = false;

// Computer randomly chooses a choice from the phrase array for User to guess.
var blankWord = phrase[Math.floor(Math.random() * phrase.length)];

// Creating an empty array to fill with underscores to match number of letters in word.
var answerSpaces = [];
	for (var i = 0; i < blankWord.length; i++) {
			answerSpaces[i] = "_";
		}
			console.log(answerSpaces);
		var letters = blankWord.length;

// An empty array to for letters that are guessed by user so they do not guess them again.
var lettersGuessed = [];

// Create function that starts new game
function newGame() {
		alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
			"r", "s", "t", "u", "v", "w", "x", "y", "z"];
		lettersGuessed = [];
		guesses = 10;
			console.log(guesses);
		//calculate new word again when reset
		blankWord = phrase[Math.floor(Math.random() * phrase.length)];
			console.log(blankWord);
		answerSpaces = [];
		//calculate answer spaces again when reset
		for (var i = 0; i < blankWord.length; i++) {
				answerSpaces[i] = "_";
			}
			console.log(answerSpaces);

		document.getElementById("spaces").innerHTML = answerSpaces.join(" ");
		document.getElementById("letter-choice").innerHTML = lettersGuessed.join(" ");
		document.getElementById("count").innerHTML = guesses;
		document.getElementById("correct-answer").innerHTML = " ";
		//used for determining how many letters are left in word
		letters = blankWord.length;
			console.log(letters);
		
		validate = false;
		checker = false;
};

// Start new game before entering a key
newGame();

// Checking to see if the User's guess matches alphabet, then a valid letter in the phrase.
document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    	console.log(userGuess);
    //must set validate variable to false every time a button is entered, otherwise it will stay true.
    validate = false;
    document.getElementById("jordan").src = "assets/images/jumpman.jpg";
        //check alphabet
        for (var k = 0; k < alphabet.length; k++) {
        	if (userGuess === alphabet[k]){
        		lettersGuessed.push(userGuess);
        			console.log(lettersGuessed);
        		document.getElementById("letter-choice").innerHTML = lettersGuessed.join(" ");
        		// when a letter is entered, set validate to true to verify the letter is in the alphabet
        		validate = true;
        		// must set checker to false each time a button is entered otherwise it will stay true
        		checker = false;
        		// remove letter guessed from alphabet
        		alphabet.splice(alphabet.indexOf(userGuess), 1);		
			    			
			    			//check phrase
						    for (var j = 0; j < blankWord.length; j++) {
						    	if (userGuess === blankWord[j]) {
						    		answerSpaces[j] = userGuess;
						    		letters--; //used to calculate if user will lose
						    		checker = true; //used to calculate guesses
						    		document.getElementById("spaces").innerHTML = answerSpaces.join(" ");
						    			console.log(answerSpaces);
						    			console.log(letters);
					    		}
				    		}
					}
				}

		// series of IF statement to determine if a button entered should be registered as a guess
			// check if button entered is a valid letter
			if (validate === false) {
				document.getElementById("final-result").innerHTML = "Type a Letter Not Chosen";
			} else if (validate === true) {
				document.getElementById("final-result").innerHTML = "Keep Guessing";
			}
			// check if user guess is in the word
			if (validate === true && checker === false) {
				guesses--;
				document.getElementById("count").innerHTML = guesses;
				document.getElementById("final-result").innerHTML = "Wrong Guess";
					console.log(guesses);
			} else if (validate === true && checker === true) {
				document.getElementById("final-result").innerHTML = "Correct Guess";
			}

		// used to calculate is user wins or loses the game
			//calculate win
		if (letters === 0) {
			wins++;
			document.getElementById("jordan").src = "assets/images/celebrate.gif";
			document.getElementById("final-result").innerHTML = "You Win! Correct Answer: " + blankWord;
			document.getElementById("count").innerHTML = guesses;
			document.getElementById("win-section").innerHTML = wins;
			document.getElementById("loss-section").innerHTML = losses;
				console.log ("You win");
				console.log(wins);
			newGame(); //reset variables
			//calculate loss
		} else if (guesses === 0) {
			losses++;
			document.getElementById("jordan").src = "assets/images/shakehead.gif";
			document.getElementById("final-result").innerHTML = "You Lose! Correct Answer: " + blankWord;
			document.getElementById("count").innerHTML = guesses;
			document.getElementById("win-section").innerHTML = wins;
			document.getElementById("loss-section").innerHTML = losses;
				console.log("You Lose");
				console.log(losses);
			newGame(); //reset variables
		}
};

