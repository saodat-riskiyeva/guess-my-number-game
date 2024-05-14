'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const backgroundStyle = function (style) {
  document.querySelector('body').style.backgroundColor = style;
};
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const highScoreNumber = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const scoreNumber = function (scoreContent) {
  document.querySelector('.score').textContent = scoreContent;
};
const guessNumber = function (guessNumber) {
  document.querySelector('.guess').value = guessNumber;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(secretNumber);
    backgroundStyle('#60b347');
    numberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      highScoreNumber(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score--;
      scoreNumber(score);
    } else {
      displayMessage('You lost the game!');
      scoreNumber(0);
    }
  }
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  displayNumber('?');
  backgroundStyle('#222');
  numberWidth('15rem');
  scoreNumber(score);
  guessNumber('');
});
