function getComputerChoice() {
    // store choices
    const choices = ['rock', 'paper', 'scissors']; // Changed to lowercase
    // chooses random choice from array via index number
    const randomChoice = Math.floor(Math.random() * choices.length);
    // return random choice
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Convert to lowercase
    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function play() {
    let playerScore = 0; // Player's score
    let compScore = 0;   // Computer's score

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please input your selection: Rock, Paper, or Scissors").toLowerCase(); // Convert to lowercase
        const computerSelection = getComputerChoice();
        const winner = playRound(playerSelection, computerSelection);
        
        if (winner === 'player') {
            playerScore++;
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
        } else if (winner === 'computer') {
            compScore++;
            console.log(`You Lost! :( ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log(`It's a tie!`);
        }
    }

    return `Player Score: ${playerScore}, Computer Score: ${compScore}`;
}

console.log(play());
