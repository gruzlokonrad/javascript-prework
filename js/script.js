    const computerChoose = () => {
      let randomNumber = Math.floor(Math.random() * 3 + 1);
      let computerMove = 'nieznany ruch';

      if (randomNumber == 1) {
        computerMove = 'kamień';
      }
      if (randomNumber == 2) {
        computerMove = 'papier';
      }
      if (randomNumber == 3) {
        computerMove = 'nożyce';
      }
      console.log('Komputer: ' + computerMove);
      return computerMove;
    }

    const playerChoose = async () => {
      let playerInput = await prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
      let playerMove = 'nieznany ruch';

      if (playerInput == '1') {
        playerMove = 'kamień';
      }
      if (playerInput == '2') {
        playerMove = 'papier';
      }
      if (playerInput == '3') {
        playerMove = 'nożyce';
      }
      if (playerMove == 'nieznany ruch') {
        alert('Proszę wybrać cyfrę: 1, 2 lub 3')
        playerChoose();
      }
      console.log('Ty: ' + playerMove);
      return (playerMove);
    }


    const game = async () => {
      const computerMove = computerChoose();
      const playerMove = await playerChoose();
      let message = 'nieznany';

      printMessage('Mój ruch to: ' + computerMove)
      printMessage('Twój ruch to: ' + playerMove)

      if (computerMove == 'kamień' && playerMove == 'papier' ||
        computerMove == 'nożyce' && playerMove == 'kamień' ||
        computerMove == 'papier' && playerMove == 'nożyce') {
        message = 'Ty wygrywasz!';
      }
      if (computerMove == playerMove) {
        message = 'Jest remis!';
      }
      if (playerMove == 'kamień' && computerMove == 'papier' ||
        playerMove == 'nożyce' && computerMove == 'kamień' ||
        playerMove == 'papier' && computerMove == 'nożyce') {
        message = 'Niestety, przegrałeś.';
      }
      printMessage(message)
    }

    game();