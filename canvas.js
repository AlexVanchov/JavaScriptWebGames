var ball;
var lines = [];

var score = 0;
var scoreDiv = document.getElementById('score');
var scoreSpan = scoreDiv.querySelector('span');

function setup() {
    createCanvas(500,800);
    ball = new Ball();
    lines.push(new Line());
}

function draw() {
    background(50);
    if(frameCount % 120 == 0) {
        lines.push(new Line());
    }
    if(score > 5) {
        ball.gravity = 6;
    }

    ball.update();
    ball.show();

    for(var i = lines.length - 1; i >= 0; i--) {
        lines[i].show();
        lines[i].update();

        if(lines[i].detect(ball) === 1) {
            scoreSpan.innerHTML = ++score;
        } else if(lines[i].detect(ball) === 2) {
            scoreDiv.className = "finished";
            theEndSound.play();
            remove();
        }
        if(lines[i].visible()) {
            lines.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (mouseIsPressed) {
        return true;
    }
}