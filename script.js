let userScoreText = document.querySelector("#user-score")
let compScoreText = document.querySelector("#comp-score")
let resetBtn = document.querySelector(".resetButton")
let msg = document.querySelector("#msg")

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex]
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        msg.innerHTML = "Draw!"
        msg.style.color = "darkblue"

    }

    else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;

            /** Short for this **/

            /*if (compChoice === "paper") {
                userWin = false
            }
            else {
                userWin = true
            }*/
        }

        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }

        else if (userChoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, compChoice)
    }
}

const showWinner = (userWin, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreText.innerHTML = userScore;
        msg.innerHTML = `You Won! Computer choosed ${compChoice}`
        msg.style.color = "green"
    }
    else {
        compScore++;
        compScoreText.innerHTML = compScore;
        msg.innerHTML = `You Loose! Computer choosed ${compChoice}`
        msg.style.color = "red"

    }
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    userScoreText.innerHTML = userScore;
    compScoreText.innerHTML = compScore;
    msg.innerHTML = "Your Move"
    msg.style.color = "#414141"
}

resetBtn.addEventListener("click", () => {
    resetGame();
})