//==================================================
// Reza Aliabadi
// A00246633
// BCIT COMP-2132
//==================================================

//==================================================
// Global definitions and data items.
//==================================================

const hangmanImage = document.getElementById("id-hangman-image");

// Path to the image folder
const imageFolder = "images/";
const fetch_file_location = "data/json/words-and-hints.json";
const missedSound = new Audio('sounds/missed.mp3');
const hangedSound = new Audio('sounds/scream.mp3');
const splashSound = new Audio('sounds/splash.wav');

// Global settings
const maxIncorrectGuesses = 6;

let currentIncorrectGuesses = 0;
let wordIndex = 1;
let errorMsg = "";
let word = "";
let hint = "";
let maskedWord = "";
let jsonWordList = [];
let indexList = [];
let html = "";

//==================================================
// END OF FILE
//==================================================
