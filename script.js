let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    let computerSelection = ['rock', 'paper', 'scissors']
    return computerSelection[Math.floor(Math.random()*computerSelection.length)]
}

function userPlay () {
    let playerSelection = prompt ("Pick your weapon: Rock, Paper or Scissors")
    return playerSelection
}

function singleRound () {
    let p1 = userPlay().toLowerCase()
    let p2 = computerPlay()
    if (p1 === p2 ) {
        playerScore = playerScore + 0
        computerScore = computerScore + 0 
        alert(("It's a draw. ") + ("Your score = ") + playerScore + (". ") + ("The computer's score = ") + computerScore + ("."))
    }
    else if (p1 === "rock" && p2 === "paper") {
        playerScore = playerScore + 0
        computerScore = computerScore + 1
        alert(("You Lose! Paper beats Rock. ") + ("Your score = ") + playerScore + (". ") + ("The computer's score = ") + computerScore + ("."))
    }
    else if (p1 === "rock" && p2 === "scissors") {
        playerScore = playerScore + 1
        computerScore = computerScore + 0 
        alert(("You Win! Rock beats Scissors. ") + ("Your score = ") + playerScore + (". ") + ("The computer's score = ") + computerScore + ("."))
    }
    else if (p1 === "paper" && p2 === "scissors") {
        playerScore = playerScore + 0
        computerScore = computerScore + 1
        alert(("You Lose! Scissors beats Rock. ") + ("Your score = ") + playerScore + (". ") + ("The computer's score = ") + computerScore + ("."))
    }
    else if (p1 === "paper" && p2 === "rock") {
        playerScore = playerScore + 1
        computerScore = computerScore + 0 
        alert(("You Win! Paper beats Rock. ") + ("Your score = ") + playerScore + (". ") + ("The computer's score = ") + computerScore + ("."))
    }
    else if (p1 === "scissors" && p2 === "rock") {
        playerScore = playerScore + 0
        computerScore = computerScore + 1 
        alert(("You Lose! Rock beats Scissors. ") + ("Your score = ") + playerScore + (". ") + ("The computer's score = ") + computerScore + ("."))
    }
    else if (p1 === "scissors" && p2 === "paper") {
        playerScore = playerScore + 1
        computerScore = computerScore + 0
        alert(("You Win! Scissors beats Paper. ") + ("Your score = ") + playerScore + (". ") + ("The computer's score = ") + computerScore + ("."))
    }
}

function game () {
    for (i = playerScore, j = computerScore; i || j <3; i++, j++) {
        singleRound ();
        if (playerScore === 3) {
            alert ("You reached 3 points, you WIN!")
        }
        else if (computerScore === 3) {
            alert ("The computer reached 3 points, you LOSE!")
        }
    }    
}

