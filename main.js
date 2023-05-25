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
//console.log(getComputerSelection());

function round(playerSelection, computerSelection) {
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
        return "It's a tie!";
    }

    if (response=== "scissors" && computerSelection === "paper") {
        return "Scissors beats paper, you win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock beats scissors, you lose!";
    }

    if (response === "rock" && computerSelection === "scissors") {
        return "Rock beats scissors, you win!";
    } else if (response === "rock" && computerSelection === "paper") {
        return "Paper beats rock, you lose!";
    }

    if (response === "paper" && computerSelection === "rock") {
        return "Paper beats rock, you win!"
    } else if (response === "paper" && computerSelection === "scissors") {
        return "Scissors beats paper, you lose!"
    }
}
console.log(round());

