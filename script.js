const action = {
    rock: { losesTo: 'paper', winsAgainst: 'scissors' },
    paper: { losesTo: 'scissors', winsAgainst: 'rock' },
    scissors: { losesTo: 'rock', winsAgainst: 'paper' },
};

let playerScore = 0;
let computerScore = 0;

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
        console.log(`Player's score = ${playerScore}`);
        alert(
            `You win! ${playerSelection[0].toUpperCase()}${playerSelection.substring(
                1
            )} beats ${computerSelection[0].toUpperCase()}${computerSelection.substring(
                1
            )}`
        );
    } else if (action[playerSelection]?.losesTo === computerSelection) {
        computerScore += 1;
        console.log(`Computer's score = ${computerScore}`);
        alert(
            `You lose! ${computerSelection[0].toUpperCase()}${computerSelection.substring(
                1
            )} beats ${playerSelection[0].toUpperCase()}${playerSelection.substring(
                1
            )}`
        );
    } else if (playerSelection === computerSelection) {
        alert('Draw!');
    } else {
        alert('Wrong input, try again');
    }
}

function game() {
    for (playerScore, computerScore; playerScore < 5 && computerScore < 5; )
        playRound();
    if (playerScore === 5) {
        alert('You win');
    } else if (computerScore === 5) {
        alert('You lose');
    } else {
        alert('Something went terribly wrong');
    }
}

game();
