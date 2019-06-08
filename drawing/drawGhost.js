function drawGhost(x,y,frame) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    if (frame == 1) {
        ctx.fillStyle = "#ED462F";
        ctx.fillRect(5*UNIT,0,4*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,1*UNIT,8*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,2*UNIT,10*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,3*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(6*UNIT,3*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,3*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,3*UNIT,2*UNIT,3*UNIT);
        ctx.fillRect(7*UNIT,3*UNIT,2*UNIT,3*UNIT);
        ctx.fillRect(0*UNIT,6*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(7*UNIT,6*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(13*UNIT,6*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(0,7*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(6*UNIT,7*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,7*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(0,7*UNIT,14*UNIT,6*UNIT);
        
        ctx.fillRect(0,13*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,13*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(8*UNIT,13*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,13*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(0,14*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(4*UNIT,14*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(8*UNIT,14*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(13*UNIT,14*UNIT,1*UNIT,1*UNIT);
        ctx.fillStyle = "white";
        ctx.fillRect(4*UNIT,3*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,4*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,5*UNIT,2*UNIT,2*UNIT);
        ctx.fillRect(4*UNIT,7*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(10*UNIT,3*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,4*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,5*UNIT,2*UNIT,2*UNIT);
        ctx.fillRect(10*UNIT,7*UNIT,2*UNIT,1*UNIT);
        ctx.fillStyle = "blue";
        ctx.fillRect(5*UNIT,5*UNIT,2*UNIT,2*UNIT);
        ctx.fillRect(11*UNIT,5*UNIT,2*UNIT,2*UNIT);
    } else if (frame == 2) {
        ctx.fillStyle = "#ED462F";
        ctx.fillRect(5*UNIT,0,4*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,1*UNIT,8*UNIT,1*UNIT);
        ctx.fillRect(2*UNIT,2*UNIT,10*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,3*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(6*UNIT,3*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,3*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,3*UNIT,2*UNIT,3*UNIT);
        ctx.fillRect(7*UNIT,3*UNIT,2*UNIT,3*UNIT);
        ctx.fillRect(0*UNIT,6*UNIT,3*UNIT,1*UNIT);
        ctx.fillRect(7*UNIT,6*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(13*UNIT,6*UNIT,1*UNIT,1*UNIT);
        ctx.fillRect(0,7*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(6*UNIT,7*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(12*UNIT,7*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(0,7*UNIT,14*UNIT,6*UNIT);
        
        ctx.fillRect(0,13*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(5*UNIT,13*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(10*UNIT,13*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(1*UNIT,14*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(6*UNIT,14*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(11*UNIT,14*UNIT,2*UNIT,1*UNIT);
        ctx.fillStyle = "white";
        ctx.fillRect(4*UNIT,3*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,4*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(3*UNIT,5*UNIT,2*UNIT,2*UNIT);
        ctx.fillRect(4*UNIT,7*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(10*UNIT,3*UNIT,2*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,4*UNIT,4*UNIT,1*UNIT);
        ctx.fillRect(9*UNIT,5*UNIT,2*UNIT,2*UNIT);
        ctx.fillRect(10*UNIT,7*UNIT,2*UNIT,1*UNIT);
        ctx.fillStyle = "blue";
        ctx.fillRect(5*UNIT,5*UNIT,2*UNIT,2*UNIT);
        ctx.fillRect(11*UNIT,5*UNIT,2*UNIT,2*UNIT);

    }
    ctx.restore();

}