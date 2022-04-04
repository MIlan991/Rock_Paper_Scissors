let userScore = 0;
let computerScore = 0;
const playerUp = document.getElementById("player-score");
const computerUp = document.getElementById("computer-score")
const titleWin = document.getElementById('title');
let playerReturn = document.getElementById('player-return');
let computerReturn = document.getElementById('computer-return');


function main() {
document.getElementById("button-r").addEventListener('click', function() {
  game("button-r");
})
document.getElementById("button-p").addEventListener('click', function() {
  game("button-p");
})
document.getElementById("button-s").addEventListener('click', function() {
  game("button-s");;
})
}

main();

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
          return 'button-r';
        case 1:
          return 'button-p';
        case 2:
          return 'button-s';
    }
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  if(userChoice === 'button-r' && computerChoice === 'button-s'){
    win(userChoice, computerChoice);
  } else if (userChoice === 'button-p' && computerChoice === 'button-r'){
    win(userChoice, computerChoice);
  } else if (userChoice === 'button-s' && computerChoice === 'button-p'){
    win(userChoice, computerChoice);
  } else if (userChoice === 'button-r' && computerChoice === 'button-p'){
    lose(userChoice, computerChoice);
  } else if (userChoice === 'button-p' && computerChoice === 'button-s'){
    lose(userChoice, computerChoice);
  } else if (userChoice === 'button-s' && computerChoice === 'button-r'){
    lose(userChoice, computerChoice);
  } else {(userChoice === computerChoice)
    draw(userChoice, computerChoice);
  }
}  

function win(userChoice, computerChoice) {
  userScore++;
  playerUp.innerHTML = userScore;
  console.log('Player won!');
  titleWin.textContent = `${returnWeaponWin(userChoice)} ${returnWeaponLose(computerChoice)}  YOU WON!`;
  playerReturn.innerHTML = `${returnWeaponLose(userChoice)}`;
  computerReturn.innerHTML = `${returnWeaponLose(computerChoice)}`;
  document.getElementById('title').style.color = "#1f703e";
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerUp.innerHTML = computerScore;
  console.log('Computer won!');
  titleWin.textContent = `${returnWeaponWin(computerChoice)} ${returnWeaponLose(userChoice)}  YOU LOST`;
  playerReturn.innerHTML = `${returnWeaponLose(userChoice)}`;
  computerReturn.innerHTML = `${returnWeaponLose(computerChoice)}`;
  document.getElementById('title').style.color = "#fc121b";
}

function draw(userChoice, computerChoice) {
  console.log('No winner! It is a draw!');
  titleWin.textContent = 'IT IS DRAW!';
  playerReturn.innerHTML = `${returnWeaponLose(userChoice)}`;
  computerReturn.innerHTML = `${returnWeaponLose(computerChoice)}`;
  document.getElementById('title').style.color = "black";
}

function word(letter) {
  if(letter === 'button-r') return 'Rock';
  if(letter === 'button-p') return 'Paper';
  if(letter === 'button-s') return 'Scissors';
}

function returnWeaponWin(choice) {
  if(choice === 'button-r') return '🌑 beats';
  if(choice === 'button-p') return '📃 covers';
  if(choice === 'button-s') return '✂️ cuts';
}

function returnWeaponLose(choice) {
  if(choice === 'button-r') return '🌑';
  if(choice === 'button-p') return '📃';
  if(choice === 'button-s') return '✂️';
}

