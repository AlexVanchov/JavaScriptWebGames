var bird;
var lines = [];

var score = 0;
var scoreDiv = document.getElementById('score');
var scoreSpan = scoreDiv.querySelector('span');

function setup() {
    createCanvas(500,800);
    bird = new Bird();
    lines.push(new Line());
}

function draw() {
    background(50);
    if(frameCount % 120 == 0) {
        lines.push(new Line());
    }
    if(score > 5) {
        bird.gravity = 6;
    }

    bird.update();
    bird.show();
}
