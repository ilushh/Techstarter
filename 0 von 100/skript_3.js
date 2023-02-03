"use strict";

var inputGuess = document.getElementById("inputGuess");
    var outputResult = document.getElementById("outputResult");
    var outputCount = document.getElementById("outputCount");
    
    var number, count;
    number = Math.floor(Math.random() * 100); //mathematische Funktionen von JavaScript.
    
    count = 0;
    
        //Zähler um 1 erhöhen
        function checkNumber() {
            count = count + 1;
            outputCount.innerHTML = "Du hast bisher " + count + " Versuche gebraucht.";
}
		//höher oder niedriger?
		function checkNumber() {
			var guess = parseInt(inputGuess.value);			
			if (guess < number)
				outputResult.innerHTML  = "Dein Tipp war zu niedrig.";
			else if (guess > number)
				outputResult.innerHTML  = "Dein Tipp war zu hoch.";
			else if (guess == number)
				outputResult.innerHTML  = "Richtig!";		
		
			count = count + 1;
			outputCount.innerHTML = "Du hast bisher " + count + " Versuche gebraucht.";
		}
		
		function newGame() {
			number = Math.floor(Math.random() * 100);
			count = 0;
			
			inputGuess.value = "";
			outputResult.innerHTML = "";
			outputCount.innerHTML = "";
		}
	