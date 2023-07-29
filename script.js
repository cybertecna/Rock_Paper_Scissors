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

