var playerOneButton = document.getElementsByTagName("button")[0];
var playerTwoButton = document.getElementsByTagName("button")[1];
var resetButton = document.getElementsByTagName("button")[2];
var inputButton = document.getElementsByTagName("input")[0];
var playingTo = parseInt(document.getElementById("playingTo").textContent);
var playerOneScore = 0;
var playerTwoScore = 0;

playerOneButton.addEventListener("click", function(){
	if(playerOneScore === playingTo || playerTwoScore === playingTo){
		return;
	}

	playerOneScore += 1;
	document.getElementById("playerOneScore").textContent = playerOneScore;
	if(playerOneScore === playingTo){
		document.getElementById("playerOneScore").classList.add("winner");
	}

});

playerTwoButton.addEventListener("click", function(){
	if(playerOneScore === playingTo || playerTwoScore === playingTo){
		return;
	}

	playerTwoScore += 1;
	document.getElementById("playerTwoScore").textContent = playerTwoScore;

	if(playerTwoScore === playingTo){
		document.getElementById("playerTwoScore").classList.add("winner");
	}
});

resetButton.addEventListener("click", resetGame);

inputButton.addEventListener("change", function(){
	document.getElementById("playingTo").textContent = inputButton.value;
	playingTo = parseInt(inputButton.value);
	resetGame();
})

function resetGame(){
	document.getElementById("playerOneScore").classList.remove("winner");
	document.getElementById("playerTwoScore").classList.remove("winner");

	playerOneScore = 0;
	document.getElementById("playerOneScore").textContent = playerOneScore;
	playerTwoScore = 0;
	document.getElementById("playerTwoScore").textContent = playerTwoScore;
}