function drawPurpleMario1(x,y) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    drawPurpleMarioHead1();
    drawPurpleMariobody1();
    ctx.restore();
}

function drawPurpleMario2(x,y) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    drawPurpleMarioHead2();
    drawPurpleMariobody2();
    ctx.restore();
}

function drawPurpleMario3(x,y) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    drawPurpleMarioHead3();
    drawPurpleMariobody3();
    ctx.restore();
}

function drawPurpleMariobody1() {

    ctx.fillStyle = "purple";

    ctx.fillRect(4 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 9 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#C66426";

    ctx.fillRect(2 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 9 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 9 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 15 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 15 * UNIT, 4 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#F39258"

    ctx.fillRect(0, 10 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawPurpleMariobody2() {

    ctx.fillStyle = "#C66426"

    ctx.fillRect(2 * UNIT, 7 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 11 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(1 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 15 * UNIT, 3 * UNIT, 1 * UNIT);


    ctx.fillStyle = "#F39258"

    ctx.fillRect(0 * UNIT, 8 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "purple";
    ctx.fillRect(6 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 9 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
}

function drawPurpleMariobody3() {

    ctx.fillStyle = "#C66426"

    ctx.fillRect(1 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 8 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 9 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 9 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 14 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "purple";

    ctx.fillRect(3 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#F39258";

    ctx.fillRect(5 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
}

function drawPurpleMarioHead1() {

    ctx.fillStyle = "purple";

    ctx.fillRect(3 * UNIT, 0, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 1 * UNIT, 9 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#C66426";

    ctx.fillRect(2 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(1 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#F39258";

    ctx.fillRect(5 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);

}

function drawPurpleMarioHead2() {

    ctx.fillStyle = "purple";

    ctx.fillRect(5 * UNIT, 0, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 1 * UNIT, 9 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#C66426";

    ctx.fillRect(4 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#F39258";

    ctx.fillRect(7 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 5 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);
}

function drawPurpleMarioHead3() {

    ctx.fillStyle = "purple";

    ctx.fillRect(2 * UNIT, 0, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 1 * UNIT, 9 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#C66426";

    ctx.fillRect(1 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(0 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(1 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#F39258";

    ctx.fillRect(4 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);

}