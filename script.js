let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const reset = document.querySelector("#reset");


const computerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = () => {
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "#b694d5";
};


const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Won!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "It's Your Turn";
    msg.style.backgroundColor = "rgb(182, 148, 213)";
};

reset.addEventListener("click", resetGame);


const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // generate the computer choice
    const compChoice = computerChoice();
    console.log("computer choice =", compChoice);

    if (userChoice === compChoice) {
        // game is draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }

        else if (userChoice === "paper") {
            // scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        }

        else {
            // paper, rock
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});