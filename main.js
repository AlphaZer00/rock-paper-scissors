//----Rock, Paper, Scissors----
//  This program is a simple rock, paper, scissors game in which the user will make a selection
//  and that will be compared to a random selection by the computer for five rounds.
//
//  Planning
//  Functions needed:
//      - Computer's random choice
//      - A way for the user to make a selection
//      - Comparison between user's and computer's selection 
//      - Function to keep score
//      - Function to return a message that explains who won and and option to play again
//      - Game function that loops comparison function five times and displays score

let computerSelection;
let outcome;

function getComputerSelection() {
    
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerSelection = "rock";
    } else if (randomNumber === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors?",);
    response = playerSelection.toLowerCase();
    computerSelection = getComputerSelection();

    console.log(computerSelection);

    if ((response !== "rock" ) && (response !== "paper") && (response !== "scissors" )) {
        alert("That is not a valid input! Please check your spelling.");
        playerSelection = prompt("Rock, Paper, or Scissors?",);
        response = playerSelection.toLowerCase();
    }

    console.log(response);

    if (response === computerSelection) {
        outcome = "It's a tie!";
        return outcome;
    }

    if (response === "scissors" && computerSelection === "paper") {
        outcome = "Scissors beats paper, you win!";
        return outcome;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        outcome = "Rock beats scissors, you lose!";
        return outcome;
    }

    if (response === "rock" && computerSelection === "scissors") {
        outcome = "Rock beats scissors, you win!";
        return outcome;
    } else if (response === "rock" && computerSelection === "paper") {
        outcome = "Paper beats rock, you lose!";
        return outcome;
    }

    if (response === "paper" && computerSelection === "rock") {
        outcome = "Paper beats rock, you win!"
        return outcome;
    } else if (response === "paper" && computerSelection === "scissors") {
        outcome = "Scissors beats paper, you lose!";
        return outcome;
    }
}


function playGame() {
    let userScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
    playRound();
    if (outcome.slice(-5) === "lose!") {
        computerScore = ++computerScore;
    } else if (outcome.slice(-4) === "win!") {
        userScore = ++userScore;
    } 

    console.log(userScore);
    let scoreCounter =
    `Your Score: ${userScore}
Computer Score: ${computerScore}`;
    console.log(scoreCounter);
    }

    if (userScore > computerScore) {
        message = "Game over, You won!";
        console.log(message);
    } else if (userScore < computerScore) {
        message = "Game over, You lost!";
        console.log(message);
    } else {
        message = "Game over! It's a tie!"
        console.log(message);
    }
}