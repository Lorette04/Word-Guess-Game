console.log('java script is loading');
// ALL VARIABLES
// Creates an array that lists out all of the letters.
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordList = [
    'baguette',
    'paris',
    'brioche',
    'croissant',
    'eiffel tower',
    'wine',
    'cheese',
    'french riviera',
    'ratatouille',
    'soccer',
    'normandie',];
var word; // Selected word
var guess; // Guess
var guessStored = []; // Guess stored
var lives = 4;
var wins = 0;
var losses = 0;

// Get elements
var showLives = document.getElementById("livesRemaing");
var numWins = document.getElementById("rightGuess");
var numLosses = document.getElementById("wrongGuess");


// Create geusses list
result = function () {
    wordHolder = document.getElementById('answerArray');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }
        guessStored.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

// Show lives
comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over" ;
        losses++;
    }
    for (var i = 0; i < guessStored.length; i++) {
        if (counter + space === geusses.length) {
            showLives.innerHTML = "You Win!" ; 
            wins++;
        }
    }
}


// if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

//     if ((userGuess === "r") && (computerGuess === "s")) {
//       wins++;
//     } else if ((userGuess === "r") && (computerGuess === "p")) {
//       losses++;
//     } else if ((userGuess === "s") && (computerGuess === "r")) {
//       losses++;
//     } else if ((userGuess === "s") && (computerGuess === "p")) {
//       wins++;
//     } else if ((userGuess === "p") && (computerGuess === "r")) {
//       wins++;
//     } else if ((userGuess === "p") && (computerGuess === "s")) {
//       losses++;
//     } else if (userGuess === computerGuess) {
//       ties++;
//     }




// OnClick Function
check = function () {
    list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === geuss) {
                guessStored[i].innerHTML = geuss;
                counter += 1;
            }
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
            lives -= 1;
            comments();
            animate();
        } else {
            comments();
        }
    }
}

// Play
play = function () {

    word = wordList[Math.floor(Math.random() * wordList.length)];

    word = word.replace(/\s/g, "-");
    console.log(word);
    geusses = [];
    lives = 4;
    counter = 0;
    space = 0;
    result();
    comments();
}
play();

// Reset
document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    // letters.parentNode.removeChild(letters);
    play();
}

