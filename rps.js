const choices = ['Rock', 'Paper', 'Scissors'];

const msgs = ['You won! ', "It's a tie! You both chose ", 'You lost :( '];

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

let rpsRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'Rock'){
        if (computerSelection === 'Scissors') {
            return msgs[0] + playerSelection + ' beats ' + computerSelection;
        } else if (computerSelection === 'Rock') {
            return msgs[1] + playerSelection;
        } else {
            return msgs[2] + computerSelection + ' beats ' + playerSelection;
        }
    }
    if (playerSelection === 'Paper'){
        if (computerSelection === 'Rock') {
            return msgs[0] + playerSelection + ' beats ' + computerSelection;
        } else if (computerSelection === 'Paper') {
            return msgs[1] + playerSelection;
        } else {
            return msgs[2] + computerSelection + ' beats ' + playerSelection;
        }
    }
    if (playerSelection === 'Scissors'){
        if (computerSelection === 'Paper') {
            return msgs[0] + playerSelection + ' beats ' + computerSelection;
        } else if (computerSelection === 'Scissors') {
            return msgs[1] + playerSelection;
        } else {
            return msgs[2] + computerSelection + ' beats ' + playerSelection;
        }
    }
}