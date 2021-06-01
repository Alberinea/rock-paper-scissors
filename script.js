const computerAction = Math.floor(Math.random() * 3);
const computerPlay =
    computerAction === 0 ? 'rock' : computerAction === 1 ? 'paper' : 'scissors';

const action = {
    rock: { losesTo: 'paper', winsAgainst: 'scissors' },
    paper: { losesTo: 'scissors', winsAgainst: 'rock' },
    scissors: { losesTo: 'rock', winsAgainst: 'paper' },
};

function playRound(playerSelection, computerSelection) {
    let playerAction = prompt('Type "Rock", "Paper" or "Scissors"');
    playerSelection = playerAction.toLowerCase();
    computerSelection = computerPlay;

    if (action[playerSelection]?.winsAgainst === computerSelection) {
        var playerScore = 0;
        playerScore += 1;
        return alert(
            `You win! ${playerSelection[0].toUpperCase()}${playerSelection.substring(
                1
            )} beats ${computerSelection[0].toUpperCase()}${computerSelection.substring(
                1
            )}`
        );
    } else if (action[playerSelection]?.losesTo === computerSelection) {
        var computerScore = 0;
        computerScore += 1;
        return alert(
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

function game() {}

