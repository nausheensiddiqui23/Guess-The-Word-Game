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

