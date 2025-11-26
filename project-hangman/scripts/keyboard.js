//==================================================
// Reza Aliabadi
// A00246633
// BCIT COMP-2132
//==================================================

//==================================================
// Constants and variables

const keyA    = document.getElementById("id-key-a");
const keyB    = document.getElementById("id-key-b");
const keyC    = document.getElementById("id-key-c");
const keyD    = document.getElementById("id-key-d");
const keyE    = document.getElementById("id-key-e");
const keyF    = document.getElementById("id-key-f");
const keyG    = document.getElementById("id-key-g");
const keyH    = document.getElementById("id-key-h");
const keyI    = document.getElementById("id-key-i");
const keyJ    = document.getElementById("id-key-j");
const keyK    = document.getElementById("id-key-k");
const keyL    = document.getElementById("id-key-l");
const keyM    = document.getElementById("id-key-m");
const keyN    = document.getElementById("id-key-n");
const keyO    = document.getElementById("id-key-o");
const keyP    = document.getElementById("id-key-p");
const keyQ    = document.getElementById("id-key-q");
const keyR    = document.getElementById("id-key-r");
const keyS    = document.getElementById("id-key-s");
const keyT    = document.getElementById("id-key-t");
const keyU    = document.getElementById("id-key-u");
const keyV    = document.getElementById("id-key-v");
const keyW    = document.getElementById("id-key-w");
const keyX    = document.getElementById("id-key-x");
const keyY    = document.getElementById("id-key-y");
const keyZ    = document.getElementById("id-key-z");
const keyDash = document.getElementById("id-key-dash");

//==================================================
// Classes and Objects
//==================================================

class Keyboard {

    //==================================================
    // Finds all indices of a substring within a main string.
    findAllSubstringIndices(mainString, subString) {
        const indices = [];
        let index = 0;
        let startIndex = 0;

        while ((index = mainString.indexOf(subString, startIndex)) > -1) {
            indices.push(index);

            // Move past the found substring
            startIndex = index + subString.length;
        }

        return indices;
    }

    //==================================================
    // Handles key press event for the specified key.
    keyPressed(key) {

        console.log(`Key pressed: ${key.innerText}`);

        // Disable the pressed key and set it to the pressed colors.
        key.disabled = true;
        key.classList.add("clicked");

        indexList = this.findAllSubstringIndices(word, key.innerText);

        console.log(`Key pressed: ${key.innerText}, indexList: ${indexList}`);

        results.updateResults();
    }
}

const keyboard = new Keyboard();

//==================================================
// Event handlers
//==================================================

//==================================================
// Handles keydonw events for all alphabet keys plus "-".
document.addEventListener('keydown', (event) => {

    switch (event.key) {
        case "a":
        case "A":
            keyboard.keyPressed(keyA);
            break;
        case "b":
        case "B":
            keyboard.keyPressed(keyB);
            break;
        case "c":
        case "C":
            keyboard.keyPressed(keyC);
            break;
        case "d":
        case "D":
            keyboard.keyPressed(keyD);
            break;
        case "e":
        case "E":
            keyboard.keyPressed(keyE);
            break;
        case "f":
        case "F":
            keyboard.keyPressed(keyF);
            break;
        case "g":
        case "G":
            keyboard.keyPressed(keyG);
            break;
        case "h":
        case "H":
            keyboard.keyPressed(keyH);
            break;
        case "i":
        case "I":
            keyboard.keyPressed(keyI);
            break;
        case "j":
        case "J":
            keyboard.keyPressed(keyJ);
            break;
        case "k":
        case "K":
            keyboard.keyPressed(keyK);
            break;
        case "l":
        case "L":
            keyboard.keyPressed(keyL);
            break;
        case "m":
        case "M":
            keyboard.keyPressed(keyM);
            break;
        case "n":
        case "N":
            keyboard.keyPressed(keyN);
            break;
        case "o":
        case "O":
            keyboard.keyPressed(keyO);
            break;
        case "p":
        case "P":
            keyboard.keyPressed(keyP);
            break;
        case "q":
        case "Q":
            keyboard.keyPressed(keyQ);
            break;
        case "r":
        case "R":
            keyboard.keyPressed(keyR);
            break;
        case "s":
        case "S":
            keyboard.keyPressed(keyS);
            break;
        case "t":
        case "T":
            keyboard.keyPressed(keyT);
            break;
        case "u":
        case "U":
            keyboard.keyPressed(keyU);
            break;
        case "v":
        case "V":
            keyboard.keyPressed(keyV);
            break;
        case "w":
        case "W":
            keyboard.keyPressed(keyW);
            break;
        case "x":
        case "X":
            keyboard.keyPressed(keyX);
            break;
        case "y":
        case "Y":
            keyboard.keyPressed(keyY);
            break;
        case "z":
        case "Z":
            keyboard.keyPressed(keyZ);
            break;
        case "-":
            keyboard.keyPressed(keyDash);
            break;
    }
});

//==================================================
// Handles click event for the A button.
keyA.addEventListener('click', function() {

    keyboard.keyPressed(keyA);
});

//==================================================
// Handles click event for the B button.
keyB.addEventListener('click', function() {

    keyboard.keyPressed(keyB);
});

//==================================================
// Handles click event for the C button.
keyC.addEventListener('click', function() {

    keyboard.keyPressed(keyC);
});

//==================================================
// Handles click event for the D button.
keyD.addEventListener('click', function() {

    keyboard.keyPressed(keyD);
});

//==================================================
// Handles click event for the E button.
keyE.addEventListener('click', function() {

    keyboard.keyPressed(keyE);
});

//==================================================
// Handles click event for the F button.
keyF.addEventListener('click', function() {

    keyboard.keyPressed(keyF);
});

//==================================================
// Handles click event for the G button.
keyG.addEventListener('click', function() {

    keyboard.keyPressed(keyG);
});

//==================================================
// Handles click event for the H button.
keyH.addEventListener('click', function() {

    keyboard.keyPressed(keyH);
});

//==================================================
// Handles click event for the I button.
keyI.addEventListener('click', function() {

    keyboard.keyPressed(keyI);
});

//==================================================
// Handles click event for the J button.
keyJ.addEventListener('click', function() {

    keyboard.keyPressed(keyJ);
});

//==================================================
// Handles click event for the K button.
keyK.addEventListener('click', function() {

    keyboard.keyPressed(keyK);
});

//==================================================
// Handles click event for the L button.
keyL.addEventListener('click', function() {

    keyboard.keyPressed(keyL);
});

//==================================================
// Handles click event for the M button.
keyM.addEventListener('click', function() {

    keyboard.keyPressed(keyM);
});

//==================================================
// Handles click event for the N button.
keyN.addEventListener('click', function() {

    keyboard.keyPressed(keyN);
});

//==================================================
// Handles click event for the O button.
keyO.addEventListener('click', function() {

    keyboard.keyPressed(keyO);
});

//==================================================
// Handles click event for the P button.
keyP.addEventListener('click', function() {

    keyboard.keyPressed(keyP);
});

//==================================================
// Handles click event for the Q button.
keyQ.addEventListener('click', function() {

    keyboard.keyPressed(keyQ);
});

//==================================================
// Handles click event for the R button.
keyR.addEventListener('click', function() {

    keyboard.keyPressed(keyR);
});

//==================================================
// Handles click event for the S button.
keyS.addEventListener('click', function() {

    keyboard.keyPressed(keyS);
});

//==================================================
// Handles click event for the T button.
keyT.addEventListener('click', function() {

    keyboard.keyPressed(keyT);
});

//==================================================
// Handles click event for the U button.
keyU.addEventListener('click', function() {

    keyboard.keyPressed(keyU);
});

//==================================================
// Handles click event for the V button.
keyV.addEventListener('click', function() {

    keyboard.keyPressed(keyV);
});

//==================================================
// Handles click event for the W button.
keyW.addEventListener('click', function() {

    keyboard.keyPressed(keyW);
});

//==================================================
// Handles click event for the X button.
keyX.addEventListener('click', function() {

    keyboard.keyPressed(keyX);
});

//==================================================
// Handles click event for the Y button.
keyY.addEventListener('click', function() {

    keyboard.keyPressed(keyY);
});

//==================================================
// Handles click event for the Z button.
keyZ.addEventListener('click', function() {

    keyboard.keyPressed(keyZ);
});

//==================================================
// Handles click event for the "-" button.
keyDash.addEventListener('click', function() {

    keyboard.keyPressed(keyDash);
});

//==================================================
// END OF FILE
//==================================================
