function Bird(){
    this.x = 128;
    this.y = height / 2;
    this.s = 32;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
    this.hit = false;

    this.show = function(){
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.s, this.s);
    }

    this.update = function(){
        this.velocity += this.gravity;
        this.y += this.velocity;
        if(this.y > height - this.s/2) {
            this.y = height - this.s/2;;
            this.velocity = 0;
        }
        if(this.y < this.s / 2){
            this.y = this.s / 2
        }       
    }   

    this.up = function(){
        this.velocity += this.lift;
        this.velocity *= 0.9;
    }

    this.collide = function(block){
        // collides with top
        if(this.w == block.x && this.y <= block.h){
            this.hit = true;
            console.log('hit')
        } else if (this.w == block.x && this.y + this.x >= height - block.h){
            this.hit = true;
            console.log('hit')
        } else {
            this.hit = false;
        }
    }
}