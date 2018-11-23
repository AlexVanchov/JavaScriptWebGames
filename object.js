function Ball() {
    this.x = 80;
    this.y = height / 2;
    this.size = 32;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, this.size);
    }

    this.update = function() {
        if (keyPressed() === true) {
            this.y -= 10;
        }
        else{
            this.y += 5;
        }

        if(this.y > height-15) {
            this.y = height-15;
        }

        if(this.y < 15) {
            this.y = 15;
        }
    }
}