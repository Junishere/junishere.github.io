var canvas;
var ctx;
const UNIT = 20;

window.onload = init;


function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // translatedRect();
    translatedSans();
}

function translatedRect() {
    ctx.save();
    // 1. saving the translation rules.
    ctx.translate(1*UNIT,1*UNIT,1*UNIT,1*UNIT); 
    // 2. translate the image below to specified x and y coordinates.
    ctx.fillRect(0,0,10*UNIT,10*UNIT);
    ctx.restore(); 
    // 3. resets the translation rules.
}

function translatedSans() {
    drawSans();
}