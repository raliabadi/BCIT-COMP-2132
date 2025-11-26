//==================================================
// Reza Aliabadi
// A00246633
// BCIT COMP-2132
//==================================================

//==================================================
// Constants and variables

const mysteryWord    = document.getElementById("id-mystery-word");
const mysteryWordHint    = document.getElementById("id-mystery-word-hint");
const incorrectGuesses    = document.getElementById("id-incorrect-guesses");

//==================================================
// Classes and Objects
//==================================================

class Results {

    constructor() {
        // console.log("In Results constructor()");

        this.displayIncorrectGuesses();
    }

    //==================================================
    // Displays the current number of incorrect guesses.
    displayIncorrectGuesses() {

        incorrectGuesses.innerText = `Incorrect Guesses: ${currentIncorrectGuesses}/${maxIncorrectGuesses}`;
    };

    //==================================================
    // Sets the initial masked word and hint.
    setInitialMaskedWord(word, hint) {

        console.log("Setting mystery word to: " + word + " with hint: " + hint);

        mysteryWord.innerText = word;
        mysteryWordHint.innerHTML = "<p><b>Hint:</b> " + hint + "</p>";
    };

    //==================================================
    // Displays a modal popup with the given message.
    displayResultsPopup(message) {
        const alertBox = document.getElementById("id-modal-dialog");
        const alertMessage = document.getElementById("id-alert-message");

        alertBox.classList.remove("fade-in");

        // Set the custom message
        alertMessage.textContent = message;

        // Open the dialog as a modal
        // The button within form method="dialog" handles closing automatically.
        setTimeout(() => {
            alertBox.classList.add("fade-in");
            alertBox.showModal();
        }, 900);
    }

    //==================================================
    // Updates the hangman image based on incorrect guesses.
    updateHangmanImage() {

        if ((!gameCompleted) && (currentIncorrectGuesses <= maxIncorrectGuesses)) {
            hangmanImage.src = imageFolder + `hangman-0${currentIncorrectGuesses}.png`;
        }
    }

    //==================================================
    // Updates the results based on the current guess.
    updateResults() {

        if (!gameCompleted) {
            if (0 < indexList.length) {
                // Correct guess. Character was found in the word. Update the masked word.
                indexList.forEach( function(index) {
                    maskedWord = maskedWord.substring(0, index) + word.charAt(index) + maskedWord.substring(index + 1);
                } );

                mysteryWord.innerText = maskedWord;

                if (maskedWord === word) {
                    // Player has guessed the entire word correctly.
                    gameCompleted = true;
                    splashSound.play();
                    setTimeout(() => this.displayResultsPopup(`Congratulations!\nYou've guessed the word: ${word}\nYou saved Stix from the gallows!`), 100);
                }
            } else {
                // Incorrect guess. Update the hangman image and incorrect guesses count.
                if (currentIncorrectGuesses < maxIncorrectGuesses) {

                    currentIncorrectGuesses += 1;
                    this.displayIncorrectGuesses();

                    this.updateHangmanImage();

                    if (currentIncorrectGuesses >= maxIncorrectGuesses) {
                        // Game over. Player exceeded maximum incorrect guesses.
                        gameCompleted = true;
                        hangedSound.play();
                        setTimeout(() => this.displayResultsPopup(`Game Over for Stix.\nSorry for your loss!\nThe mystery word was: ${word}`), 100);
                    } else {
                        // Play missed sound for incorrect guess.
                        missedSound.play();
                    }
                }
            }
        }
    }
}

//==================================================
// END OF FILE
//==================================================
