// Wait until the DOM to finish loading before running the game
// Get the button elements and event listeners to them

document.addEventListener ("DOMContentLoaded", function() {  // Once the DOM has finish loading this function will run
  let buttons = document.getElementsByTagName ("button");  // This will get all buttons from the page (5 in total) and put tem in an array
  
  // Iterating through the array can be done with: for (let i = 0; i < buttons.length; i++)
  // Or with a newer version like this:
  for (let button of buttons){
    button.addEventListener("click", function(){  // Once a button has been clicked this function will run
      if (this.getAttribute("data-type") === "submit") {
        //XXXX alert("You clicked Submit!")  //If the submit button was clicked, the alert will pop up (at the beginning of writing the code to check if it is working)
        checkAnswer(); //actual function we want to have
      } else {
          let gameType = this.getAttribute("data-type");
          //XXXX alert(`You clicked ${gameType}`); // If another button was pressed this alert will pop up to tell what button was pressed (at the beginning of writing the code to check if it is working)
          runGame(gameType); //actual function we want to have
      }
    })
  }
  
  runGame ("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame (gameType) {
  // Creates two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() *25) + 1;
  let num2 = Math.floor(Math.random() *25) + 1;

  // Checking which game type we are running
  if (gameType === "addition"){
    displayAdditionQuestion(num1, num2);
  } else if (gameType === "multiply") {
      displayMultiplyQuestion(num1, num2);
  } else {
      alert(`Unknown game type: ${gameType}`); // If a different button than addition was clicked then display this alert (at the beginning of writing the code to check if it is working)
      throw `Unknown game type: ${gameType}. Aborting`; // to stop the game from running
  }

}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert("Hey! You got it right! :D");
    incrementScore();
  } else {
      alert(`Awwww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
      incrementWrongAnswer();
  }

  runGame (calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").innerText); //using parseInt to get a number and not a string (since we can't  to mathematical operations on a string)
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;

  if (operator === "+") {
      return [operand1 + operand2, "addition"];
  } else if (operator === "x"){
      return [operand1 * operand2, "multiply"];
  } else {
      alert(`Unimplemented operator: ${operator}`); // If a different operator than addition was used then display this alert (at the beginning of writing the code to check if it is working)
      throw `Unimplemented operator: ${operator}. Aborting`;
  }
}

// Score
/**
 * Gets the current score from the DOM and imcrements it by 1
 */
function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore; // can use oldScore +1 as well
}

/**
 * Gets the current tally of the incorrect answers from the DOM and imcrements it by 1
 */
function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore; // can use oldScore +1 as well
}

// Displaying the Questions

function displayAdditionQuestion (operand1, operand2) { 
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubstractQuestion () {

}

function displayMultiplyQuestion (operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion () {  //Challange

} 