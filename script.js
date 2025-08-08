

let userScore = 0;
let computerScore = 0;


const resEl = document.getElementById("res");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

const choices = ["rock", "paper", "scissor"];


document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissor").addEventListener("click", () => playGame("scissor"));


function playGame(userChoice) {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (userChoice === compChoice) {
        result = "It's a Draw! 😐";
    } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        result = "You Won! 🎉";
        userScore+=1;
    } else {
        result = "You Lost! 😢";
        computerScore+=1;
    }

    
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;

    
    resEl.textContent = result;
    resEl.style.animation = "none"; 
    void resEl.offsetWidth; 
    resEl.style.animation = "fadeInScale 0.5s forwards";
}
