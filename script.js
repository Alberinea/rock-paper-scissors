const action = {
    rock: { losesTo: 'paper', winsAgainst: 'scissors' },
    paper: { losesTo: 'scissors', winsAgainst: 'rock' },
    scissors: { losesTo: 'rock', winsAgainst: 'paper' },
};

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
const startButton = document.querySelector('.startButton');
const playAgainButton = document.querySelector('.playAgainButton');
const roundResult = document.querySelector('.roundResult');
const roundExplanation = document.querySelector('.roundExplanation');
const resultContent = document.querySelector('.score');

function playRound(playerSelection) {
    const computerAction = Math.floor(Math.random() * 3);
    const computerSelection =
        computerAction === 0 ? 'rock' : computerAction === 1 ? 'paper' : 'scissors';

    if (action[playerSelection]?.winsAgainst === computerSelection) {
        playerScore += 1;
        roundResult.classList.remove('finalResult');
        roundResult.style.cssText = 'color: blue;'
        roundResult.innerText = `You win!`;
        roundExplanation.innerText = `${playerSelection} beats ${computerSelection}`;
        resultContent.innerText = `Player \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Computer 
        \n \u00a0\u00a0\u00a0 ${playerScore} \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 ${computerScore}`;
    } else if (action[playerSelection]?.losesTo === computerSelection) {
        computerScore += 1;
        roundResult.classList.remove('finalResult');
        roundResult.style.cssText = 'color: red;';
        roundResult.innerText = `You lose!`;
        roundExplanation.innerText = `${computerSelection} beats ${playerSelection}`;
        resultContent.innerText = `Player \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Computer 
        \n \u00a0\u00a0\u00a0 ${playerScore} \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 ${computerScore}`;
    } else {
        roundResult.classList.remove('finalResult');
        roundResult.style.cssText = ''
        roundResult.innerText = `\u00a0 Draw!`;
        roundExplanation.innerText = '';
        resultContent.innerText = `Player \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Computer 
        \n \u00a0\u00a0\u00a0 ${playerScore} \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 ${computerScore}`;
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
        roundExplanation.innerText = '';
        roundResult.classList.add('finalResult');
        roundResult.style.cssText = 'color: blue';
        roundResult.innerText = 'YOU WON';
        resultContent.innerText = '';
        playAgainButton.classList.remove('hide');
    } else if (computerScore === 5) {
        buttons.forEach((button) => button.removeEventListener('click', game));
        roundExplanation.innerText = '';
        roundResult.classList.add('finalResult');
        roundResult.style.cssText = 'color: red';
        roundResult.innerText = 'YOU LOST';
        resultContent.innerText = '';
        playAgainButton.classList.remove('hide');
    } else {
        return;
    }
}

startButton.addEventListener('click', () => {
    startButton.classList.add('hide');
    buttons.forEach((button) => button.addEventListener('click', game));
    buttons.forEach((button) => button.classList.remove('hide'));
});

playAgainButton.addEventListener('click', () => {
    roundResult.classList.remove('finalResult');
    roundResult.innerText = '';
    roundResult.style.cssText = '';
    playAgainButton.classList.add('hide');
    buttons.forEach((button) => button.addEventListener('click', game));
    playerScore = 0;
    computerScore = 0;
});
