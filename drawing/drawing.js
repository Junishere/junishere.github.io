var canvas;
var ctx;
var unit =10;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // filling a rectangle
    // ctx.fillRect(0,0,100,100);
    // // change color of fill
    
    // ctx.fillStyle = "blue";
    // ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "blue";
    drawRuler(10);
    ctx.fillRect(200,0,100,100);
    
}