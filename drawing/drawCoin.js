function drawCoin() {
    drawBody();
}

function drawBody() {
    ctx.fillStyle = "black";
    ctx.fillRect(5*UNIT,0,3*UNIT,5*UNIT);
}
// x = horizontal/left to right, y = vertical/top to bottom, w = left to right, h = height