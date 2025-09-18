'use strict';

// // Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game();

const button = document.querySelector('.start');

const win = document.querySelector('.message-win');
const lose = document.querySelector('.message-lose');
const startMessage = document.querySelector('.message-start');

const score = document.querySelector('.game-score');

button.addEventListener('click', () => {
  game.start();

  button.textContent = 'Restart';
  button.classList.remove('start');
  button.classList.add('restart');

  render(game.getState());
});

document.addEventListener('keydown', (evnt) => {
  if (evnt.key === 'ArrowLeft') {
    game.moveLeft();
  }

  if (evnt.key === 'ArrowRight') {
    game.moveRight();
  }

  if (evnt.key === 'ArrowDown') {
    game.moveDown();
  }

  if (evnt.key === 'ArrowUp') {
    game.moveUp();
  }

  render(game.getState());
});

function render(board) {
  const rows = document.querySelectorAll('.game-field .field-row');

  board.forEach((row, rowIndex) => {
    const cells = rows[rowIndex].querySelectorAll('.field-cell');

    row.forEach((value, colIndex) => {
      const cell = cells[colIndex];

      if (value > 0) {
        cell.textContent = value;
        cell.className = 'field-cell';
        cell.classList.add(`field-cell--${value}`);
      } else {
        cell.textContent = '';
        cell.className = 'field-cell';
      }
    });
  });

  if (game.getScore() >= 0) {
    score.textContent = game.getScore();
  }

  if (game.status === 'win') {
    startMessage.classList.add('hidden');

    win.classList.remove('hidden');
  }

  if (game.status === 'lose') {
    startMessage.classList.add('hidden');

    lose.classList.remove('hidden');
  }
}

// // Write your code here
