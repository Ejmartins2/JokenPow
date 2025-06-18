const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');


let playerScore = 0;
let computerScore = 0;

const result = document.querySelector('.result');
const playHuman = (humanChoice) => {
  playRound(humanChoice, playComputer());

}

const playComputer = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
const playRound = (human, computer) => {

  console.log('Humano:' + human + "computador: " + computer)

  if (human === computer) {
    result.innerHTML = 'Empatou!';
  }
  else if (
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock') ||
    (human === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    score1.innerHTML = playerScore;
    result.innerHTML = 'Você ganhou!';
  } else {
    result.innerHTML = 'Você perdeu!';
    computerScore++;
    score2.innerHTML = computerScore;
  }




  document.querySelector('#rock2').innerHTML = computer === 'rock' ? '&#x1F44A;' : ''
  document.querySelector('#paper2').innerHTML = computer === 'paper' ? '&#x1F590;' : ''
  document.querySelector('#scissors2').innerHTML = computer === 'scissors' ? '&#x270C;' : ''


  function resetGame() {

    document.querySelector('#rock2').innerHTML = '';
    document.querySelector('#paper2').innerHTML = '';
    document.querySelector('#scissors2').innerHTML = '';
    document.querySelector('#ganhou').style.display = 'none';
    document.querySelector('#perdeu').style.display = 'none';
    
    playerScore = 0;
    computerScore = 0;
    score1.innerHTML = playerScore;
    score2.innerHTML = computerScore;


  }

  function alertEndGame() {
    if (playerScore === 5) {
      document.getElementById("ganhou").src = "img/vcganhou.jpg";
      document.getElementById("ganhou").style.display = "block";



     

    } else if (computerScore === 5) {
      document.getElementById("perdeu").src = "img/vcperdeu.jpg";
      document.getElementById("perdeu").style.display = "block";

    }

  }
  alertEndGame();

  document.getElementById("reset").addEventListener("click", resetGame)


}