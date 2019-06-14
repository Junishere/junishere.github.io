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
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    ctx.fillStyle = "#FDF734";
    if (frame == 1) {
        ctx.fillRect(5*UNIT,1*UNIT,5*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,2*UNIT,9*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,3*UNIT,11*UNIT,2*UNIT);
        ctx.fillRect(1*UNIT,5*UNIT,13*UNIT,5*UNIT);
        ctx.fillRect(2*UNIT,10*UNIT,11*UNIT,2*UNIT);
        ctx.fillRect(3*UNIT,12*UNIT,9*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,13*UNIT,5*UNIT,1*UNIT);
    } else if (frame == 2) {
        ctx.fillRect(1*UNIT,3*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,3*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,4*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(11*UNIT,4*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,5*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(10*UNIT,5*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,6*UNIT,5*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,6*UNIT,5*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,7*UNIT,6*UNIT,1*UNIT,);
        ctx.fillRect(8*UNIT,7*UNIT,6*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,8*UNIT,11*UNIT,2*UNIT);
        ctx.fillRect(3*UNIT,10*UNIT,9*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,11*UNIT,5*UNIT,1*UNIT);
    } else if (frame == 3) {
        ctx.fillRect(2*UNIT,4*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(14*UNIT,4*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,5*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,5*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,6*UNIT,5*UNIT,1*UNIT);
        ctx.fillRect(11*UNIT,6*UNIT,5*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,7*UNIT,7*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,7*UNIT,7*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,8*UNIT,13*UNIT,2*UNIT);
        ctx.fillRect(3*UNIT,10*UNIT,11*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,11*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,11*UNIT,3*UNIT,1*UNIT);
    } else if (frame == 4) {
        ctx.fillRect(1*UNIT,6*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(13*UNIT,6*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,7*UNIT,6*UNIT,1*UNIT);
        ctx.fillRect(10*UNIT,7*UNIT,6*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,8*UNIT,15*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,9*UNIT,13*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,10*UNIT,11*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,11*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,11*UNIT,3*UNIT,1*UNIT);
    } else if (frame == 5) {
        ctx.fillRect(0,0,5*UNIT,5*UNIT);
    } else if (frame == 6) {
        ctx.fillRect(0,0,1*UNIT,5*UNIT);
    } else if (frame == 7) {
        ctx.fillRect(0,0,2*UNIT,5*UNIT);
    } else if (frame == 8) {
        ctx.fillRect(0,0,3*UNIT,5*UNIT);
    } else if (frame == 9) {
        ctx.fillRect(0,0,4*UNIT,5*UNIT);
    } else if (frame == 10) {
        ctx.fillRect(0,0,5*UNIT,5*UNIT);
    } else if (frame == 11) {
        ctx.fillRect(0,0,3*UNIT,3*UNIT);
    } else if (frame == 12) {
        ctx.fillRect(0,0,1*UNIT,1*UNIT);
    }
    ctx.restore();
}