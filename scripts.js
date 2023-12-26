let userScore = 0;
let compScore = 0;

// playgame function displays user and computer choice
const playGame = (userChoice) => {
  const compChoice = computerChoice();

  //  winner
  const drawGame = () => {
    msg.innerText = "Game was draw. Please try again";
    msg.style.backgroundColor = "#081b31";
  };

  if (userChoice === compChoice) {
    drawGame();
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    msg.innerText = `${userChoice} beats ${compChoice}. So user Wins. `;
    msg.style.backgroundColor = "Green";
    userScore++;
  } else {
    msg.innerText = `${compChoice} beats ${userChoice}. So Computer wins. `;
    msg.style.backgroundColor = "Red";
    compScore++;
  }

  const userScorePara = document.querySelector("#user-score");
  const compScorePara = document.querySelector("#comp-score");

  // Log the scores

  userScorePara.innerText = userScore;

  compScorePara.innerText = compScore;
};

const msg = document.querySelector("#msg");

// -----------Generation of user choice---------------
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
// ---------------------------------------------------
// ------------Generation of computer choice------------------

const computerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randGen = Math.floor(Math.random() * 3);
  return options[randGen];
};
