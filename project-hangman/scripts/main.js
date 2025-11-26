//==================================================
// Reza Aliabadi
// A00246633
// BCIT COMP-2132
//==================================================

//==================================================
// Constants and variables

//==================================================
// Initialize page items

//==================================================
// Ensures code runs after the DOM is fully loaded.
$(document).ready(function() {

    // results.displayIncorrectGuesses();
    results = new Results();
    keyboard = new Keyboard();
});

//==================================================
// Helper functions
//==================================================

//==================================================
// Resets the window by reloading the page.
function resetWindow() {

    setTimeout(() => window.location.reload(), 900);
}

//==================================================
// Loads the word list from the JSON file.
async function loadData() {

    console.log(`In loadData() - fetching from: ${fetch_file_location}`);

    try {
        const response = await fetch(fetch_file_location);
        if (!response.ok) {
            throw new Error("Network error: fetch failed");
        }

        const data = await response.json();
        data.forEach(function( wordItem ) {
            jsonWordList.push( wordItem );
            // console.log(`Loaded word: ${wordItem.word} with hint: ${wordItem.hint}`);
        });
    } catch (error) {
        errorMsg = `${error}. Please try again.`;
        console.log(errorMsg);
    }
};

//==================================================
// Main code execution
//==================================================

//==================================================
// Load the word list and set the initial masked word and hint.
loadData().then(() => {
    wordIndex = Math.floor(Math.random() * jsonWordList.length);
    console.log("Selected word index: " + wordIndex);

    word = jsonWordList[wordIndex].word.toUpperCase();
    hint = jsonWordList[wordIndex].hint;

    console.log("Selected word: " + word);
    console.log("Selected hint: " + hint);

    maskedWord = "_".repeat(word.length).trim();

    results.setInitialMaskedWord(maskedWord, hint);
});

//==================================================
// Set the initial hangman image
imageSrc = imageFolder + `hangman-0${currentIncorrectGuesses}.png`;
console.log("hangmanImage.src: " + imageSrc);
hangmanImage.src = imageSrc;

//==================================================
// END OF FILE
//==================================================
