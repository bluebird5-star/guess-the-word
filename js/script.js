const guessedLettersElement = document.querySelector (".guessed-letters");
const guessButton = document.querySelector (".guess");
const letterInput = document.querySelector (".letter");
const wordProgress = document.querySelector (".word-in-progress");
const remainingGuess = document.querySelector (".remaining");
const remainingGuessSpan = document.querySelector (".remaining span");
let remainingGuesses = 8;
const playAgainButton = document.querySelector (".play-again");
const message = document.querySelector (".message");

let word =  "magnolia";
const guessedLetters = [];

const getWord = async function () {
const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
const words = await response.text();
const wordArray = words.split("\n");
const randomIndex = Math.floor(Math.random () * wordArray.length);
word = wordArray[randomIndex].trim();
progress(word);
};

getWord();



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
//Empty message paragraph
message.innerText = "";
//lets grab what was in input
 const guess = letterInput.value;
 // make sure its single letter
 const goodGuess = playerInput(guess);

 if (goodGuess) {
   // We've got a letter! Let's guess!
   makeGuess(guess);
 }

 //console.log(guess);
 letterInput.value = "";

});



const playerInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    //is input empty
    message.innerText = "Add a letter";
  } else if (input.length > 1) {
    //did you type more than one letter
    message.innerText = "Type one letter";
  }
  else if (!input.match(acceptedLetter)) {
    //did you type a nmber, a special character or some other non letter thing
message.innerText = "Please enter letter from A to Z";
} else {
  //we finally got a single letter.
  return input;
}
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
if (guessedLetters.includes(guess)) {
message.innerText = "You've used that already - Try again";
}else {
  guessedLetters.push(guess);
console.log(guessedLetters);
countGuesses(guess);
displayLetters();
updateWordProgress(guessedLetters);

}
};

  const displayLetters = function () {
    // clear the list first
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
      const li = document.createElement("li");
      li.innerText = letter;
      guessedLettersElement.append(li);

}
};

const updateWordProgress = function (guessedLetters) {
const wordUpper = word.toUpperCase();
const wordArray = wordUpper.split("");
//console.log(wordArray);

const showWord = [];
for (const letter of wordArray) {
  if (guessedLetters.includes(letter)) {
    showWord.push(letter.toUpperCase());
  }else{
    showWord.push("●");
}
}
//console.log(showWord);

wordProgress.innerText = showWord.join("");
correctGuess();
};

const countGuesses = function(guess){
  const upperWord = word.toUpperCase();
  if (!upperWord.includes(guess)){
    //wrong guess, lose a chance
    message.innerText = `Sorry, the word does not contain ${guess}`;
    remainingGuesses -=1;
  } else{
    message.innerText = `Well done, the word has the letter ${guess}`;

  }if (remainingGuesses === 0) {
  message.innerHTML = `Game over.  The word is <span class = "highlight">${word}</span`;

} else if (remainingGuesses === 1) {
  remainingGuessSpan.innerText = `${remainingGuesses} guess`;
}else{   remainingGuessSpan.innerText = `${remainingGuesses} guesses`;
}
};

const correctGuess = function () {
  if (word.toUpperCase() === wordProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
  }
};
