const wordList = [
  { word: "apple", hint: "A common fruit" },
  { word: "python", hint: "A programming language and a snake" },
  { word: "banana", hint: "Yellow fruit loved by monkeys" },
  { word: "react", hint: "A JavaScript library" },
  { word: "school", hint: "Place to learn" },
  { word: "winter", hint: "Cold season" }
];
let selectedWord = "";
let hint = "";
let guessedLetters = [];
let remainingAttempts = 6;
let displayWord = [];
let score = 0;
function startGame() {
  const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  selectedWord = randomWord.word;
  hint = randomWord.hint;
  guessedLetters = [];
  remainingAttempts = 6;
  displayWord = Array(selectedWord.length).fill("_");
  updateDisplay();
}
function updateDisplay() {
  document.getElementById("word").textContent = displayWord.join(" ");
  document.getElementById("attempts").textContent = "Attempts left: " + remainingAttempts;
  document.getElementById("guessed").textContent = "Guessed: " + (guessedLetters.join(", ") || "-");
  document.getElementById("hint").innerHTML = `<strong>Hint:</strong> ${hint}`;
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("message").textContent = "";
  document.getElementById("letterInput").value = "";
  document.getElementById("wordInput").value = "";
}
function guessLetter() {
  const input = document.getElementById("letterInput");
  const letter = input.value.toLowerCase();
  input.value = "";

  if (!letter.match(/[a-z]/i) || guessedLetters.includes(letter)) {
    alert("Please enter a valid and unused letter.");
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
     remainingAttempts--;
  }

  updateDisplay();
  checkGameStatus();
}
function guessFullWord() {
  const wordGuess = document.getElementById("wordInput").value.toLowerCase();
if (wordGuess === selectedWord) {
    displayWord = selectedWord.split("");
    score++;
    document.getElementById("message").textContent = "🎉 Correct! You guessed the word!";
    updateDisplay();
    disableInputs();
  } else {
    remainingAttempts--;
    document.getElementById("message").textContent = "❌ Incorrect full word guess!";
    updateDisplay();
    checkGameStatus();
  }
}
function checkGameStatus() {
  if (displayWord.join("") === selectedWord) {
    score++;
    document.getElementById("message").textContent = "🎉 You Win!";
    disableInputs();
  } else if (remainingAttempts <= 0) {
    document.getElementById("message").textContent = `😢 You Lost! The word was "${selectedWord}".`;
    disableInputs();
  }
}
function disableInputs() {
  document.getElementById("letterInput").disabled = true;
  document.getElementById("wordInput").disabled = true;
}
function resetGame() {
  document.getElementById("letterInput").disabled = false;
  document.getElementById("wordInput").disabled = false;
  startGame();
}
window.onload = startGame;

