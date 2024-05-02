// Building rock paper and scissors //
let userScore = 0;
let compScore = 0;

// To access the three choices.
const choices = document.querySelectorAll(".choice");

//To access the message tag
const msg = document.querySelector(".msg");

//To access user and computer scores
const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");

// To display the result.
const showWinner = (userWin) => {
    if(userWin) {
        console.log("You win!");
        msg.innerText = 'You Win!';
        userScore++;
        userScorePara.innerText = "You: " + userScore;
        console.log("User score = ", userScore);
        console.log("Computer score = ", compScore);  
    }else {
        console.log("You lose.");
        msg.innerText = 'Computer won. Try again.'
        compScore++;
        compScorePara.innerText = "Computer: " + compScore;
        console.log("User score = ", userScore);
        console.log("Computer score = ", compScore);
    }
}

const genCompChoice = () => {
    // To generate random numbers to use as indices of out array.
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

// Game logic
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    //Generating computer choice.
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice); 
    let userWin = true;
    //Draw game
    if(userChoice === compChoice) {
        console.log("Game was draw.");
        msg.innerText = 'Game was draw! Try again.'
    }

    else {
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }

        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }

        else {
            userWin = compChoice === "rock" ? false : true;
        }
    }

    showWinner(userWin);
};

choices.forEach((choice) => {
    //Getting "click" input from the user.
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});