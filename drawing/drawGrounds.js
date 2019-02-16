function drawGrounds() {
    drawGround();
}

function drawGround() {
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,15*UNIT,15*UNIT);
    ctx.fillRect(15*UNIT,15*UNIT,15*UNIT,15*UNIT);
    ctx.fillStyle = "brown";
    ctx.fillRect(15*UNIT,0,15*UNIT,15*UNIT);
    ctx.fillRect(0,15*UNIT,15*UNIT,15*UNIT);
}