const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
  alert(button.id);
  });
});    



    let playerScore = 0;
	let computerScore = 0;
 	let i = 0;

	function game() {
		do { i += 1;
			playGame();
	} while (i < 5);
}

 	function playGame(a, b) {
	let playerSelection = playerPlay();
  	let computerSelection = computerPlay();
 	
 	function computerPlay(){
 		function getRandomInt() {
		return Math.floor(Math.random() * 3) + 1;
        }
	 		if (getRandomInt() === 1) {
	 			return "Rock";
	 		} else if (getRandomInt() === 2) {
	 			return "Paper";
	 		} else {
	 			return "Scissors";
	 		}
 	}
 	
 	function playerPlay(){
 		let playerInput;
 	do {
	 		playerInput = prompt("Rock, paper, or scissors?");
	        if (playerInput.toLowerCase() === "rock") {
	        	return "Rock";
	        } else if (playerInput.toLowerCase() === "paper") {
	            return "Paper";
	        } else if (playerInput.toLowerCase() === "scissors") {
	            return "Scissors";
	        } else {
	        	alert("Try again.");
	        }
        }
 	while (playerInput.toLowerCase() != "rock" || "paper" || "scissors")
  	}

        if (playerSelection === computerSelection) {
        	return "It's a draw.";
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        	playerScore++;
        	return "You win! Rock beats scissors.";
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        	computerScore++;
        	return "You lose! Paper beats rock.";
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        	playerScore++;
        	return "You win! Scissors beats paper.";
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        	computerScore++;
        	return "You lose! Rock beats scissors.";
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        	playerScore++;
        	return "You win! Paper beats rock.";
        } else {
        	computerScore++;
        	return "You lose! Scissors beats paper.";
        }
}

function result() {
	                if (playerScore > computerScore) {
        	return "You're the winner. You won " + playerScore + " games.";
        } else if (computerScore > playerScore) {
        	return "You're the loser. You lost " + computerScore + " games";
        } else {
        	return "It was a draw."
        }
}
