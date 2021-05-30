const computerAction = Math.floor(Math.random() * 3);
const computerPlay =
  computerAction === 0 ? "rock" : computerAction === 1 ? "paper" : "scissors";

const action = {
  rock: { losesTo: "paper", winsAgainst: "scissors" },
  paper: { losesTo: "scissors", winsAgainst: "rock" },
  scissors: { losesTo: "rock", winsAgainst: "paper" },
};

function playRound(playerSelection, computerSelection) {
  let playerAction = prompt("Type 'Rock, Paper or Scissors'");
  playerSelection = playerAction.toLowerCase();
  computerSelection = computerPlay;

  return action[playerSelection]?.winsAgainst === computerSelection
    ? alert(
        `You win! ${playerSelection[0].toUpperCase()}${playerSelection.substring(
          1
        )} beats ${computerSelection[0].toUpperCase()}${computerSelection.substring(
          1
        )}`
      )
    : action[playerSelection]?.losesTo === computerSelection
    ? alert(
        `You lose! ${computerSelection[0].toUpperCase()}${computerSelection.substring(
          1
        )} beats ${playerSelection[0].toUpperCase()}${playerSelection.substring(
          1
        )}`
      )
    : playerSelection === computerSelection 
    ? alert("Draw!")
    : alert("Wrong inputs, try again");
}

playRound();
