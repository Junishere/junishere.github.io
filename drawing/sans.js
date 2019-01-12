// Variable: Sometjing that stores a value that could change over time.
var canvas;
var ctx;
var unit = 20;

window.onload = init;
// When the window (page) loads up, it calls the init function.

// function: A grouop of tasks that could be called upon.
function init() {
    //Canvas in js connects with canvas in html.
    canvas = document.getElementById("myCanvas");
// Setting up the context to 20.
ctx= canvas.getContext('2d');
drawsans();
drawRuler(5);
}