function drawGrounds() {
    drawGround();
}

function drawGround() {
    ctx.fillStyle = "green";
    ctx.fillRect(0,129*UNIT,200*UNIT,10*UNIT);
    ctx.fillStyle = "brown"
    ctx.fillRect(0,133*UNIT,200*UNIT,10*UNIT);
}