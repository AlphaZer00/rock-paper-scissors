/*                               ----Rock, Paper, Scissors----
  This program is a simple rock, paper, scissors game in which the user will make a selection
  and that will be compared to a random selection by the computer for five rounds.

  Planning
  Functions needed:
      - Computer's random choice
      - A way for the user to make a selection
      - Comparison between user's and computer's selection 
      - Function to keep score
      - Function to return a message that explains who won and and option to play again
      - Game function that loops comparison function five times and displays score
*/

let computerSelection;
let outcome;
let userScore = 0;
let computerScore = 0;
let scoreCounter =
        `Your Score: ${userScore}
        Computer Score: ${computerScore}`;
const scoreDisplay = document.querySelector(".scoreDisplay");
scoreDisplay.textContent = scoreCounter;
const dialogue = document.querySelector(".dialogue");
dialogue.textContent = "Click one of the buttons to make your selection and start the game, first to win 5 rounds wins!";

const userPicture = document.querySelector(".userPicture");
const computerPicture = document.querySelector(".computerPicture");

    

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

function changeImage() {
    if (response = "rock") {
        userPicture.src = "images/rock-vector.jpg";
    } else if (response = "paper") {
        userPicture.src = "images/paper-vector.jpg";
    } else if (response = "scissors") {
        userPicture.src = "images/scissors-vector.jpg";
    }

    if (computerSelection = "rock") {
        computerPicture.src = "images/rock-vector.jpg";
    } else if (computerSelection = "paper") {
        computerPicture.src = "images/paper-vector.jpg";
    } else if (computerSelection = "scissors") {
        computerPicture.src = "images/scissors-vector.jpg";
    }
}

function playRound(playerSelection) {
    response = playerSelection;
    computerSelection = getComputerSelection();
    console.log(computerSelection);

    // if ((response !== "rock" ) || (response !== "paper") || (response !== "scissors" )) {
    //     alert("That is not a valid input! Please check your spelling.");
    //     playerSelection = prompt("Rock, Paper, or Scissors?",);
    //     response = playerSelection.toLowerCase();
    // }

    console.log(response);

    if (response === computerSelection) {
        outcome = "It's a tie!";
        updateScore();
        return outcome;
    }

    if (response === "scissors" && computerSelection === "paper") {
        outcome = "Scissors beats paper, you win!";
        updateScore();
        return outcome;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        outcome = "Rock beats scissors, you lose!";
        updateScore();
        return outcome;
    }

    if (response === "rock" && computerSelection === "scissors") {
        outcome = "Rock beats scissors, you win!";
        updateScore();
        return outcome;
    } else if (response === "rock" && computerSelection === "paper") {
        outcome = "Paper beats rock, you lose!";
        updateScore();
        return outcome;
    }

    if (response === "paper" && computerSelection === "rock") {
        outcome = "Paper beats rock, you win!"
        updateScore();
        return outcome;
    } else if (response === "paper" && computerSelection === "scissors") {
        outcome = "Scissors beats paper, you lose!";
        updateScore();
        return outcome;
    }

    function updateScore() {
        dialogue.textContent = outcome;
        if (userScore < 5 && computerScore < 5) {
             if (outcome.slice(-5) === "lose!") {
                computerScore = ++computerScore;
            } else if (outcome.slice(-4) === "win!") {
                userScore = ++userScore;
            }
        } 
        
        console.log(userScore);

        scoreCounter =
        `Your Score: ${userScore}
        Computer Score: ${computerScore}`;
        scoreDisplay.textContent = scoreCounter;    


        if (userScore === 5) {
            message = "Game over, You won!";
            dialogue.textContent = message;

        } else if (computerScore === 5) {
            message = "Game over, You lost!";
            dialogue.textContent = message;
        // } else if (userScore > computerScore) {
        //     dialogue.textContent = "You're in the lead!";
        // } else if (userScore < computerScore) {
        //     dialogue.textContent = "You're behind!";
        }
    }

    function resetState() {
        f
    }
}




const rock = document.querySelector(".rockButton");
rock.addEventListener('click', () => playRound("rock"));

const paper = document.querySelector(".paperButton");
paper.addEventListener('click', () => playRound("paper"));

const scissors = document.querySelector(".scissorsButton");
scissors.addEventListener('click', () => playRound("scissors"))