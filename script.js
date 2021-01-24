let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate a random whole number between 0 and 9.

function generateTarget() {
  return Math.floor(Math.random()*10)
}

// Function that takes two parameters to calculate the distance between two numbers incorporating the absolute value function.
const getAbsoluteDistance = (num, tar) => {
  return Math.abs(tar - num);
}

// Function that takes three parameters to compare user guesses vs. computer guesses and return a true or false.

function compareGuesses(user, computer, target) {
  if (!(user > 0 && user <= 9)) {
    alert('Invalid! Please enter a number between 0 and 9.')
  } 
  let userTar = getAbsoluteDistance(user, target);
  let compTar = getAbsoluteDistance(computer, target);
  if (user === computer) {
    return true
  } else if (userTar < compTar) {
    return true
  } else if (compTar < userTar) {
    return false
  }
}

// Function that takes one parameter and determines the winner of a match based on the closest guessed number and increments the winners score

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1
  } else if (winner === 'computer') {
    computerScore += 1 
  }
}

// Function that advances to the next round once a winner has been determined.

const advanceRound = () => {
  currentRoundNumber +=1
}
