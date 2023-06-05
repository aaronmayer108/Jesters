document.addEventListener('DOMContentLoaded', (event) => {
    let currentPlayer = 'X';
    const cells = document.querySelectorAll('.cell');
    const message = document.querySelector('#message');

    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if (e.target.textContent === '') {
                e.target.textContent = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                message.textContent = `Current player: ${currentPlayer}`;
            }
        });
    });
});
