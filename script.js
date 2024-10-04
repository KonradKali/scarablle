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
