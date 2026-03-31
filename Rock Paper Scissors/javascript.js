let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scores = document.querySelectorAll(".score");
const userS = document.querySelector("#user_score");
const compS = document.querySelector("#comp_score");
 
const resetGame = () => {
    userScore = 0;
    compScore = 0;
}

const drawGame = (userChoice , compChoice) => {
    console.log("Game was draw");
    msg.innerText = `Draw! ${userChoice} draws against ${compChoice}`;
    msg.style.backgroundColor = "black";
}
const showWinner = (userWin, userChoice , compChoice) => {
    if(userWin) {
        console.log("You Won!");
        userScore++;
        userS.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green"; 
    }
    
    else{
        console.log("You lost!");
        compScore++;
        compS.innerText = compScore;
         msg.innerText = `You lost! ${compChoice} beats your ${userChoice} `;
         msg.style.backgroundColor = "Red"; 
    }
    }

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("Userchoice = " , userChoice);
    const compChoice = genCompChoice();
     console.log("Compchoice = " , compChoice);
    
     if(userChoice === compChoice){
        drawGame( userChoice , compChoice);
     }
     else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = (compChoice === "paper") ? false : true;
        }
        else if(userChoice === "paper"){
             userWin = (compChoice === "scissors") ? false : true;
        }
        else{
             userWin = (compChoice === "rock") ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
     }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});