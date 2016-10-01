$(document).ready(function () {
	
	loader .onload = game .start;	

// start game and ( onload )
	function startGame().onload {
		document.turn = "X";

		setMessage(document.turn + "gets to go!");
	}

	function setMessage(msg) {
		document.getElementById("message"). innerText = msg;
	}

	function nextMove(square) {
		square.innerText = document.turn;
	}


	function switchTurn() {
		if (document.turn == "X") {
			document.turn = "0";
		} else {
			document.turn = "x";
		}
		
		setMessage("It's " + document.turn + "'s turn!");
	}
function switchTurn( {
	if(document.turn =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
})

	function setMessage(msg) {
		document.getElementById("message"). innerText = msg;
	}

	function load

});