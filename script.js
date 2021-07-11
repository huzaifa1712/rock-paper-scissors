// computerPlay - randomly return either 'Rock', 'Paper' or 'Scissors'
// input: none. output: string value
// Use a function that returns a random choice from an Array of items instead for better extensibility
const options = ['Rock', 'Paper', 'Scissors'];

// object where key = choice, value = who the key beats. any other value is either tie or loss
const beatMap = {
    'rock':'scissors',
    'paper': 'rock',
    'scissors':'paper'
};

function randomChoice(array){
   return array[Math.floor(Math.random()*array.length)];
}

function computerPlay(options=['Rock', 'Paper', 'Scissors']){
    return randomChoice(options);
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
function playRound(playerSelection, computerSelection, first=true, bMap = beatMap){
    // switch the args if first = false so from perspective of second player
    const result = first ? firstBeatsSecond(playerSelection, computerSelection, bMap) : firstBeatsSecond(computerSelection, playerSelection, bMap);
    return first ? roundMessage(playerSelection, computerSelection, result) : roundMessage(computerSelection, playerSelection, result);
}





// TESTING

// computerPlay
// for(let i = 0; i < 10; i++){
//     console.log(computerPlay())
// }

//firstBeatsSecond
let beatsTest= [firstBeatsSecond('Rock', 'Scissors', beatMap), // win 
firstBeatsSecond('Rock', 'Paper',beatMap), // lose

firstBeatsSecond('Paper', 'Rock',beatMap), // win
firstBeatsSecond('Paper', 'Scissors',beatMap), // lose

firstBeatsSecond('ScisSors', 'Paper',beatMap), //win
firstBeatsSecond('Scissors', 'Rock',beatMap), // lose

firstBeatsSecond('papEr', 'PAper',beatMap) // tie 
]

// console.log(beatsTest);

// playRound
let playRoundTest = [
    playRound("Rock", "Scissors"),
    playRound("Rock", "Paper"),
    playRound('Paper', 'Rock'),
    playRound('Paper', 'Scissors'),
    playRound('Scissors', 'Paper'),
    playRound('Scissors', 'Rock'),
    playRound('Paper', 'Paper')

];
/*
Array(7) [ "You Win! Rock beats Scissors", "You Lose! Paper beats Rock ", "You Win! Paper beats Rock", "You Lose! Scissors beats Paper ", 
"You Win! Scissors beats Paper", "You Lose! Rock beats Scissors ", "You Tie! Paper does not beat Paper" ]
*/

let playRoundTest2 = [
    playRound("Rock", "Scissors", false),
    playRound("Rock", "Paper", false),
    playRound('Paper', 'Rock', false),
    playRound('Paper', 'Scissors', false),
    playRound('Scissors', 'Paper', false),
    playRound('Scissors', 'Rock', false),
    playRound('Paper', 'Paper', false)

];

/*
Array(7) [ "You Lose! Rock beats Scissors ", "You Win! Paper beats Rock", "You Lose! Paper beats Rock ", "You Win! Scissors beats Paper", 
"You Lose! Scissors beats Paper ", "You Win! Rock beats Scissors", "You Tie! Paper does not beat Paper" ]
*/