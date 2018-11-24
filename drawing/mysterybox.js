var canvas;
var ctx;
var unit =30;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // filling a rectangle
    // ctx.fillRect(0,0,100,100);
    // // change color of fill

    // ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "black";
    // ctx.fillRect(100,0,100,100);
    ctx.fillRect(2*unit,0*unit,15*unit,1*unit);
    ctx.fillRect(1*unit,1*unit,1*unit,1*unit);
    ctx.fillRect(17*unit,1*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,2*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,3*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,4*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,5*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,6*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,7*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,8*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,9*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,10*unit,1*unit,7*unit);
    ctx.fillRect(1*unit,17*unit,1*unit,1*unit);
    ctx.fillRect(2*unit,18*unit,15*unit,1*unit);
    ctx.fillRect(17*unit,17*unit,1*unit,1*unit);
    ctx.fillRect(18*unit,2*unit,1*unit,15*unit);
    ctx.fillRect(2*unit,2*unit,2*unit,2*unit);
    ctx.fillRect(15*unit,2*unit,2*unit,2*unit);
    ctx.fillRect(2*unit,15*unit,2*unit,2*unit);
    ctx.fillRect(15*unit,15*unit,2*unit,2*unit);
    ctx.fillRect(6*unit,3*unit,6*unit,1*unit);
    ctx.fillRect(5*unit,4*unit,1*unit,1*unit);
    ctx.fillRect(12*unit,4*unit,1*unit,1*unit);
    ctx.fillRect(4*unit,5*unit,1*unit,3*unit);
    ctx.fillRect(13*unit,5*unit,1*unit,3*unit);
    ctx.fillRect(5*unit,8*unit,4*unit,1*unit);
    ctx.fillRect(8*unit,6*unit,2*unit,2*unit);
    ctx.fillRect(7*unit,9*unit,1*unit,3*unit);
    ctx.fillRect(12*unit,8*unit,1*unit,1*unit);
    ctx.fillRect(11*unit,9*unit,1*unit,3*unit);
    ctx.fillRect(8*unit,12*unit,3*unit,1*unit);
    ctx.fillRect(7*unit,13*unit,1*unit,2*unit);
    ctx.fillRect(11*unit,13*unit,1*unit,2*unit);
    ctx.fillRect(8*unit,15*unit,3*unit,1*unit);
    ctx.fillStyle = "#F8B932";
    ctx.fillRect(2*unit,1*unit,15*unit,1*unit);
    ctx.fillRect(1*unit,2*unit,1*unit,15*unit);
    ctx.fillRect(17*unit,2*unit,1*unit,15*unit);
    ctx.fillRect(2*unit,17*unit,11*unit,1*unit);
    ctx.fillRect(14*unit,17*unit,3*unit,1*unit);
    ctx.fillRect(12*unit,3*unit,1*unit,1*unit);
    ctx.fillRect(13*unit,4*unit,1*unit,1*unit);
    ctx.fillRect(14*unit,5*unit,1*unit,3*unit);
    ctx.fillRect(13*unit,8*unit,1*unit,1*unit);
    ctx.fillRect(12*unit,9*unit,1*unit,3*unit);
    ctx.fillRect(11*unit,12*unit,1*unit,1*unit);
    ctx.fillRect(12*unit,13*unit,1*unit,2*unit);
    ctx.fillRect(11*unit,15*unit,1*unit,1*unit);
    ctx.fillStyle = "#FCD63C";
    ctx.fillRect(4*unit,2*unit,11*unit,1*unit);
    ctx.fillRect(4*unit,16*unit,11*unit,1*unit);
    ctx.fillRect(13*unit,17*unit,1*unit,1*unit);
    ctx.fillRect(4*unit,3*unit,2*unit,1*unit);
    ctx.fillRect(13*unit,3*unit,2*unit,1*unit);
    ctx.fillRect(2*unit,4*unit,1*unit,11*unit);
    ctx.fillRect(3*unit,4*unit,1*unit,11*unit);
    ctx.fillRect(4*unit,4*unit,1*unit,1*unit);
    ctx.fillRect(14*unit,4*unit,3*unit,1*unit);
    ctx.fillRect(15*unit,5*unit,2*unit,10*unit);
    ctx.fillRect(14*unit,8*unit,1*unit,8*unit);
    ctx.fillRect(4*unit,8*unit,1*unit,8*unit);
    ctx.fillRect(5*unit,9*unit,2*unit,7*unit);
    ctx.fillRect(13*unit,9*unit,1*unit,7*unit);
    ctx.fillRect(7*unit,12*unit,1*unit,1*unit);
    ctx.fillRect(12*unit,12*unit,1*unit,1*unit);
    ctx.fillRect(7*unit,15*unit,1*unit,1*unit);
    ctx.fillRect(12*unit,15*unit,1*unit,1*unit);
    
    drawRuler(5);
    // x = horizontal/left to right, y = vertical/top to bottom, w = left to right, h = height
}
