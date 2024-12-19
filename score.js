let playerOne = document.querySelector('#playerOne');
let playerTwo = document.querySelector('#playerTwo');
let inputOne = document.querySelector('#inputOne');
let inputTwo = document.querySelector('#inputTwo');
let resetButton = document.querySelector('#reset');
let numInput = document.querySelector('#num');
let maxGame = document.querySelector('#maxGame');

let p1score = 0;
let p2score = 0;
let gameOver = false;
let winningScore = 5;

function reset() {
  inputOne.innerHTML = 0;
  inputTwo.innerHTML = 0;
  p1score = 0;
  p2score = 0;
  gameOver = false;
  inputOne.classList.remove('winner');
  inputTwo.classList.remove('winner');
}

resetButton.addEventListener('click', function() {
  reset();
});

numInput.addEventListener('change', function() {
  console.log('HELLO!');
  maxGame.innerHTML = numInput.value;
  winningScore = Number(numInput.value);
  reset();
})

playerOne.addEventListener('click', function() { 
  if (!gameOver) {
    p1score++;
    
    if (p1score === winningScore) {
        console.log('GAME OVER!');
        inputOne.classList.add('winner');
        gameOver = true;
    }
    inputOne.innerHTML = p1score;
  }
});

playerTwo.addEventListener('click', function() { 
  if (!gameOver) {
    p2score++;
    if(p2score === winningScore) {
      inputTwo.classList.add('winner');
      console.log("game OVER!");
      gameOver = true;
    }
    inputTwo.innerHTML = p2score;
  }
});

