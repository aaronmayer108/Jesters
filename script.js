document.addEventListener('DOMContentLoaded', (event) => {
    let currentPlayer = 'X';
    const cells = Array.from(document.querySelectorAll('.cell'));
    const message = document.querySelector('#message');

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWin() {
        return winningCombinations.some(combination =>
            combination.every(index => cells[index].textContent === 'X') ||
            combination.every(index => cells[index].textContent === 'O')
        );
    }

    function checkTie() {
        return cells.every(cell => cell.textContent !== '');
    }

    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if (e.target.textContent === '') {
                e.target.textContent = currentPlayer;
                if (checkWin()) {
                    message.textContent = `${currentPlayer} wins!`;
                    cells.forEach(cell => cell.removeEventListener('click'));
                    return;
                }
                if (checkTie()) {
                    message.textContent = "It's a tie!";
                    return;
                }
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                message.textContent = `Current player: ${currentPlayer}`;
            }
        });
    });
});
