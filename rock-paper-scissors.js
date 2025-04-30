
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


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {


    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}`;

            } else if (computerChoice == "rock") {
                return `Tie ${humanChoice} = ${computerChoice}`;

            } else if (computerChoice == "scissors") {
                humanScore++;
                return `You Win! ${humanChoice} beats ${computerChoice}`;
            }
            break;
        case "paper":
            if (computerChoice == "paper") {
                return `Tie ${humanChoice} = ${computerChoice}`;

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
                return `Tie ${humanChoice} = ${computerChoice}`;
            }
            break;

    }

}

let humanChoice;
let computerChoice;

let rounds = 1;

function playGame(myChoice) {

    if(rounds >= 5){
        console.log("Resultado Final")
        if (humanScore > computerScore) {
            console.log("YOU WIN")
            GameText.textContent = `YOU WIN! Your Score: ${humanScore}, Computer Score: ${computerScore}`;
        } 
        if (humanScore < computerScore) {
            console.log("YOU LOOSE")
            GameText.textContent = `YOU LOOSE! Your Score: ${humanScore}, Computer Score: ${computerScore}`;
        } 
        if(humanScore == computerScore){
            console.log("TIE")
            GameText.textContent = `TIE! Your Score: ${humanScore}, Computer Score: ${computerScore}`;
        }
        return
    }

    rounds++;
    humanChoice = myChoice;
    computerChoice = getComputerChoice();
    let resultado = playRound(humanChoice, computerChoice);
    GameText.textContent = resultado;

}

let GameText = document.createElement("p");
let buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
let buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
let buttonScissor = document.createElement("button");
buttonScissor.textContent = "Scissors";

document.body.appendChild(GameText);

document.body.appendChild(buttonRock);
document.body.appendChild(buttonPaper);
document.body.appendChild(buttonScissor);

buttonRock.addEventListener("click", e => { playGame("rock"); });
buttonPaper.addEventListener("click", e => { playGame("paper"); });
buttonScissor.addEventListener("click", e => { playGame("scissors"); });

//console.log(playRound(playGame()));

