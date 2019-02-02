function drawCoin() {
    drawBody();
}

function drawBody() {
    ctx.fillStyle = "black";
    ctx.fillRect(5*UNIT,0*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,1*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,2*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,3*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(0*UNIT,5*UNIT,1*UNIT,6*UNIT);
    ctx.fillRect(1*UNIT,11*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(2*UNIT,14*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,15*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,14*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,12*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(11*UNIT,4*UNIT,1*UNIT,8*UNIT);
    ctx.fillRect(10*UNIT,2*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(7*UNIT,1*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,4*UNIT,1*UNIT,8*UNIT);
    ctx.fillRect(5*UNIT,12*UNIT,2*UNIT,1*UNIT);

    ctx.fillStyle = "white";
    ctx.fillRect(5*UNIT,1*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,2*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,3*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,5*UNIT,1*UNIT,6*UNIT);
    ctx.fillRect(5*UNIT,3*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,4*UNIT,1*UNIT,8*UNIT);

    ctx.fillStyle = "orange";
    ctx.fillRect(4*UNIT,2*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,3*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,3*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,4*UNIT,1*UNIT,8*UNIT);
    ctx.fillRect(2*UNIT,4*UNIT,1*UNIT,9*UNIT);
    ctx.fillRect(2*UNIT,13*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,12*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,4*UNIT,1*UNIT,6*UNIT);
    ctx.fillRect(5*UNIT,10*UNIT,2*UNIT,2*UNIT);

    ctx.fillStyle = "brown";
    ctx.fillRect(9*UNIT,2*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(10*UNIT,4*UNIT,1*UNIT,8*UNIT);
    ctx.fillRect(9*UNIT,12*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,13*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,14*UNIT,4*UNIT,1*UNIT);
}
// x = horizontal/left to right, y = vertical/top to bottom, w = left to right, h = height