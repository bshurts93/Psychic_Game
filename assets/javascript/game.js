//-----------------// VARIABLES //-----------------//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomLetter;

// SCORING
var wins = parseInt(document.getElementById("wins").textContent);
var losses = parseInt(document.getElementById("losses").textContent);
var guesses = parseInt(document.getElementById("guesses").textContent);
var usedLetters = [ ];




//-----------------// FUNCTIONS //-----------------//
function getRandomLetter() {
    var letter = alphabet[Math.floor(Math.random() * 26)];
    document.querySelector(".random-letter").innerHTML = letter;
    randomLetter = letter;
}

function winner() {
    // Add win
    wins++;
    document.getElementById("wins").innerHTML = wins;
    // Reset array
    usedLetters = [ ];
    document.getElementById("used").innerHTML = " ";
    // New letter
    getRandomLetter();
}

function wrongLetter() {
    // Take away guess after wrong guess
    guesses--
    document.getElementById("guesses").textContent = guesses;
}

function loser() {
    // Add loss
    losses++
    document.getElementById("losses").innerHTML = losses;
    // Reset array
    usedLetters = [ ];
    document.getElementById("used").innerHTML = " ";
    // New letter
    getRandomLetter();
    // Reset guesses back to 9
    resetGuesses();
}

function resetGuesses() {
    // Reset guesses back to 9
    guesses = 9;
    document.getElementById("guesses").textContent = guesses;
}


//-----------------// PSUDO CODE //-----------------//


// App generates a randomly selected letter and stored in a variable
getRandomLetter();
document.querySelector(".random-letter").innerHTML = randomLetter;

// User picks letter on keyboard
document.onkeydown = function (e) {
    var keypress = e.key;

    if (keypress === randomLetter) {
        // If it's correct, user wins + win count goes up + game resets
        winner();
    } else if (usedLetters.includes(keypress)) {
        // Test array to see if the letter has been guessed this round
        console.log("you already guessed that!");
    } else {
        // Take away guess + display to DOM
        wrongLetter();

        // Push the wrong key to the array and display
        usedLetters.push(keypress);
        document.getElementById("used").innerHTML = usedLetters;
    }

    // If winner runs out of guesses and loses, add one loss + reset both game and guess count
    if (guesses == 0) {
        loser();
    }
}