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

const numberGuess = Math.floor(Math.random() * 21);
console.log(numberGuess);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please Input Valid Number🤷‍♂️🤷‍♂️🤷‍♂️';
  }
  if (guess == numberGuess) {
    document.querySelector('.message').textContent = 'Nice Job you got it!!!';
  }
});
