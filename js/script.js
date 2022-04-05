const guessLetter = document.querySelector (".guessed-letters");
const guessButton = document.querySelector (".guess");
const letterInput = document.querySelector (".letter");
const wordProgress = document.querySelector (".word-in-progress");
const remainingGuess = document.querySelector (".remaining");
const remainingGuessSpan = document.querySelector (".remaining span");
const playAgainButton = document.querySelector (".play-again");
const message = document.querySelector (".message");

const word =  "magnolia";
const guessedLetters = [];


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
  } else if (input.length >1) {
    //did you type more than one letter
    mesage.innerTex = "Type one letter";
  }
  else if (input.match(acceptedLetter)) {
    //did you type a nmber, a special character or some other non letter thing
message.innerText = "Please enter letter from A to Z";
} else {
  //we finally got a single letter.
  return input;
}
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
if (guessedLetters.includes (guess)) {
message.innerText = "You've used that already - Try again";
}else guessedLetters.push(guess);
console.log(guessedLetters);

}
