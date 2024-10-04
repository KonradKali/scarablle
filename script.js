let players = [0, 0, 0, 0]; // Punkty graczy
let playerNames = ["Gracz 1", "Gracz 2", "Gracz 3", "Gracz 4"]; // Nazwy graczy
let history = []; // Historia wyników

// Funkcja rozpoczynająca grę
function startGame() {
    playerNames = [
        document.getElementById("player1-name").value || "Gracz 1",
        document.getElementById("player2-name").value || "Gracz 2",
        document.getElementById("player3-name").value || "Gracz 3",
        document.getElementById("player4-name").value || "Gracz 4"
    ];

    // Ukrywa sekcję nazwy graczy i pokazuje sekcję punktów
    document.getElementById("player-names").style.display = "none";
    document.getElementById("players").style.display = "block";
    document.querySelector("button[onclick='resetGame()']").style.display = "inline-block";
    document.querySelector("button[onclick='endGame()']").style.display = "inline-block";
}

// Funkcja dodająca punkty do gracza
function addPoints(playerNumber) {
    const pointsInput = document.getElementById(`player${playerNumber}-points`);
    const points = parseInt(pointsInput.value);
    
    if (!isNaN(points) && points >= 0) {
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
    const winnerIndex = players.indexOf(maxPoints);
    const winnerName = playerNames[winnerIndex];
    
    if (winnerName) {
        const winnerText = `${winnerName} wygrał z wynikiem: ${maxPoints}`;
        history.push(winnerText); // Dodajemy wynik do historii
        updateHistory(); // Aktualizujemy historię
    }
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
