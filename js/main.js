// Class variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Generate a random number between 0 and 2 
    const number = getRandomInt(3);

    // Depending on the number, return 'rock', 'paper', or 'scissors'
    switch (number) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    // Ask the player for their turn
    const choice = prompt('Please choose rock, paper, or scissors');
    
    // Return the choice if it is valid
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        alert('Invalid choice. Please choose rock, paper, or scissors');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    // Determine the winner
    if (humanChoice === computerChoice) {
        alert('It\'s a tie!');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        alert('You win!');
        humanScore++;
    } else {
        alert('You lose!');
        computerScore++;
    }
}