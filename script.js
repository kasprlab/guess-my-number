console.log("Hi");
// step 1: grab the things that will change in the game

const guess = document.querySelector(".guess");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const checkBtn = document.querySelector(".check");

// step 2: generate random number
const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// step 3: add event listener to check button
checkBtn.addEventListener("click", function () {
  if (score) {
    if (+guess.value <= 0 || +guess.value > 20 || !guess) {
      message.textContent = "wrong input. try again";
    } else if (+guess.value === randomNumber) {
      message.textContent = "win";
      number.textContent = randomNumber;
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    } else if (+guess.value < randomNumber) {
      message.textContent = "too low";
      score--;
    } else if (+guess.value > randomNumber) {
      message.textContent = "too high";
      score--;
    }
  }

  if (!score) {
    message.textContent = "You lose the game";
  }

  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highScore;
});
