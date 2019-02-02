function drawBricks(x, y, numBricks) {
    // For loop
    for (var i =0; i<numBricks; i++){
        // In the first loop, i equals 0.
        // In the second loop, i equals 1.
        // In the third loop, i equls 2.
        // In the fourth loop, i equals 3.
        // In the fifth loop, i equals 4.
        ctx.save();
        ctx.translate(i*16*UNIT+x*UNIT,y*UNIT,0);
        drawBrick();
        ctx.restore();
    }
}


function drawBrick() {
    ctx.fillStyle = "#62473B";
    ctx.fillRect(0*UNIT,0*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,0*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,0,1*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,1*UNIT,9*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,2*UNIT,9*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,3*UNIT,9*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,4*UNIT,9*UNIT,1*UNIT);
    ctx.fillRect(0,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,5*UNIT,1*UNIT,1*UNIT);


    ctx.fillStyle = "#E3C597";
    ctx.fillRect(0,1*UNIT,1*UNIT,9*UNIT);
    ctx.fillRect(0*UNIT,11*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(15*UNIT,1*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(11*UNIT,0*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,0*UNIT,9*UNIT,1*UNIT);


    ctx.fillStyle = "black";
    ctx.fillRect(0,1*UNIT,1*UNIT,9*UNIT);
    ctx.fillRect(1*UNIT,15*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,15*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,6*UNIT,1*UNIT,9*UNIT);
    ctx.fillRect(0*UNIT,10*UNIT,1*UNIT,1*UNIT);
}