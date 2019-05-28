let letterChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z']
let wins = 0;
let losses = 0;
let guesses = 10;
let array = [];
let letters = letters;


let directionsText = document.getElementById('directions-text');
let userChoiceText = document.getElementById('userchoice-text');
let winsText = document.getElementById('wins-text');
let lossesText = document.getElementById('losses-text');

function jsGuess() {
    letters = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    console.log(ranLetter);

document.onkeyup = function(event) {
    let userGuess = event.key;
    letters = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    if (userGuess === letterChoices){
        wins++;
        guesses=10;
    }
    if (userGuess !== letters){
        availableAttempts--;
        console.log
    }
    if (availableAttempts === 0){
        losses++;
        array = [];
        guesses = 10; 
    }
    if (array.indexOf >= 0){
    }
    else {
        array.push(userGuess);
        document.getElementById(userGuess) = array;
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

    



}