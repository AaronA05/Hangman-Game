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


var cpuWords = ["retriever", "hound", "chihuahua", "dalmatian", "beagle", "poodle", "spaniel"];

$(document).ready(function() {

      // Gets Link for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "Assets/Baha_Men-Who_Let_the_Dogs_Out.mp3");

      // Theme Button
      $(".theme-button").on("click", function() {
        audioElement.play();
      });

      $(".pause-button").on("click", function() {
        audioElement.pause();
      });
});

//Start game with space bar to show blank letters 
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	//Have computer pick random word from array
		var cpuWordChoice = cpuWords[Math.floor(Math.random() * cpuWords.length)];
		letterStorage = [];
		cpuLetters = [];
		console.log(cpuWordChoice);
		document.getElementById("retriever").setAttribute("style", "opacity: 0; height: 1px; width: 1px");
		document.getElementById("beagle").setAttribute("style", "opacity: 0; height: 1px; width: 1px");
		document.getElementById("chihuahua").setAttribute("style", "opacity: 0; height: 1px; width: 1px");
		document.getElementById("dalmatian").setAttribute("style", "opacity: 0; height: 1px; width: 1px");
		document.getElementById("hound").setAttribute("style", "opacity: 0; height: 1px; width: 1px");
		document.getElementById("poodle").setAttribute("style", "opacity: 0; height: 1px; width: 1px");
		document.getElementById("spaniel").setAttribute("style", "opacity: 0; height: 1px; width: 1px");

       for (var j = 0; j < cpuWordChoice.length; j++){
       
       	//have computer store the letters of the word choice for comparison later
       	letterStorage[j] = cpuWordChoice[j];
       	console.log(letterStorage);
       	//have computer display "_" for each letter of word and remove "," from the array
       	cpuLetters[j] = "_";
       	document.getElementById("cpuLetters").textContent = cpuLetters.join(' ');
       	//set chances to 5, clear userPastGuesses;
       	chances = 5;
       	userPastGuesses = [];
		}
		
		//Listen for user start with letters only
		document.onkeyup = function(event){
		var userGuess = event.key.toLowerCase();
		
			//Checks if user typed in a letter only
			if (event.keyCode >= 65 && event.keyCode <= 90){

			//Check if user guess is in any letter of cpuWordChoice and place letter in blank space
			for (var i = 0; i < cpuWordChoice.length; i++){
				if (cpuWordChoice[i] === userGuess && chances > 0){
					cpuLetters[i] = userGuess;
				}
			}

			//Check if user guess is in previous gueses or is part of game word
			if (letterStorage.indexOf(userGuess) < 0 && userPastGuesses.indexOf(userGuess) < 0 && chances > 0){
				userPastGuesses.push(userGuess);
				chances--;
			}
			
		}

		
			document.getElementById("userPastGuesses").textContent = userPastGuesses;
			document.getElementById("chances").textContent = chances;
			document.getElementById("cpuLetters").textContent = cpuLetters.join(' ');


			if (cpuLetters.indexOf( "_" ) < 0 && cpuWordChoice === "retriever"){
				alert("You win! Enjoy a picture of your dog!!");
				document.getElementById("retriever").setAttribute("style", "opacity: 1; height: 200px; width: 200px")
			}

			if (cpuLetters.indexOf( "_" ) < 0 && cpuWordChoice === "beagle"){
				alert("You win! Enjoy a picture of your dog!!");
				document.getElementById("beagle").setAttribute("style", "opacity: 1; height: 200px; width: 200px")
			}

			if (cpuLetters.indexOf( "_" ) < 0 && cpuWordChoice === "chihuahua"){
				alert("You win! Enjoy a picture of your dog!!");
				document.getElementById("chihuahua").setAttribute("style", "opacity: 1; height: 200px; width: 200px")
			}

			if (cpuLetters.indexOf( "_" ) < 0 && cpuWordChoice === "dalmatian"){
				alert("You win! Enjoy a picture of your dog!!");
				document.getElementById("dalmatian").setAttribute("style", "opacity: 1; height: 200px; width: 200px")
			}

			if (cpuLetters.indexOf( "_" ) < 0 && cpuWordChoice === "hound"){
				alert("You win! Enjoy a picture of your dog!!");
				document.getElementById("hound").setAttribute("style", "opacity: 1; height: 200px; width: 200px")
			}

			if (cpuLetters.indexOf( "_" ) < 0 && cpuWordChoice === "poodle"){
				alert("You win! Enjoy a picture of your dog!!");
				document.getElementById("poodle").setAttribute("style", "opacity: 1; height: 200px; width: 200px")
			}

			if (cpuLetters.indexOf( "_" ) < 0 && cpuWordChoice === "spaniel"){
				alert("You win! Enjoy a picture of your dog!!");
				document.getElementById("spaniel").setAttribute("style", "opacity: 1; height: 200px; width: 200px")
			}

			if (chances === 0){
				alert("Sorry try again! Hit the spacebar for a new word!");
			}
			


		} //on user enter valid letter
	} //on user enter space bar
} //on user enter space bar



