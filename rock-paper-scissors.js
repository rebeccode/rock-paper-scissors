/* Global Variables */
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const playerUpdate = document.getElementById("player-score");
const computerUpdate = document.getElementById("computer-score");
const round = document.getElementById("current-round");
const results = document.getElementById("results");
const choices = document.getElementById("choices");
const buttons = document.querySelectorAll('button');
/* end */

function updateScore() {
playerUpdate.textContent = playerScore;
computerUpdate.textContent = computerScore;
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (button.id != "restart-button") {
      playerSelection = (button.id);
      playRound();
      updateScore();
    } else {
      restart();
    }
  })
  })

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

function printChoices() {
  choices.textContent = "You chose " + playerSelection.toLowerCase() + ". Computer chose " + computerSelection.toLowerCase() + ".";
}

function playRound(a, b) {
  if (playerScore < 5 && computerScore < 5) {
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
  printChoices();
  result();
}
}

function result() {
  if (playerScore === 5) {
  results.textContent = "You're the winner. You won " + playerScore + " games.";
  } else if (computerScore === 5) {
  results.textContent = "You're the loser. You lost " + computerScore + " games.";
  }
  return;
}

function restart() {
  playerScore = 0;
  computerScore = 0;
  choices.textContent = '';
  round.textContent = '';
  results.textContent = '';
  updateScore();
  return;
}
