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

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let victory = "You win!"
    let lose = "You lose!"
    let paperWins = "Paper beats rock!"
    let rockWins = "Rock beats scissors!"
    let scissorsWin = "Scissors beat paper!"
    let tie = "It's a tie!"

    if (playerSelection === "rock" && computerSelection === "paper") {
        return lose + " " + paperWins
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return victory + " " + rockWins
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return victory + " " + paperWins
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return lose + " " + scissorsWin
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return lose + " " + rockWins
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return victory + " " + scissorsWin
    } else {
        return tie
    }

  }
   
  console.log(playRound(playerSelection, computerSelection));
