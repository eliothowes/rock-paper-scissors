function computerPlay () {
    let computerSelection = ['rock', 'paper', 'scissors']
    return computerSelection[Math.floor(Math.random()*computerSelection.length)]
}

function userPlay () {
    let playerSelection = prompt ("Pick your weapon: Rock, Paper or Scissors")
    return playerSelection
}

function singleRound () {
    var p1 = userPlay().toLowerCase()
    var p2 = computerPlay()
    if (p1 === p2 ) {
        alert("It's a draw")
    }
    else if (p1 === "rock" && p2 === "paper") {
        alert("You Lose! Paper beats Rock")
    }
    else if (p1 === "rock" && p2 === "scissors") {
        alert("You Win! Rock beats Scissors")
    }
    else if (p1 === "paper" && p2 === "scissors") {
        alert("You Lose! Scissors beats Rock")
    }
    else if (p1 === "paper" && p2 === "rock") {
        alert("You Win! Paper beats Rock")
    }
    else if (p1 === "scissors" && p2 === "rock") {
        alert("You Lose! Rock beats Scissors")
    }
    else if (p1 === "scissors" && p2 === "paper") {
        alert("You Win! Scissors beats Paper")
    }
}