function endGame() {
    clearInterval(interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width/2, canvas.height/2);
    document.getElementById("restart-button").style.display = "block";
}

var interval;
function startGame() {
    interval = setInterval(draw, 10);
}

function restartGame() {
    document.location.reload();
}

document.getElementById("restart-button").addEventListener("click", function(){
    restartGame();
});

if(!gameStarted) {
    document.getElementById("instructions").style.display = "block";
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("score").style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.textAlign = "center";
    ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2);
}