const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const scoreValue = document.getElementById("score-value");
const bestValue = document.getElementById("best-value");
const message = document.getElementById("message");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");

const tileCount = 24;
const tileSize = canvas.width / tileCount;
const baseSpeed = 120;

const directionMap = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
};

let snake = [];
let direction = { x: 1, y: 0 };
let pendingDirection = { x: 1, y: 0 };
let food = null;
let score = 0;
let bestScore = Number(localStorage.getItem("snake-best-score")) || 0;
let intervalId = null;
let isPaused = false;
let isRunning = false;

bestValue.textContent = bestScore.toString();

function resetGame() {
  snake = [
    { x: Math.floor(tileCount / 2), y: Math.floor(tileCount / 2) },
    { x: Math.floor(tileCount / 2) - 1, y: Math.floor(tileCount / 2) },
  ];
  direction = { x: 1, y: 0 };
  pendingDirection = { x: 1, y: 0 };
  score = 0;
  food = spawnFood();
  updateScore(0);
  message.textContent = "";
}

function spawnFood() {
  while (true) {
    const position = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount),
    };

    if (!snake.some((segment) => segment.x === position.x && segment.y === position.y)) {
      return position;
    }
  }
}

function updateScore(delta) {
  score += delta;
  scoreValue.textContent = score.toString();
  if (score > bestScore) {
    bestScore = score;
    bestValue.textContent = bestScore.toString();
    localStorage.setItem("snake-best-score", bestScore.toString());
  }
}

function drawBoard() {
  ctx.fillStyle = "#0f1116";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "#8cf5a9";
  snake.forEach((segment, index) => {
    const radius = index === 0 ? 10 : 8;
    drawCell(segment.x, segment.y, radius);
  });
}

function drawFood() {
  if (!food) return;
  ctx.fillStyle = "#ff6666";
  drawCell(food.x, food.y, 10);
}

function drawCell(x, y, radius) {
  const centerX = x * tileSize + tileSize / 2;
  const centerY = y * tileSize + tileSize / 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();
}

function step() {
  if (isPaused) {
    return;
  }

  direction = validateDirectionChange(direction, pendingDirection);

  const nextHead = {
    x: snake[0].x + direction.x,
    y: snake[0].y + direction.y,
  };

  if (hasCollision(nextHead)) {
    endGame();
    return;
  }

  snake.unshift(nextHead);

  if (food && nextHead.x === food.x && nextHead.y === food.y) {
    updateScore(1);
    food = spawnFood();
    adjustSpeed();
  } else {
    snake.pop();
  }

  draw();
}

function validateDirectionChange(current, next) {
  if (current.x + next.x === 0 && current.y + next.y === 0) {
    return current;
  }
  return next;
}

function hasCollision(head) {
  const outOfBounds =
    head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount;
  if (outOfBounds) {
    return true;
  }

  return snake.some((segment) => segment.x === head.x && segment.y === head.y);
}

function draw() {
  drawBoard();
  drawFood();
  drawSnake();
}

function startGame() {
  resetGame();
  draw();
  isRunning = true;
  isPaused = false;
  setButtons();
  scheduleNextTick(baseSpeed);
}

function pauseGame() {
  if (!isRunning) {
    return;
  }
  isPaused = !isPaused;
  setButtons();
}

function endGame() {
  clearInterval(intervalId);
  intervalId = null;
  isRunning = false;
  message.textContent = `Game over! Final score: ${score}. Press Space to try again.`;
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function scheduleNextTick(speed) {
  clearInterval(intervalId);
  intervalId = setInterval(step, speed);
}

function adjustSpeed() {
  const speed = Math.max(60, baseSpeed - Math.floor(score / 5) * 10);
  scheduleNextTick(speed);
}

function setButtons() {
  startButton.disabled = isRunning;
  pauseButton.disabled = !isRunning;
  pauseButton.textContent = isPaused ? "Resume" : "Pause";
  message.textContent = isPaused ? "Paused" : "";
}

function handleKeydown(event) {
  const key = event.key;
  if (directionMap[key]) {
    event.preventDefault();
    pendingDirection = directionMap[key];
  } else if (key === " " || key === "Spacebar") {
    event.preventDefault();
    if (!isRunning) {
      startGame();
    } else {
      pauseGame();
    }
  } else if (key === "Enter" && !isRunning) {
    startGame();
  }
}

startButton.addEventListener("click", () => {
  if (!isRunning) {
    startGame();
  }
});

pauseButton.addEventListener("click", pauseGame);
window.addEventListener("keydown", handleKeydown, { passive: false });

draw();
setButtons();
message.textContent = "Press Start or Space to begin.";
