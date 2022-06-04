let randomNumber;
let score = 20;
let highScore = 0;
let winningState = false;

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const showRandomNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const showScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const showHighScore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};

const resetGuess = function () {
  document.querySelector(".guess").value = "";
};

const setRandomNumber = function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
};

const setWinningState = function () {
  if (!winningState) {
    document.querySelector(".number").classList.remove("win");
    document.querySelector("body").classList.remove("win");
  }

  if (winningState) {
    document.querySelector(".number").classList.add("win");
    document.querySelector("body").classList.add("win");
    winningState = false;
  }
};

setRandomNumber();

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score) {
    if (guess <= 0 || guess > 20) {
      showMessage("⛔️ Wrong input. Try again!");
    } else if (guess === randomNumber) {
      highScore = score;
      winningState = true;

      showRandomNumber(randomNumber);
      showMessage("You win! 🏆");
      showHighScore(highScore);
      setWinningState();
    } else if (guess !== randomNumber) {
      guess < randomNumber
        ? showMessage("📉 Too low")
        : showMessage("📈 Too high");
      score--;
    }
  }

  if (!score) {
    showMessage("💥 You lost the game!");
  }

  showScore(score);
});

againBtn.addEventListener("click", function () {
  score = 20;

  setRandomNumber();
  showRandomNumber("?");
  showMessage("Start guessing..");
  showScore(score);
  resetGuess();
  setWinningState();
});
