// computerPlay - randomly return either 'Rock', 'Paper' or 'Scissors'
// input: none. output: string value
// Use a function that returns a random choice from an Array of items instead for better extensibility
const options = ['Rock', 'Paper', 'Scissors'];

function randomChoice(array){
   return array[Math.floor(Math.random()*array.length)];
}

function computerPlay(options=['Rock', 'Paper', 'Scissors']){
    return randomChoice(options);
}



// TESTING

// computerPlay
// for(let i = 0; i < 10; i++){
//     console.log(computerPlay())
// }