var canvas;
var ctx;
const UNIT = 10;

window.onload = init;


function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // translatedRect();
    translatedSans();
    // translatedBulletBill();
    // translatedMysteryBox();
    // translatedCoin();
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
    ctx.save();
    // ctx.translate(20*UNIT,5*UNIT);
    drawSans();
    ctx.restore();
}

function translatedBulletBill() {
    drawBulletBill();
}


function translatedMysteryBox() {
    drawMysteryBox();
}

function translatedCoin() {
    drawCoin();
}