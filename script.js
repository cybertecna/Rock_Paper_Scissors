function getRandomNumber() {
   return Math.floor(Math.random() * 3) + 1
}

function getComputerChoice() {
    let randomNumber = getRandomNumber()
    let rock = "rock"
    let paper = "paper"
    let scissors = "scissors"
    if (randomNumber === 1) {
        return rock
    } else if (randomNumber === 2) {
        return paper
    } else {
        return scissors
    }
}

const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const roundWinner = document.querySelector('.round-winner')

btnRock.addEventListener('click', () => {
    if (computerScoreCount < 5 && playerScoreCount < 5) {
    playRound("rock",)
}
});

btnPaper.addEventListener('click', () => {
    if (computerScoreCount < 5 && playerScoreCount < 5) {
    playRound("paper",)
    }
});

btnScissors.addEventListener('click', () => {
    if (computerScoreCount < 5 && playerScoreCount < 5) {
    playRound("scissors",)
    }
});

let computerSelection = getComputerChoice();
let playerSelection = ""

let computerScoreCount = 0
let playerScoreCount = 0

let playerScore = document.querySelector('.player-score'); 
let computerScore = document.querySelector('.computer-score');


function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    let victory = "You win!"
    let lose = "You lose!"
    let paperWins = "Paper beats rock!"
    let rockWins = "Rock beats scissors!"
    let scissorsWin = "Scissors beat paper!"
    let tie = "It's a tie!"

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScoreCount += 1; 
        roundWinner.textContent = lose + " " + paperWins
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScoreCount += 1;
        roundWinner.textContent = victory + " " + rockWins
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScoreCount += 1;
        roundWinner.textContent = victory + " " + paperWins
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScoreCount += 1;
        roundWinner.textContent = lose + " " + scissorsWin
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScoreCount += 1;
        roundWinner.textContent = lose + " " + rockWins
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScoreCount += 1;
        roundWinner.textContent = victory + " " + scissorsWin
    } else {
        roundWinner.textContent = tie
    } 
    playerScore.textContent = playerScoreCount
    computerScore.textContent = computerScoreCount

    checkVictory()
    
  }
   

const restartButton = document.querySelector('.restart-btn')

 function checkVictory() {
    let youWon = "You won this one!"
    let youLost = "You lost! Try again!"

    if (computerScoreCount === 5) {
        roundWinner.textContent = youLost
        restartButton.style.display = "inline-block"
    } else if (playerScoreCount === 5) {
        roundWinner.textContent = youWon
        restartButton.style.display = "inline-block"
    } else {
        
    }
 }


function restartGame() {
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.textContent = playerScoreCount
    computerScore.textContent = computerScoreCount
    roundWinner.textContent = "Choose rock paper scissors."
    restartButton.style.display = "none"
}

restartButton.addEventListener('click', () => {
    restartGame()
});
