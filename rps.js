const choices = ['Rock', 'Paper', 'Scissors'];
const msgs = ['You won! ', "It's a tie! You both chose ", 'You lost :( '];

let points = 0;

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

let casing = (input) => {
    input = input.toLowerCase();
    input = input.replace(input[0], input[0].toUpperCase())
    return input;
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = casing(playerSelection);
    if (playerSelection === 'Rock'){
        if (computerSelection === 'Scissors') {
            points++;
            return msgs[0] + playerSelection + ' beats ' + computerSelection;
        } else if (computerSelection === 'Rock') {
            return msgs[1] + playerSelection;
        } else {
            return msgs[2] + computerSelection + ' beats ' + playerSelection;
        }
    } else if (playerSelection === 'Paper'){
        if (computerSelection === 'Rock') {
            points++;
            return msgs[0] + playerSelection + ' beats ' + computerSelection;
        } else if (computerSelection === 'Paper') {
            return msgs[1] + playerSelection;
        } else {
            return msgs[2] + computerSelection + ' beats ' + playerSelection;
        }
    } else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Paper') {
            points++;
            return msgs[0] + playerSelection + ' beats ' + computerSelection;
        } else if (computerSelection === 'Scissors') {
            return msgs[1] + playerSelection;
        } else {
            return msgs[2] + computerSelection + ' beats ' + playerSelection;
        }
    } else {
        return "Invalid Input";
    }
}

//const playerSelection = 'rock';
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection))

let checkInput = (input) => {
    input = casing(input);
    for (let i = 0; i < 3; i++){
        if (input === choices[i]) return true;
    }
    return false;
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        if(!checkInput(playerSelection)){
            i--;
            console.log("Invalid Input!");
        } else {
            console.log(playRound(playerSelection, getComputerChoice()));
        }
    }

    return "You won " + points + " rounds!";

}