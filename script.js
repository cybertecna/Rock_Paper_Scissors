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

let playerSelection = "rock";
let computerSelection = getComputerChoice();
let playerScore = 0 
let computerScore = 0 

function playRound(playerSelection, computerSelection) {
   
    let victory = "You win!"
    let lose = "You lose!"
    let paperWins = "Paper beats rock!"
    let rockWins = "Rock beats scissors!"
    let scissorsWin = "Scissors beat paper!"
    let tie = "It's a tie!"
    playerSelection.toLowerCase()

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1; 
        return lose + " " + paperWins
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return victory + " " + rockWins
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return victory + " " + paperWins
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return lose + " " + scissorsWin
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return lose + " " + rockWins
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return victory + " " + scissorsWin
    } else {
        return tie
    }

  }
   
//   console.log(playRound(playerSelection, computerSelection));

function game() {
console.log(playRound(playerSelection, computerSelection))

console.log(playerScore)
console.log(computerScore)

console.log(playRound(playerSelection, computerSelection))

console.log(playerScore)
console.log(computerScore)

console.log(playRound(playerSelection, computerSelection))

console.log(playerScore)
console.log(computerScore)

console.log(playRound(playerSelection, computerSelection))

console.log(playerScore)
console.log(computerScore)

console.log(playRound(playerSelection, computerSelection))

console.log(playerScore)
console.log(computerScore)
let youLose = "You lose!"
let youWin = "You win!"
let tie = "It's a tie!"

if (playerScore < computerScore) {
    return youLose
} else if (playerScore > computerScore) {
    return youWin
} else { 
    return tie
}

}

console.log(game())