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
    ctx.fillRect(0,0,2*unit,1*unit);
    ctx.fillRect(4*unit,0,6*unit,1*unit);
    ctx.fillRect(2*unit,1*unit,2*unit,1*unit);
    ctx.fillRect(9*unit,1*unit,3*unit,1*unit);
    ctx.fillRect(3*unit,2*unit,1*unit,1*unit);
    ctx.fillRect(10*unit,2*unit,4*unit,1*unit);
    ctx.fillRect(0,3*unit,2*unit,1*unit);
    ctx.fillRect(3*unit,3*unit,8*unit,1*unit);
    ctx.fillRect(12*unit,3*unit,3*unit,1*unit);
    ctx.fillRect(0*unit,4*unit,11*unit,1*unit);
    ctx.fillRect(0*unit,5*unit,11*unit,1*unit);
    ctx.fillRect(13*unit,4*unit,2*unit,1*unit);
    ctx.fillRect(13*unit,5*unit,1*unit,1*unit);
    ctx.fillRect(15*unit,5*unit,1*unit,1*unit);
    ctx.fillRect(0,6*unit,5*unit,1*unit);
    ctx.fillRect(7*unit,6*unit,5*unit,1*unit);
    ctx.fillRect(15*unit,6*unit,1*unit,1*unit);
    ctx.fillRect(0*unit,7*unit,4*unit,1*unit);
    ctx.fillRect(7*unit,7*unit,1*unit,1*unit);
    ctx.fillRect(10*unit,7*unit,6*unit,1*unit);
    ctx.fillRect(0*unit,8*unit,4*unit,1*unit);
    ctx.fillRect(11*unit,8*unit,5*unit,1*unit);
    ctx.fillRect(0*unit,9*unit,5*unit,1*unit);
    ctx.fillRect(0*unit,10*unit,7*unit,1*unit);
    ctx.fillRect(11*unit,9*unit,4*unit,1*unit);
    ctx.fillRect(0*unit,11*unit,7*unit,1*unit);
    ctx.fillRect(10*unit,10*unit,5*unit,1*unit);
    ctx.fillRect(7*unit,11*unit,7*unit,1*unit);
    ctx.fillRect(0*unit,12*unit,12*unit,1*unit);
    ctx.fillRect(0*unit,13*unit,2*unit,1*unit);
    ctx.fillRect(4*unit,13*unit,6*unit,1*unit);
    ctx.fillStyle = "#ABAAA6";
    ctx.fillRect(2*unit,0,2*unit,1*unit);
    ctx.fillRect(0,2*unit,2*unit,1*unit);
    ctx.fillRect(4*unit,2*unit,5*unit,1*unit);
    ctx.fillRect(2*unit,3*unit,1*unit,1*unit);
    ctx.fillRect(9*unit,3*unit,1*unit,1*unit);
    ctx.fillRect(4*unit,8*unit,2*unit,1*unit);
    ctx.fillRect(5*unit,9*unit,3*unit,1*unit);
    ctx.fillRect(7*unit,10*unit,3*unit,1*unit);
    ctx.fillRect(10*unit,9*unit,1*unit,1*unit);
    drawRuler(5);
    // x = horizontal/left to right, y = vertical/top to bottom, w = left to right, h = height
}