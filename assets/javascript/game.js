//Have computer pick random word from array - complete
//Have computer display _ for each letter of word - complete
//Prompt user to start by typing a letter - complete
//Check if user guess is a letter of word generated
//Continue if guess is in word
//Count down chances if not
//Chances = 0, new game and restart

//need to make the computer word into its own array 
//and check the user guess against the index of those guesses

//Setting global variables for HTML
var chances = 5;
var wins = 0;
var cpuLetters = [];

//Have computer pick random word from array
var cpuWords = ["caitlin", "aaron", "domino", "blair"];
var cpuWordChoice = cpuWords[Math.floor(Math.random() * cpuWords.length)];

//Display word choice in console
console.log(cpuWordChoice);


//Start game with space bar 
//have computer display _ for each letter of word and push those letters to an array
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
       for (var j = 0; j < cpuWordChoice.length; j++){
       	cpuLetters[j] = "_";
       	document.getElementById("cpuLetters").textContent = cpuLetters.join(' ');
		}
		
    }
}



//Listen for user start on key
document.onkeyup = function(event){
	var userGuess = event.key;

//Check if user guess in any letter of cpuWordChoice
	for (var i = 0; i < cpuWordChoice.length; i++){
		if (cpuWordChoice[i] === userGuess){
			cpuLetters[i] = userGuess;

			//This rings up "Correct" for every letter match in the word
			// console.log("Correct!");
			// //Pseudo codeo Array.splice;
			// var correctGuesses = cpuLetters.splice(i, i, userGuess);
			// console.log(correctGuesses);

			// var cpuLetters = [];
			// for (var k = 0; k < cpuWordChoice.length; k++){
			// 	cpuLetters.push(cpuWordChoice.charAt(k));
			// }


			// var fillSpaces = cpuWords.indexof(userGuess);
			// console.log(fillSpaces);
			// if (fillSpaces === -1){
			// 	wordSpaces[fillSpaces] = userGuess;
			// }
		}
	}

	document.getElementById("cpuLetters").textContent = cpuLetters.join(' ');

}