const guessLetter = document.querySelector (".guessed-letters");
const guessButton = document.querySelector (".guess");
const letterInput = document.querySelector (".letter");
const wordProgress = document.querySelector (".word-in-progress");
const remainingGuess = document.querySelector (".remaining");
const remainingGuessSpan = document.querySelector (".remaining span");
const playAgainButton = document.querySelector (".play-again");

const word =  "magnolia";

//display symbols as placeholder for chosen word's lettters
const progress = function (word) {
  const progressLetters =  [];

  for (const letter of word){
    console.log(letter);
    progressLetters.push("●");
  }

wordProgress.innerText = progressLetters.join ("");
};

progress(word);

guessButton.addEventListener("click", function (e) {
e.preventDefault();
 const guess = letterInput.value;
 console.log(guess);
 letterInput.value = "";
});
