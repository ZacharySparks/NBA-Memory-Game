// I used AI to help build the timer logic, localStorage handling, and card flipping game logic.
const images = [
  "images/StephenCurry.jpg",
  "images/LeBronJames.jpg",
  "images/NikolaJokic.jpg",
  "images/ShaiGilgeous-Alexander.jpg",
  "images/GiannisAntetokounmpo.jpg",
  "images/JaysonTatum.jpg",
  "images/AnthonyEdwards.jpg",
  "images/VictorWembanyama.jpg"
];
const cards = [...images, ...images];

const grid = document.getElementById("grid");
const restartBtn = document.getElementById("restartBtn");
const timerDisplay = document.getElementById("timer");
const bestTimeDisplay = document.getElementById("bestTime");

let flippedCards = [];
let matchedCount = 0;

let timer = null;
let elapsedTime = 0;
let timerStarted = false;

let bestTime = localStorage.getItem("memoryGameBestTime");
if (bestTime !== null) {
  bestTimeDisplay.textContent = `Best Time: ${bestTime}s`;
} else {
  bestTimeDisplay.textContent = "Best Time: --";
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5); // I used AI to understand how to shuffle an array randomly.
}

function startTimer() {
  timerStarted = true;
  timer = setInterval(() => {
    elapsedTime += 100;
    timerDisplay.textContent = `Time: ${(elapsedTime / 1000).toFixed(1)}s`;
  }, 100); // I used AI to learn how to update the timer every tenth of a second.
}

function stopTimer() {
  clearInterval(timer); // I used AI to understand how to stop a JavaScript interval.
  timer = null;
  timerStarted = false;
}

function checkWin() {
  if (matchedCount === cards.length / 2) {
    stopTimer();
    const currentTimeSeconds = (elapsedTime / 1000).toFixed(1);
    if (bestTime === null || parseFloat(currentTimeSeconds) < parseFloat(bestTime)) {
      bestTime = currentTimeSeconds;
      localStorage.setItem("memoryGameBestTime", bestTime);
      bestTimeDisplay.textContent = `Best Time: ${bestTime}s`;
    }
  }
}

function createBoard() {
  grid.innerHTML = "";
  shuffle(cards);
  flippedCards = [];
  matchedCount = 0;

  stopTimer();
  elapsedTime = 0;
  timerDisplay.textContent = `Time: 0.0s`;

  cards.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back"><img src="${image}" alt="NBA Player" /></div>
      </div>
    `;
    card.style.visibility = "visible";
    card.classList.remove("flipped");
    card.addEventListener("click", () => flipCard(card));
    grid.appendChild(card);
  });
}

function flipCard(card) {
  if (flippedCards.length === 2 || card.classList.contains("flipped") || card.style.visibility === "hidden") return;

  if (!timerStarted) startTimer(); // I asked AI how to start the timer only on first click.

  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const [first, second] = flippedCards;

    if (first.dataset.image === second.dataset.image) {
      setTimeout(() => {
        first.style.visibility = "hidden";
        second.style.visibility = "hidden";
        flippedCards = [];
        matchedCount++;
        checkWin();
      }, 500);
    } else {
      setTimeout(() => {
        first.classList.remove("flipped");
        second.classList.remove("flipped");
        flippedCards = [];
      }, 800);
    }
  }
}

restartBtn.addEventListener("click", createBoard); // I used AI to understand how to restart the game.

createBoard(); // I asked AI how to auto-start the game on page load.
