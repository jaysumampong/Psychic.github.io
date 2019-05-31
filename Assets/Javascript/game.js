let wins = 0;
let losses = 0;
let guesses = 10;
let array = [];
let letterChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
// DOM node references
let userWins = document.getElementById("user-wins");
let userLosses = document.getElementById("user-losses");
let guessesLeft = document.getElementById("guesses-left");
let recordedGuesses = document.getElementById("recorded-guesses");


userLosses.innerText = losses;
guessesLeft.innerText = guesses;
userWins.innerText = wins;

let computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
console.log(computerChoice);

function game(){
    computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
};

document.onkeyup = function(event) {
    let userGuess = event.key;
    // check for only A-Z character keys (keycode)
    if (array.includes(userGuess)) {
        return;
    }
    
    array.push(userGuess);

    console.log(array);
    if (userGuess === computerChoice){
        wins++;
        userWins.innerText = wins;
        // reset game here but don't clear wins/losses
    }

    if (userGuess !== computerChoice) {
        guesses--;
        console.log({guesses});
        guessesLeft.innerText = guesses;
    }

    if (guesses <= 0){
        losses++;
        array = [];
        guesses = 10; 
    }

    // loop through the array and append to recorded guesses
    // span tag or p tag or something

    // empty your recorded guesses
    recordedGuesses.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        console.log('i: ', i);
        let spanTag = document.createElement('span');
        spanTag.innerText = i;
        recordedGuesses.appendChild(spanTag);
    }

    //userWins.textContent = "wins: " + wins;
    //console.log("wins")
    //userLosses.textContent = "losses: " + losses;
    //guessesLeft.textContent = "Guesses Left: " + guesses;
    //recordedGuesses.textContent = "Your guesses so far: " + guesses;

    
};
