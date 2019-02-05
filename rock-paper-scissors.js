let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

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
  });

function playRound(a, b) {
    computerPlay();
  if (playerSelection === computerSelection) {
  	console.log("It's a draw.");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
  	playerScore++;
  	console.log("You win! Rock beats scissors.");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
  	computerScore++;
  	console.log("You lose! Paper beats rock.");
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
  	playerScore++;
  	console.log("You win! Scissors beats paper.");
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
  	computerScore++;
  	console.log("You lose! Rock beats scissors.");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
  	playerScore++;
  	console.log("You win! Paper beats rock.");
  } else {
  	computerScore++;
  	console.log("You lose! Scissors beats paper.");
  }
  result();
}

function result() {
  if (playerScore === 5) {
  	console.log("You're the winner. You won " + playerScore + " games.");

  } else if (computerScore === 5) {
  	console.log("You're the loser. You lost " + computerScore + " games");

  }
}

function restart(){
  playerScore = 0;
  computerScore = 0;
  return;
}
   
});
