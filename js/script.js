// DOM Elements
const displayNumbers = document.getElementById("display-numbers");
const inputContainer = document.getElementById("input-container");
const guess = document.getElementById("guess-form");
const result = document.getElementById("result");
const timerElement = document.getElementById("timer");

const startButton = document.getElementById("start-button");
const countdownDisplay = document.getElementById("countdown-display");

startButton.addEventListener("click", () => {
let countdown = 5;

const timerInterval = setInterval(() => {
countdownDisplay.innerText = `Restano: ${countdown} secondi`;
countdown--;

if (countdown < 0) {
clearInterval(timerInterval);
countdownDisplay.innerText = "Il tempo è scaduto";
}
}, 1000);
});