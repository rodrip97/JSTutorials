'use sctrict';

/* INTRO TO DOM
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 0;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 5;
*/

/*
const x = function () {
  console.log(
    'This is a function expression. Just needed to refresh memory on this'
  );
};
*/

/* +++++++++ Game Login  ++++++++++++ */

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//event listener for the click.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please Input Valid Number🤷‍♂️🤷‍♂️🤷‍♂️';
  } else if (guess === secretNumber) {
    // Handle win
    document.querySelector('.message').textContent =
      'Nice Job you got it!!! 🎉🎉🎉🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    score++;
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Handle low bal
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 😂';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 😂';
    }

    //Handle Hi - ball
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High 😁';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 😂';
    }
  }
});

//event listener for try again (This is my implementation, lets see how max does it.)
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'So you wanna go again 🤠🤠';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.floor(Math.random() * 20) + 1;
});
