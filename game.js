const words = [
    "java",
    "javascript",
    "python",
    "pascal",
    "ruby",
    "perl",
    "swift",
    "kotlin",
];
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
console.log(selectedWord);
let guessedlist = [];
let displayWord = "";
for (let i = 0; i < selectedWord.length; i++) {
    displayWord += "_ ";
}
document.getElementById("displayWord").textContent = displayWord;
function guessLetter() {
    let inputElement = 
        document.getElementById("letter-input");
if (!inputElement.value) {
        alert("Empty Input box. Please add input letter");
        return;
    }