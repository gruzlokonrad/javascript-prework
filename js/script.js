
let getMove = (number) => {
  let selectedMove;
  if (number == 1) {
    selectedMove = 'kamień';
  } else if (number == 2) {
    selectedMove = 'papier';
  } else if (number == 3) {
    selectedMove = 'nożyce';
  } else {
    alert('Proszę wybrać cyfrę: 1, 2 lub 3.');
    game();
  }
  return selectedMove
}


let playerChoose = (select) => {
  const move = getMove(select);
  return move;
}

let computerChoose = () => {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const move = getMove(randomNumber);
  return move;
}

let conditions = (computerMove, playerMove) => {
  let message;

  if (computerMove == 'kamień' && playerMove == 'papier' ||
    computerMove == 'nożyce' && playerMove == 'kamień' ||
    computerMove == 'papier' && playerMove == 'nożyce') {
    message = 'Ty wygrywasz!';
  } else if (computerMove == playerMove) {
    message = 'Jest remis!';
  } else if (playerMove == 'kamień' && computerMove == 'papier' ||
    playerMove == 'nożyce' && computerMove == 'kamień' ||
    playerMove == 'papier' && computerMove == 'nożyce') {
    message = 'Niestety, przegrałeś.';
  } else {
    message = 'Coś poszło nie tak ..';
  }
  return message;
}

let game = async (select) => {
  const computerMove = await computerChoose();
  const playerMove = await playerChoose(select);

  const result = conditions(computerMove, playerMove);

  printMessage('Komputer: ' + computerMove);
  printMessage('Twój wybór: ' + playerMove);
  printMessage(result);
}