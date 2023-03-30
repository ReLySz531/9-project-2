const rockButton = document.getElementById("rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieText = document.getElementById("result-tie");

let computerWinAmount = 0;
let playerWinAmount = 0;
let tieAmount = 0;

rockButton.addEventListener("click", function(){
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
});

paperButton.addEventListener("click", function() {
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", function() {
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break; 
    }
    return choice;
}

function playerWin() {
    ++playerWinAmount;
    playerScore.innerHTML = "Your score is: " + playerWinAmount;
}

function computerWin() {
    ++computerWinAmount;
    computerScore.innerHTML = "The computer score is: " + computerWinAmount;
}

function tieWin() {
    ++tieAmount;
    tieText.innerHTML = "Tie rounds: " + tieAmount;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" &&
    computerSelection == "rock") {
        tieWin();
    } else if (playerSelection == "rock" &&
    computerSelection == "scissors") {
        playerWin();
    } else if (playerSelection == "rock" &&
    computerSelection == "paper") {
        computerWin();
    }

    if (playerSelection == "paper" &&
    computerSelection == "rock") {
        playerWin();
    } else if (playerSelection == "paper" &&
    computerSelection == "paper") {
        tieWin();
    } else if (playerSelection == "paper" &&
    computerSelection == "scissors") {
        computerWin();
    }

    if(playerSelection == "scissors" &&
    computerSelection == "rock") {
        computerWin();
    } else if (playerSelection == "scissors" &&
    computerSelection == "paper") {
        playerWin();
    } else if (playerSelection == "scissors" &&
    computerSelection == "scissors") {
        tieWin();
    }

    if(computerWinAmount == 5) {
        alert("You lost! Better luck next time :(");
        reset();
    } else if (playerWinAmount == 5) {
        alert("You won! Congratulations! :)")
        reset();
    }
}

function reset() {
    playerScore.innerHTML = "Your score is: 0";
    computerScore.innerHTML = "The computer score is: 0";
    tieText.innerHTML = "Tie rounds: 0";
}