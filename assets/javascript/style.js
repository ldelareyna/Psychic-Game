//ANSWERS
var computerChoices = ["a", "b", "c"];

//RECORDING 
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

//WHEN USER CLICKS ON A LETTER
document.onkeyup = function (event) {

  //GET BUTTON THAT WAS PRESSED 
  var userGuess = event.key;

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  //USER'S OPTIONS
  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


  //IF WHAT THE USER CLICKS...
  if (options.indexOf(userGuess) > -1) {

    //IS WHAT THE COMPUTER CHOSE
    if (userGuess === computerGuess) {
      wins++;
      numGuesses = 9;
      guessChoices = [];
    }

    //IS NOT WHAT THE COMPTUER CHOSE
    if (userGuess != computerGuess) {
      numGuesses--;
      guessChoices.push(userGuess);
    }

    //NO MORE GUESSES
    if (numGuesses === 0) {

      numGuesses = 9;
      losses++;
      guessChoices = [];
    }

    //SHOW ON HTML
    document.querySelector("#numGuesses").innerHTML = numGuesses;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;

    var guessed = guessChoices.join(", ");
    document.querySelector("#guessChoices").innerHTML = guessed;


  }
};