//ange namn på spelaren

const form = document.querySelector('form');
form.addEventListener('submit', addItem);
function addItem(event) {
    event.preventDefault();//detta måste vara alltid 
  
    const em = document.querySelector('em', 'span' );
    const itemInput = document.querySelector('#item');
    em.innerText = itemInput.value;
}




const choices = ["Rock", "Scissors", "Paper"]; //arrays med olika val
let userWins = 0;
let computerWins = 0;


//getComputerChoice med  random ordning på choices.length(arrays) 
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};


//whoWinner jemföra userChoice och computerChoice och
const whoWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This is a tie.";
  } else if (userChoice === "Rock") {
    if (computerChoice === "Paper") {
      return "The computer won!";
    } else {
      return "You won.";
    }
  } else if (userChoice === "Paper") {
    if (computerChoice === "Scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "Scissors") {
    if (computerChoice === "Rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  
  
//koppla function med button
  document.getElementById("userChoice").innerText = userChoice;
  document.getElementById("computerChoice").innerText = computerChoice;

  const result = whoWinner(userChoice, computerChoice);
  document.getElementById("result").innerText = result;


  //Conditional statements för vem ska vinna upp till 3 round

  if (result.includes("won")) {
    if (result.includes("You")) {
      userWins++;
      document.getElementById("userWinCount").innerText = userWins;
      if (userWins === 3) {
        setTimeout(()=>{
          alert("You won 3 times.");
        resetCounts();
        },200)
      }
    } else {
      computerWins++;
      document.getElementById("computerWinCount").innerText = computerWins;
      if (computerWins === 3) {
        setTimeout(()=>{
          alert("The computer won 3 times.");
        resetCounts();
        },200)
      }
    }
  }
};


//resultat för choices
const resetCounts = () => {
  userWins = 0;
  computerWins = 0;
  document.getElementById("userWinCount").innerText = userWins;
  document.getElementById("computerWinCount").innerText = computerWins;
};

const choiceButtons = document.getElementsByClassName("choice");
for (let i = 0; i < choiceButtons.length; i++) {
  const button = choiceButtons[i];
  button.addEventListener("click", function () {
    playGame(choices[i]);
  });
}