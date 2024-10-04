let player1Total = 0;
let player2Total = 0;
let player3Total = 0;
let player4Total = 0;

function addPoints(player) {
    const points = document.getElementById(`player${player}-points`).value;
    if (points === "") return;

    if (player === 1) {
        player1Total += parseInt(points);
        document.getElementById("player1-total").innerText = player1Total;
    } else if (player === 2) {
        player2Total += parseInt(points);
        document.getElementById("player2-total").innerText = player2Total;
    } else if (player === 3) {
        player3Total += parseInt(points);
        document.getElementById("player3-total").innerText = player3Total;
    } else if (player === 4) {
        player4Total += parseInt(points);
        document.getElementById("player4-total").innerText = player4Total;
    }

    document.getElementById(`player${player}-points`).value = "";
}

function resetGame() {
    player1Total = 0;
    player2Total = 0;
    player3Total = 0;
    player4Total = 0;
    document.getElementById("player1-total").innerText = player1Total;
    document.getElementById("player2-total").innerText = player2Total;
    document.getElementById("player3-total").innerText = player3Total;
    document.getElementById("player4-total").innerText = player4Total;
}
let players = [];
let history = [];

// Funkcja dodawania wyniku
function addScore() {
    const playerName = document.getElementById("player-name").value;
    const playerScore = parseInt(document.getElementById("player-score").value);
    
    if (playerName && !isNaN(playerScore)) {
        players.push({ name: playerName, score: playerScore });
        updateScores();
        addToHistory(playerName, playerScore);
    }
}

// Funkcja aktualizująca wyświetlane wyniki
function updateScores() {
    const scoresTable = document.getElementById("scores");
    scoresTable.innerHTML = ""; // Czyści tabelę

    players.forEach((player, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${player.name}</td><td>${player.score}</td><td><button onclick="removePlayer(${index})">Usuń</button></td>`;
        scoresTable.appendChild(row);
    });
}

// Funkcja dodająca wyniki do historii
function addToHistory(playerName, playerScore) {
    history.push({ name: playerName, score: playerScore });
    updateHistory();
}

// Funkcja aktualizująca wyświetlaną historię
function updateHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = ""; // Czyści listę historii

    history.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${entry.name}: ${entry.score} <button onclick="removeHistoryEntry(${index})">Usuń</button>`;
        historyList.appendChild(listItem);
    });
}

// Funkcja usuwająca gracza
function removePlayer(index) {
    players.splice(index, 1); // Usuwa gracza z tablicy
    updateScores();
}

// Funkcja usuwająca wpis z historii
function removeHistoryEntry(index) {
    history.splice(index, 1); // Usuwa wpis z historii
    updateHistory();
}
