function drawGrounds(x,y,length) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    drawGround();
    ctx.restore();

    // for loop: When you have repetitionin your code, 
    // you want to finish with just one instance of the 
    // repetition.

    const GROUND_WIDTH = 30*UNIT;
    for (var i = 0; i<length; i++) {
        ctx.save();
        ctx.translate(x*UNIT,y*UNIT);  
        ctx.translate(i*GROUND_WIDTH,0);      
        drawGround();
        ctx.restore();
    }
}

function drawGround() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,15*UNIT,15*UNIT);
    ctx.fillRect(15*UNIT,15*UNIT,15*UNIT,15*UNIT);
    ctx.fillStyle = "purple";
    ctx.fillRect(15*UNIT,0,15*UNIT,15*UNIT);
    ctx.fillRect(0,15*UNIT,15*UNIT,15*UNIT);
}