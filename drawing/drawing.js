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
    
    // ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "blue";
    // ctx.fillRect(100,0,100,100);

    drawRuler(10);
    ctx.fillRect(100,0,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(100,0,100,100);

    drawRuler(20);
    ctx.fillRect(100,0,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(0,0,100,100);

    drawRuler(30);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(300,0,100,100);

    drawRuler(40);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(400,0,100,100);

    drawRuler(50);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(500,0,100,100);

    drawRuler(60);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(600,0,100,100);

    drawRuler(70);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(700,100,100,100);

    drawRuler(80);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(800,0,100,100);

    drawRuler(90);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(900,0,100,100);

    drawRuler(20);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(200,0,100,100);

    drawRuler(70);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(700,0,100,100);

    drawRuler(20);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(200,300,100,100);

    drawRuler(70);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(700,300,100,100);

    drawRuler(20);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(200,500,100,100);

    drawRuler(70);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(700,500,100,100);

    drawRuler(40);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(400,200,100,100);

    drawRuler(50);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(500,200,100,100);

    drawRuler(40);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(400,400,100,100);

    drawRuler(50);
    ctx.fillRect(100,0,100,100);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect (100,0,100,100);
    // ctx.fillStyle = "yellow";
    ctx.fillRect(500,400,100,100);
}