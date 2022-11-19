"use strict";

var gameScore = 20; /* Starting gamescore displayed on the UI*/
let highScore = 0;
var secretNumber =
  Math.trunc(Math.random() * 20) + 1; /* generating a random secret number*/

const setMessageContent = function (msg = "Start guessing...") {
  document.querySelector(".message").textContent = msg;
};

const setScore = function (score = 20) {
  document.querySelector(".score").textContent = score;
};

const setBodyBg = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const setSecretNumber = function (secNum = "?") {
  document.querySelector(".number").textContent = secNum;
};

const setSecretWidth = function (width = "15rem") {
  document.querySelector(".number").style.width = width;
};
/* storing the random secret number on the UI*/
setScore(gameScore);

//Logic for the game when the "Check!" button is clicked
document.querySelector(".check").addEventListener("click", function () {
  //taking the user input and changing it to a number for comparing it with the secret number
  const guess = Number(document.querySelector(".guess").value);

  // handling empty user input for guesses
  if (!guess) {
    setMessageContent("You didn't enter any number at all!");
    // when the user's guess is correct
  } else if (guess === secretNumber) {
    setSecretNumber(secretNumber);
    setMessageContent("Correct Number!");
    setBodyBg("#60b347");
    setSecretWidth("30rem");

    //setting highscore when the player's guess is correct
    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector(".highscore").textContent = gameScore;
    }
  } else if (guess !== secretNumber) {
    // when the user's guess is not equal to the secret number
    guess > secretNumber
      ? setMessageContent("Try entering a lower number!")
      : setMessageContent("Try entering a higher number!");
    if (gameScore > 1) {
      gameScore--;
      setScore(gameScore);
    } else {
      setMessageContent("You lost! Try playing again.");
      setScore(0);
    }
  }
});

// play again logic

document.querySelector(".again").addEventListener("click", () => {
  secretNumber =
    Math.trunc(Math.random() * 20) + 1; /* generating a random secret number*/
  gameScore = 20;
  setSecretNumber();
  setScore(gameScore);
  document.querySelector(".guess").value = "";
  setBodyBg("#222");
  setSecretWidth();
  setMessageContent();
});
