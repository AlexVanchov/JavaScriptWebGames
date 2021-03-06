function Line() {
    this.gap = random(200, 350);

    this.top = random(100, height - this.gap - 200);
    this.bottom = this.top + this.gap;

    this.x = width;
    this.w = 50;
    this.speed = 0;

    this.show = function() {
        fill(255, 255, 0);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.bottom, this.w, height - this.bottom);
    }

    this.update = function() {
        this.speed = keyPressed();
        this.x -= this.speed;
    }

    this.visible = function() {
        if(this.x < -this.w) return true;
        return false;
    }

    this.detect = function(ball) {
        if((ball.x == this.x + this.w) && (ball.y > this.top && ball.y < this.bottom)) {
            return 1;
        } else if ((ball.x >= this.x && ball.x <= this.x + this.w) && (ball.y < this.top || ball.y > this.bottom))
            return 2;

        return 0;
    }
}
function keyPressed() {
    if (key >= 'a' && key <= 'z') {
        return 2;
    }
}