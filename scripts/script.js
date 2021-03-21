function computerRandom() {

    let gameOptions = ["Rock", "Paper", "Scissors"]

    let randomItem = gameOptions[Math.floor(Math.random()*gameOptions.length)];

    randomItem = randomItem.toLowerCase();

    return randomItem;
}

let playerScore = 0;

let computerScore = 0;

    
function playRound(playerSelection, computerSelection) {

    if(playerSelection == "rock" && computerSelection == "rock") {
        return "It's a Tie! Play again.";
    }

    else if(playerSelection == "rock" && computerSelection == "paper") {
        ++computerScore;
        return "You lose! Paper beats Rock.";
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerScore;
        return "You win! Rock beats Scissors.";
    }

    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a Tie! Play again.";
    }

    if(playerSelection == "paper" && computerSelection == "rock") {
        ++playerScore;
        return "You Win! Paper beats Rock.";
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        ++computerScore;
        return "You lose! Scissors beat Paper."
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a Tie! Play again.";        
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        ++computerScore;
        return "You lose! Rock beats Scissors.";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerScore;
        return "You win! Scissors beat Paper.";
    }
    else {
        return "That should't happen";
        }
}


function game() {
    let playerSelection = prompt("Select between Rock, Paper and Scissors");

    playerSelection = playerSelection.toLowerCase();

    let computerSelection = computerRandom();

    console.log(playRound(playerSelection, computerSelection));

    console.log(playerScore);
}


function checkScore() {

    if(playerScore > computerScore){
        console.log("You won the match!")
    }
    else if(computerScore > playerScore) {
        console.log("You lost the match!")
    }
}



game()
game()
game()
game()
game()
checkScore()