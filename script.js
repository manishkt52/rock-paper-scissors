const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;

// Higher Order Function --> ForEach
possibleChoices.forEach(function (val) {
  val.addEventListener("click", function (e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    let ans1 = generateComputerChoice();
    computerChoiceDisplay.innerHTML = ans1;
    let ans2 = result(ans1);
    resultDisplay.innerHTML = ans2;
  });
});

function generateComputerChoice() {
  let listComputerChoice = ["rock", "paper", "scissors"];
  let value = Math.floor(Math.random() * listComputerChoice.length);
  let gcc = listComputerChoice[value];
  return gcc;
}

function result(ans1) {
  let computerValue = ans1;
  let res;
  if (userChoice == "paper" && computerValue == "rock") {
    res = "You Win!";
  } else if (userChoice == "rock" && computerValue == "scissors") {
    res = "You Win!";
  } else if (userChoice == "scissors" && computerValue == "paper") {
    res = "You Win!";
  } else {
    if (
      (userChoice == "paper" && computerValue == "paper") ||
      (userChoice == "rock" && computerValue == "rock") ||
      (userChoice == "scissors" && computerValue == "scissors")
    ) {
      res = "Tie";
    } else {
      res = "You Lose!";
    }
  }
  return res;
}
