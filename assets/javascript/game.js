//-----------------// VARIABLES //-----------------//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomLetter = getRandomLetter();



//-----------------// FUNCTIONS //-----------------//
function getRandomLetter() {
    var letter = alphabet[Math.floor(Math.random() * 26)];
    return letter;
}


//-----------------// PSUDO CODE //-----------------//

// App generates a randomly selected letter and stored in a variable
document.querySelector(".random-letter").innerHTML = randomLetter;

// User picks letter on keyboard
document.onkeydown = function (e) {
    var keypress = e.key;
    

}

// If it's correct, user wins + win count goes up + game resets


// If it's wrong, take one guess away + display the wrong letter to the DOM


// If winner runs out of guesses and loses, add one loss + reset both game and guess count





