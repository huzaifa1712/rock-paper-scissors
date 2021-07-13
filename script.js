/*
Three buttons for Rock, Paper, Scissors
div for displaying results
- running score, announce winner once one player reaches <5> points
- score has playerScore and computerScore/second score
- p for displaying intermediary results
- extra p tag at bototm for displaying overall Game Over
*/

// computerPlay - randomly return either 'Rock', 'Paper' or 'Scissors'
// input: none. output: string value
// Use a function that returns a random choice from an Array of items instead for better extensibility


// GAME LOGIC FUNCTIONS //
function randomChoice(array){
   return array[Math.floor(Math.random()*array.length)];
}

function computerPlay(optionArr){
    return randomChoice(optionArr);
}

// playRound function
// input: playerSelection, computerSelection as String
    // must be case insensitive - rOck = Rock
// output: String indicating win/loss for player
// Extra: use boolean to indicate which player's perspective - true means use first param, false means use second

// Look at playerS and computerS 
// if playerS beats computerS, return a win message
// else, return a lose message

// beat: function that takes playerS, computerS -> return 'win' if playerS beats computerS, else 'lose' (first > second)
// return 'tie' if te. using beatMap to get winner over playerSelection

function firstBeatsSecond(playerSelection, computerSelection, beatMap){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(beatMap[playerSelection] == computerSelection){
        return 'win';
    }

    else if(playerSelection == computerSelection){
        return 'tie';
    }

    return 'lose';
}

// helper function for creating template string so switching players is easy
function roundMessage(playerSelection, computerSelection, result){
    playerSelection = correctCase(playerSelection);
    computerSelection = correctCase(computerSelection);

    if (result == 'win'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    else if (result == 'lose'){
        return `You Lose! ${computerSelection} beats ${playerSelection} `;
    }

    return `You Tie! ${playerSelection} does not beat ${computerSelection}`;
}


// helper function to correct the case of the selection to first letter capital, rest lower
function correctCase(selection){
    selection = selection.toLowerCase();
    selection = selection[0].toUpperCase() + selection.slice(1);
    return selection;
}

// first: perspective of playerSelection (first var) if true, otherwise from perspective of computerSelection (secondVar)
function playRound(playerSelection, computerSelection, bMap, first=true){
    // switch the args if first = false so from perspective of second player
    const result = first ? firstBeatsSecond(playerSelection, computerSelection, bMap) : firstBeatsSecond(computerSelection, playerSelection, bMap);
    return [first ? roundMessage(playerSelection, computerSelection, result) : roundMessage(computerSelection, playerSelection, result), result];
}

// END GAME LOGIC FUNCTIONS //


// SETUP VARIABLES // 
const options = ['Rock', 'Paper', 'Scissors'];

// object where key = choice, value = who the key beats. any other value is either tie or loss
const beatMap = {
        'rock':'scissors',
        'paper': 'rock',
        'scissors':'paper'
};

const scores = {
    player:0,
    computer:0
};

// END SETUP // 


// DOM REFERENCES // 
const buttons = document.querySelectorAll("button");
const results = document.getElementById("results");
const scoresDiv = document.getElementById("scores");
const playerScoreTag = document.getElementById("player-score"); 
const compScoreTag = document.getElementById("comp-score");
const roundTag = document.getElementById("round");
const overTag = document.getElementById("over-msg");
const newGameBtn = document.getElementById("new-game");


// END DOM REFERENCES //


// DOM MANIPULAITON FUNCTIONS // 
function getPlayerSelection(){
    return this.getAttribute("value");
}

function toggleVisible(elem){
    //elem.classList.toggle('invisible');
    const current = elem.style.display;
    elem.style.display = current === "" ? "none" : "";
}

// update roundMsg h3 - text and color set based on result
// if class = invisible, remove it
function outputRoundMsg(roundMsg, result){

}

// since buttonClick called in event listener, this is bound to element that called it
// can just do fn.call(this) to pass this into that function
function buttonClick(evt){
    const playerSelection = getPlayerSelection.call(this);
    const compSelection = computerPlay(options);
    const [roundMsg, result] = playRound(playerSelection, compSelection, beatMap);
    

}

buttons.forEach((button) => button.addEventListener("click", buttonClick))


// END DOM FUNCTIONS // 

// const rockBtn = document.getElementById("rock");
// const paperBtn = document.getElementById("paper");
// const scissorBtn = document.getElementById("scissors");

// let val = scissorBtn.getAttribute("value");
// console.log(val);

// press button -> click listener fires, get value from  value attr
// this is playerSelection -> get choice from computerPlay, pass into playRound
// output: round message. display in id = round. use firstBeatsSecond to get win/loss/tie, use to increment score.
// display scores in player/comp score
// game over when one player reaches <5>. disable buttons, add new button for start new game
// reset function fires for start new game


// TESTING

// computerPlay
// for(let i = 0; i < 10; i++){
//     console.log(computerPlay())
// }

// //firstBeatsSecond
// const beatsTest= [firstBeatsSecond('Rock', 'Scissors', beatMap), // win 
// firstBeatsSecond('Rock', 'Paper',beatMap), // lose

// firstBeatsSecond('Paper', 'Rock',beatMap), // win
// firstBeatsSecond('Paper', 'Scissors',beatMap), // lose

// firstBeatsSecond('ScisSors', 'Paper',beatMap), //win
// firstBeatsSecond('Scissors', 'Rock',beatMap), // lose

// firstBeatsSecond('papEr', 'PAper',beatMap) // tie 
// ]

// // console.log(beatsTest);

// // playRound
// const playRoundTest = [
//     playRound("Rock", "Scissors", beatMap),
//     playRound("Rock", "Paper", beatMap),
//     playRound('Paper', 'Rock', beatMap),
//     playRound('Paper', 'Scissors', beatMap),
//     playRound('Scissors', 'Paper', beatMap),
//     playRound('Scissors', 'Rock', beatMap),
//     playRound('Paper', 'Paper', beatMap)

// ];
// /*
// Array(7) [ "You Win! Rock beats Scissors", "You Lose! Paper beats Rock ", "You Win! Paper beats Rock", "You Lose! Scissors beats Paper ", 
// "You Win! Scissors beats Paper", "You Lose! Rock beats Scissors ", "You Tie! Paper does not beat Paper" ]
// */

// const playRoundTest2 = [
//     playRound("Rock", "Scissors", beatMap, false),
//     playRound("Rock", "Paper", beatMap, false),
//     playRound('Paper', 'Rock', beatMap, false),
//     playRound('Paper', 'Scissors', beatMap, false),
//     playRound('Scissors', 'Paper', beatMap, false),
//     playRound('Scissors', 'Rock', beatMap, false),
//     playRound('Paper', 'Paper', beatMap, false)

// ];

/*
Array(7) [ "You Lose! Rock beats Scissors ", "You Win! Paper beats Rock", "You Lose! Paper beats Rock ", "You Win! Scissors beats Paper", 
"You Lose! Scissors beats Paper ", "You Win! Rock beats Scissors", "You Tie! Paper does not beat Paper" ]
*/

// let a = [2]

// function x(a){
//     a[0]++;
// }

// x(a);

// console.log(a);
// function x(a,b){
//     return [++a, ++b];
// }

// function another(){
//     let a = 2;
//     let b = 3;
//     [a,b] = x(a,b);
//     console.log(a,b);
// }