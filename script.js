const action = {
    rock: { losesTo: 'paper', winsAgainst: 'scissors' },
    paper: { losesTo: 'scissors', winsAgainst: 'rock' },
    scissors: { losesTo: 'rock', winsAgainst: 'paper' },
};

let playerScore = 0;
let computerScore = 0;
let correctInput = false;

function playRound(playerSelection, computerSelection) {
    let playerAction = prompt('Type "Rock", "Paper" or "Scissors"');
    const computerAction = Math.floor(Math.random() * 3);
    const computerPlay =
        computerAction === 0
            ? 'rock'
            : computerAction === 1
            ? 'paper'
            : 'scissors';
    playerSelection = playerAction.toLowerCase();
    computerSelection = computerPlay;

    if (action[playerSelection]?.winsAgainst === computerSelection) {
        playerScore += 1;
        alert(
            `You win! ${playerSelection[0].toUpperCase()}${playerSelection.substring(
                1
            )} beats ${computerSelection[0].toUpperCase()}${computerSelection.substring(
                1
            )}`
        );
    } else if (action[playerSelection]?.losesTo === computerSelection) {
        computerScore += 1;
        alert(
            `You lose! ${computerSelection[0].toUpperCase()}${computerSelection.substring(
                1
            )} beats ${playerSelection[0].toUpperCase()}${playerSelection.substring(
                1
            )}`
        );
    } else if (playerSelection === computerSelection) {
        correctInput = true;
        alert('Draw!');
    } else {
        alert('Wrong input, try again');
    }
}

function game() {
    for (let round = 0; round < 5; round++) playRound();
    if (playerScore > computerScore) {
        alert('You win');
    } else if (playerScore < computerScore) {
        alert('You lose');
    } else if (playerScore === computerScore && correctInput === true) {
        alert('Draw');
    } else {
        alert('Please only type "Rock", "Paper" or "Scissors"');
    }
}

game();
