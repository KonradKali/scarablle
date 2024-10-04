let players = [0, 0, 0, 0]; // Punkty graczy
let history = []; // Historia wyników

// Funkcja dodająca punkty do gracza
function addPoints(playerNumber) {
    const pointsInput = document.getElementById(`player${playerNumber}-points`);
    const points = parseInt(pointsInput.value);
    
    if (!isNaN(points)) {
        players[playerNumber - 1] += points; // Dodaje punkty do gracza
        pointsInput.value = ""; // Czyści pole wejściowe
        updateTotals();
    }
}

// Funkcja aktualizująca sumy punktów graczy
function updateTotals() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`player${i}-total`).innerText = players[i - 1];
    }
}

// Funkcja resetująca grę
function resetGame() {
    players = [0, 0, 0, 0];
    updateTotals();
}

// Funkcja kończąca grę
function endGame() {
    const maxPoints = Math.max(...players);
    const winnerIndex = players.indexOf(maxPoints) + 1;
    const winnerText = `Gracz ${winnerIndex} wygrał z wynikiem: ${maxPoints}`;

    history.push(winnerText);
    updateHistory();
}

// Funkcja aktualizująca historię wyników
function updateHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = ""; // Czyści listę historii

    history.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
}
