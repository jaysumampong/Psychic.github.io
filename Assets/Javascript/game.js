let wins = 0;
let losses = 0;
let guesses = 10;
let letters = /[A-Za-z]/;
let letterChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
let blankArray = [];
// DOM node references
let userWins = document.getElementById("user-wins");
let userLosses = document.getElementById("user-losses");
let guessesLeft = document.getElementById("guesses-left");
let recordedGuesses = document.getElementById("recorded-guesses");
let spanTag = document.createElement('span');


userLosses.innerText = losses;
guessesLeft.innerText = guesses;
userWins.innerText = wins;

let computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
console.log(computerChoice);

function game(){
    computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    console.log(computerChoice);

};
document.onkeyup = function(event) {
    let userGuess = event.key;
    // check for only A-Z character keys (keycode)
        //added Regex let letters = /^[A-Za-z]+$/
    //meta characters still need to be taken out
    if (userGuess.match(letters)) {
    }//console.log("match letters");
    
    if (userGuess === computerChoice){
        wins++;
        guesses = 10;
        blankArray = [];
        guessesLeft.innerText = guesses;
        userWins.innerText = wins;
        game();

    }

    if (userGuess !== computerChoice) {
        guesses--;
        //console.log({guesses});
        guessesLeft.innerText = guesses;
    }

    if (guesses <= 0){
        losses++;
        guesses = 10; 
        blankArray = [];
        userLosses.innerText = losses;
    }

    recordedGuesses.innerHTML = "";
    for (let i = 0; i < 1; i++) {
        //console.log('i: ', i);
        blankArray.push(userGuess);
        spanTag.innerText = blankArray;
        recordedGuesses.appendChild(spanTag);
    }
};
// empty your recorded guesses
