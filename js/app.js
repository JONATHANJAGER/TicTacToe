$(document).ready(function () {
	
	loader .onload = game .start;	

// start game and ( onload who turn it is) // 
	function startGame().onload {
		document.turn = "X";

		setMessage(document.turn + "gets to go!");
	}
// show the message //
	function setMessage(msg) {
		document.getElementById("message"). innerText = msg;
	}
// show X or O while playing //
	function nextMove(square) {
		if (square.innerText == "") {
			square.innerText = document.turn;
			switchTurn();
		} else {
			setMessage (" Use another square.");
	}

// If it's not X turn to go show a O //
	function switchTurn() {
		if (document.turn == "X") {
			document.turn = "0";
		} else {
			document.turn = "x";
		}
		
		setMessage("It's " + document.turn + "'s turn!");
	}

// Checking for winner //
	function checkRow(a, b, c, move) {
		var result = false;
		if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
			result = true;

		}

	}

	function checkForWinner(move) {
		var result = false;
		if (checkRow(1, 2, 3, move)
	}

	function getBox(number) {
		return document.getElementById("s" + number) .innerText;
	}

// Allowing X to which with O //	
function switchTurn( {
	if(document.turn =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
})


	function load

});