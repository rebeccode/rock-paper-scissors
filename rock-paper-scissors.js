let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
playerScoreParagraph = document.createElement('div');
computerScoreParagraph = document.createElement('div');

const round = document.getElementById("current-round")

function updateScore() {
playerScoreParagraph.textContent = playerScore;
computerScoreParagraph.textContent = computerScore;
document.getElementById("player-score").appendChild(playerScoreParagraph);
document.getElementById("computer-score").appendChild(computerScoreParagraph);
}

function computerPlay() {
  function getRandomInt() {
    return Math.floor(Math.random() * 3) + 1;
  }
  if (getRandomInt() === 1) {
    computerSelection = "Rock";
    return computerSelection;
  } else if (getRandomInt() === 2) {
    computerSelection = "Paper";
    return computerSelection;
  } else {
    computerSelection = "Scissors";
    return computerSelection;
  }
    }

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    playerSelection = (button.id);
    playRound();
    updateScore();
  });

function playRound(a, b) {
    computerPlay();
  if (playerSelection === computerSelection) {
  	round.textContent = "It's a draw.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
  	playerScore++;
    round.textContent = "You win! Rock beats scissors.";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
  	computerScore++;
    round.textContent = "You lose! Paper beats rock.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
  	playerScore++;
    round.textContent = "You win! Scissors beats paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
  	computerScore++;
    round.textContent = "You lose! Rock beats scissors.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
  	playerScore++;
    round.textContent = "You win! Paper beats rock.";
  } else {
  	computerScore++;
    round.textContent = "You lose! Scissors beats paper.";
  }
  result();
}

function result() {
  if (playerScore === 5) {
  	const playerWin = document.createElement('div');
    playerWin.textContent = "You're the winner. You won " + playerScore + " games.";
    document.getElementById("results").appendChild(playerWin);

  } else if (computerScore === 5) {
  	const computerWin = document.createElement('div');
    computerWin.textContent = "You're the loser. You lost " + computerScore + " games";
    document.getElementById("results").appendChild(computerWin);

  }
}

function restart(){
  playerScore = 0;
  computerScore = 0;
  return;
}
   
});
