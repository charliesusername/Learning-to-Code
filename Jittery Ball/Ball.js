function Ball(){
    this.r = 45;
    this.x = random(this.r, width-this.r);
    this.y = random(this.r, height-this.r);
    

    this.create = function(){
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.update = function(){
        this.x += random(-1,1);
        this.y += random(-1,1);

        this.x = constrain(this.x, this.r, width-this.r);
        this.y = constrain(this.y, this.r, height-this.r);
    }
}