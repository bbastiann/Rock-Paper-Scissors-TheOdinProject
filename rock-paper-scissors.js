
function getRandomValue() {
    let max = 3;
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    var randomValue = getRandomValue();
    switch (randomValue) {
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Select: rock, paper or scissors");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    rounds++;
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}`;

            } else if (computerChoice == "rock") {
                return "tie";

            } else if (computerChoice == "scissors") {
                humanScore++;
                return `You Win! ${humanChoice} beats ${computerChoice}`;
            }
            break;
        case "paper":
            if (computerChoice == "paper") {
                return "Tie";

            } else if (computerChoice == "rock") {
                humanScore++;
                return `You Win! ${humanChoice} beats ${computerChoice}`;

            } else if (computerChoice == "scissors") {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            }
            break;
        case "scissors":
            if (computerChoice == "paper") {
                humanScore++;
                return `You Win! ${humanChoice} beats ${computerChoice}`;

            } else if (computerChoice == "rock") {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}`;

            } else if (computerChoice == "scissors") {
                return "Tie";
            }
            break;

    }

}

let humanChoice;
let computerChoice;

let rounds = 0;

function playGame(myChoice) {

    humanChoice = myChoice;
    computerChoice = getComputerChoice();
    let resultado = playRound(humanChoice, computerChoice);

    if(rounds == 5){
        if (humanScore > computerScore) {
            console.log("YOU WIN!")
        } else if (computerScore > computerScore) {
            console.log("YOU LOOSE!");
        } else {
            console.log("TIE");
        }
    }

}


let buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";

let buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";

let buttonScissor = document.createElement("button");
buttonScissor.textContent = "Scissor";

document.body.appendChild(buttonRock);
document.body.appendChild(buttonPaper);
document.body.appendChild(buttonScissor);

buttonRock.addEventListener("click", e => { playGame("rock"); });
buttonPaper.addEventListener("click", e => { playGame("paper"); });
buttonScissor.addEventListener("click", e => { playGame("scissor"); });

//console.log(playRound(playGame()));

