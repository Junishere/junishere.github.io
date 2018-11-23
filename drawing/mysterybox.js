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

    drawRuler(5);
    // x = horizontal/left to right, y = vertical/top to bottom, w = left to right, h = height
}
