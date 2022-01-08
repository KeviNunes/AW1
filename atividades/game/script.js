window.addEventListener('DOMContentLoaded', () => {
    const casas = Array.from(document.querySelectorAll('.casa'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#resetar');
    const announcer = document.querySelector('.anunciador');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const XGANHOU = 'XGANHOU';
    const OGANHOU = 'OGANHOU';
    const EMPATE = 'EMPATE';

    /*
        Os index do tabuleiro:
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            announce(currentPlayer === 'X' ? XGANHOU : OGANHOU);
            isGameActive = false;
            return;
        }

        if (!board.includes(''))
            announce(EMPATE);
    }

    const announce = (type) => {
        switch (type) {
            case OGANHOU:
                announcer.innerHTML = 'Jogador <span class="playerO">O</span> ganhou';
                break;
            case XGANHOU:
                announcer.innerHTML = 'Jogador <span class="playerX">X</span> ganhou';
                break;
            case EMPATE:
                announcer.innerText = 'Empate';
        }
        announcer.classList.remove('hide');
    };

    const isValidAction = (casa) => {
        if (casa.innerText === 'X' || casa.innerText === 'O') {
            return false;
        }

        return true;
    };

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (casa, index) => {
        if (isValidAction(casa) && isGameActive) {
            casa.innerText = currentPlayer;
            casa.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        casas.forEach(casa => {
            casa.innerText = '';
            casa.classList.remove('playerX');
            casa.classList.remove('playerO');
        });
    }

    casas.forEach((casa, index) => {
        casa.addEventListener('click', () => userAction(casa, index));
    });

    resetButton.addEventListener('click', resetBoard);
});