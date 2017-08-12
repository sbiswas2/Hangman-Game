// Assigning variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
				"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var phrase = ["champion", "chicago", "bulls", "hangtime", "airness",];
var wins = 0;
var losses = 0;
var guesses = 9;
// Randomly chooses a choice from the options array. This is the Computer's guess.
var blankWord = phrase[Math.floor(Math.random() * phrase.length)];