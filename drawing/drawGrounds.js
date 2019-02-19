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
    ctx.fillStyle = "white";
    ctx.fillRect(4*UNIT,4*UNIT,12*UNIT,4*UNIT);
    ctx.fillRect(4*UNIT,8*UNIT,4*UNIT,8*UNIT);
    
    ctx.fillStyle = "#76CAB8";
    ctx.fillRect(0,0*UNIT,4*UNIT,4*UNIT);
    ctx.fillRect(8*UNIT,0,4*UNIT,4*UNIT);

    ctx.fillStyle = "#6DBBAA";
    ctx.fillRect(4*UNIT,0,4*UNIT,4*UNIT);
    ctx.fillRect(12*UNIT,0,4*UNIT,4*UNIT);

    ctx.fillStyle = "#79CDBD";
    ctx.fillRect(16*UNIT,0,4*UNIT,4*UNIT);

    ctx.fillStyle = "#7FDAC8";
    ctx.fillRect(20*UNIT,0,6*UNIT,4*UNIT);

    ctx.fillStyle = "#76CAB8";
    ctx.fillRect(26*UNIT,0,4*UNIT,4*UNIT);
    ctx.fillRect(30*UNIT,4*UNIT,4*UNIT,8*UNIT);
    ctx.fillRect(30*UNIT,16*UNIT,4*UNIT,8*UNIT);

    ctx.fillStyle = "#6BB5A3";
    ctx.fillRect(30*UNIT,12*UNIT,4*UNIT,4*UNIT);

    ctx.fillStyle = "#85E3D2";
    ctx.fillRect(30*UNIT,22*UNIT,4*UNIT,4*UNIT);

    ctx.fillStyle = "#70C1AF";
    ctx.fillRect(30*UNIT,25*UNIT,4*UNIT,4*UNIT);

    ctx.fillStyle = "#71C5B2";
    ctx.fillRect(0,25*UNIT,30*UNIT,4*UNIT);
    ctx.fillRect(0,4*UNIT,4*UNIT,12*UNIT);

    ctx.fillStyle = "#75C8B6";
    ctx.fillRect(0,16*UNIT,4*UNIT,4*UNIT);

    ctx.fillStyle = "#87E5D2";
    ctx.fillRect(0,20*UNIT,4*UNIT,4.9*UNIT);

    ctx.fillStyle = "#93F8EB";
    ctx.fillRect(16*UNIT,4*UNIT,14*UNIT,21*UNIT);
    ctx.fillRect(8*UNIT,8*UNIT,8*UNIT,17*UNIT);
    ctx.fillRect(4*UNIT,16*UNIT,4*UNIT,9*UNIT);
}