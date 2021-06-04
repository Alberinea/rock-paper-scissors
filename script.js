const action = {
    rock: { losesTo: 'paper', winsAgainst: 'scissors' },
    paper: { losesTo: 'scissors', winsAgainst: 'rock' },
    scissors: { losesTo: 'rock', winsAgainst: 'paper' },
};

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
const roundResult = document.querySelector('.roundResult');
const resultContent = document.querySelector('.score');

function playRound(playerSelection) {
    const computerAction = Math.floor(Math.random() * 3);
    const computerSelection =
        computerAction === 0 ? 'rock' : computerAction === 1 ? 'paper' : 'scissors';

    if (action[playerSelection]?.winsAgainst === computerSelection) {
        playerScore += 1;
        roundResult.innerText = `You win! \n\n ${playerSelection} beats ${computerSelection}`;
        resultContent.innerText = `Player \u00a0\u00a0\u00a0\u00a0\u00a0 Computer 
        \n \u00a0\u00a0\u00a0 ${playerScore} \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 ${computerScore}`;
    } else if (action[playerSelection]?.losesTo === computerSelection) {
        computerScore += 1;
        roundResult.innerText = `You lose! \n\n ${computerSelection} beats ${playerSelection}`;
        resultContent.innerText = `Player \u00a0\u00a0\u00a0\u00a0\u00a0 Computer 
        \n \u00a0\u00a0\u00a0 ${playerScore} \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 ${computerScore}`;
    } else {
        roundResult.innerText = `\n \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Draw!`;
        resultContent.innerText = `Player \u00a0\u00a0\u00a0\u00a0\u00a0 Computer 
        \n \u00a0\u00a0\u00a0 ${playerScore} \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 ${computerScore}`;
    }
}

function game(e) {
    if (e.target.id === '1') {
        playRound('rock');
    } else if (e.target.id === '2') {
        playRound('paper');
    } else {
        playRound('scissors');
    }

    if (playerScore === 5) {
        buttons.forEach((button) => button.removeEventListener('click', game));
        roundResult.style.cssText = 'font-size: 80px; color: blue';
        roundResult.innerText = 'YOU WON';
    } else if (computerScore === 5) {
        buttons.forEach((button) => button.removeEventListener('click', game));
        roundResult.style.cssText = 'font-size: 80px; color: red';
        roundResult.innerText = 'YOU LOST';
    } else {
        return;
    }
}

buttons.forEach((button) => button.addEventListener('click', game));
