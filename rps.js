const choices = ["Rock", "Paper", "Scissors"];

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}