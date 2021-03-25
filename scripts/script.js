function computerRandom() {

    let gameOptions = ["Rock", "Paper", "Scissors"]

    let randomItem = gameOptions[Math.floor(Math.random() * gameOptions.length)];

    randomItem = randomItem.toLowerCase();

    return randomItem;
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        return "It's a Tie! Play again.";
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose! Paper beats Rock.";
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors.";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock.";
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose! Scissors beat Paper."
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors.";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You win! Scissors beat Paper.";
    }
    else {
        return "That should't happen";
    }

}

let playerScore = 0;
let computerScore = 0;

function game() {

    const playerRock = document.querySelector("#playerRock");
    const playerPaper = document.querySelector("#playerPaper");
    const playerScissors = document.querySelector("#playerScissors");
    let playerPoints = document.querySelector("#playerPoints");
    let computerPoints = document.querySelector("#computerPoints")
    let messagePara = document.querySelector("#messagePara");



    playerRock.addEventListener("click", function () {
        messagePara.textContent = playRound("rock", computerRandom())
        playerPoints.textContent = `${playerScore}`;
        computerPoints.textContent = `${computerScore}`;
        if (playerScore === 5) {
            alert("The Player Won!");
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore === 5) {
            alert("The Computer Won!");
            playerScore = 0;
            computerScore = 0;
        }
    });

    playerPaper.addEventListener("click", function () {
        messagePara.textContent = playRound("paper", computerRandom())
        playerPoints.textContent = `${playerScore}`;
        computerPoints.textContent = `${computerScore}`;
        if (playerScore === 5) {
            alert("The Player Won!");
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore === 5) {
            alert("The Computer Won!");
            playerScore = 0;
            computerScore = 0;
        }
    });

    playerScissors.addEventListener("click", function () {
        messagePara.textContent = playRound("scissors", computerRandom())
        playerPoints.textContent = `${playerScore}`;
        computerPoints.textContent = `${computerScore}`;
        if (playerScore === 5) {
            alert("The Player Won!");
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore === 5) {
            alert("The Computer Won!");
            playerScore = 0;
            computerScore = 0;
        }
    });


}


game()