function drawPacman(x,y,frame) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    if (frame == 1) {
        ctx.fillStyle = "#FDF734";
        ctx.fillRect(4*UNIT,0,5*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,1*UNIT,7*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,2*UNIT,7*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,3*UNIT,6*UNIT,1*UNIT);
        ctx.fillRect(0,4*UNIT,6*UNIT,1*UNIT);
        ctx.fillRect(0,5*UNIT,5*UNIT,1*UNIT);
        ctx.fillRect(0,6*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(0,7*UNIT,5*UNIT,1*UNIT);
        ctx.fillRect(0,8*UNIT,6*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,9*UNIT,6*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,10*UNIT,7*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,11*UNIT,7*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,12*UNIT,5*UNIT,1*UNIT);
    } else if (frame == 2) {
        ctx.fillStyle = "#FDF734";
        ctx.fillRect(4*UNIT,0,5*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,1*UNIT,9*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,2*UNIT,11*UNIT,2*UNIT);
        ctx.fillRect(0,4*UNIT,10*UNIT,1*UNIT);
        ctx.fillRect(0,5*UNIT,7*UNIT,1*UNIT);
        ctx.fillRect(0,6*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(0,7*UNIT,7*UNIT,1*UNIT);
        ctx.fillRect(0,8*UNIT,10*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,9*UNIT,11*UNIT,2*UNIT);
        ctx.fillRect(2*UNIT,11*UNIT,9*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,12*UNIT,5*UNIT,1*UNIT);
    }
    ctx.restore();

    
    
}
function drawPacmanDying(x,y,frame) {
    // save
    // translate
    if (frame == 1) {

    } else if (frame == 2) {

    } // go all the way to the last frame
    // restore
}