let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
 const generateTarget = () => {
   return Math.floor(Math.random()* 8);
 }
const CompareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humaanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanscore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
