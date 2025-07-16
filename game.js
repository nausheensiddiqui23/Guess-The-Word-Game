const words = ["javascript", "python", "react", "node", "html", "css"];
let selectedWord = "";
let displayWord = [];
let guessedLetters = [];
let attempts = 6;

function initGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord = Array(selectedWord.length).fill("_");
  guessedLetters = [];
  attempts = 6;

  updateDisplay();
}

function updateDisplay() {
  document.getElementById("word-display").textContent = displayWord.join(" ");
  document.getElementById("guessed-letters").textContent = guessedLetters.join(", ");
  document.getElementById("remaining-attempts").textContent = attempts;
  document.getElementById("message").textContent = "";
}

function guessLetter() {
  const input = document.getElementById("letter-input");
  let letter = input.value.toLowerCase();
  input.value = "";

  if (!letter.match(/[a-z]/i) || guessedLetters.includes(letter)) {
    return;
  }

  guessedLetters.push(letter);

  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        displayWord[i] = letter;
      }
    }
  } else {
    attempts--;
  }

  updateDisplay();
  checkGameStatus();
}

function checkGameStatus() {
  if (displayWord.join("") === selectedWord) {
    document.getElementById("message").textContent = "🎉 You guessed it!";
  } else if (attempts === 0) {
    document.getElementById("message").textContent = `😢 You lost! The word was: ${selectedWord}`;
  }
}

function resetGame() {
  initGame();
}

initGame();
