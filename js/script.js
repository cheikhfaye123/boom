const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');

let timeLeft = 5;
let intervalId;
let randomNumber;

function startGame() {
  userInput.disabled = false;
  result.textContent = '';
  timeLeft = 5;
  randomNumber = Math.floor(Math.random() * 3) + 1;
  
  return new Promise((resolve) => {
    intervalId = setInterval(() => {
      countdown.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(intervalId);
        userInput.disabled = true;
        resolve();
      }
      timeLeft--;
    }, 1000);
  });
}
