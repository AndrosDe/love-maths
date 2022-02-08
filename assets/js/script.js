// Wait until the DOM to finish loading before running the game
// Get the button elements and event listeners to them

document.addEventListener("DOMContentLoaded", function() {  // Once the DOM has finish loading this function will run
  let buttons = document.getElementsByTagName("button");  // This will get all buttons from the page (5 in total) and put tem in an array
  
  // Iterating through the array can be done with: for (let i = 0; i < buttons.length; i++)
  // Or with a newer version like this:
  for (let button of buttons){
    button.addEventListener("click", function(){  // Once a button has been clicked this function will run
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked Submit!")  //If the submit button was clicked, the alert will pop up
      } else {
          let gameType = this.getAttribute("data-type");
          alert(`You clicked ${gameType}`); // If another button was pressed this alert will pop up to tell what button was pressed (at the beginning of writing the code to check if it is working)
      }
    })
  }  

})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

// Score

function incrementScore() {

}

function incrementWrongAnswer() {

}

// Displaying the Questions

function displayAdditionQuestion () {

}

function displaySubstractQuestion () {

}

function displayMultiplyQuestion () {

}

function displayDivisionQuestion () {  //Challange

} 