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

function getComputerSelection() {
    let computerSelection;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerSelection = "Rock";
    } else if (randomNumber === 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}
console.log(getComputerSelection());