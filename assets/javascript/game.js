//Have computer pick random word from array - complete
//Have computer display _ for each letter of word - complete
//Prompt user to start by typing a letter - complete but using spacebar
//Check if user guess is a letter of word generated - complete
//Continue if guess is in word - complete
//Count down chances if not
//Chances = 0, new game and restart

//need to make the computer word into its own array 
//and check the user guess against the index of those guesses

//Setting global variables for HTML
var chances = 5;
var wins = 0;
var cpuLetters = [];
var userPastGuesses = [];
var letterStorage =[];

//Have computer pick random word from array
var cpuWords = ["caitlin", "aaron", "domino", "blair"];
var cpuWordChoice = cpuWords[Math.floor(Math.random() * cpuWords.length)];

//Display word choice in console
console.log(cpuWordChoice);


//Start game with space bar to show blank letters 
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
       for (var j = 0; j < cpuWordChoice.length; j++){
       	
       	//have computer store the letters of the word choice for comparison later
       	letterStorage[j] = cpuWordChoice[j];
       	console.log(letterStorage);
       	//have computer display "_" for each letter of word and remove "," from the array
       	cpuLetters[j] = "_";
       	document.getElementById("cpuLetters").textContent = cpuLetters.join(' ');
		}
		
		//Listen for user start with letters only
		document.onkeyup = function(event){
		var userGuess = event.key.toLowerCase();
		
			//Checks if user typed in a letter only
			if (event.keyCode >= 65 && event.keyCode <= 90){

			//Check if user guess is in any letter of cpuWordChoice
			for (var i = 0; i < cpuWordChoice.length; i++){
				if (cpuWordChoice[i] === userGuess){
					cpuLetters[i] = userGuess;
				}
			}

			//Check if user guess is in previous gueses or is part of game word
			if (letterStorage.indexOf(userGuess) < 0 && userPastGuesses.indexOf(userGuess) < 0){
				userPastGuesses.push(userGuess);
				chances--;
				console.log("HEY THERE");
			}
			
			
		}


	document.getElementById("userPastGuesses").textContent = userPastGuesses;
	document.getElementById("chances").textContent = chances;
	document.getElementById("cpuLetters").textContent = cpuLetters.join(' ');

		} //on user enter valid letter
	} //on user enter space bar
} //on user enter space bar



