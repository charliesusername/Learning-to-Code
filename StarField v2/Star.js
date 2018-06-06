function Star(){    
    this.x = random(width);
    this.y = random(height);
    this.z = random(width/2);
    this.r = 1;
    this.col = 255;
    this.speed = 1;
    
    
    this.create = function(){
        fill(this.col);
        noStroke();
        this.sx = map(this.x / this.z, 0, 1, 0, width/2);
        this.sy = map(this.y / this.z, 0, 1, 0, height/2);
        this.r = map(this.z, 0, width/2, 8, 0);        

        ellipse(this.sx, this.sy, this.r * 2, this.r * 2);

        this.px = map(this.x / this.pz, 0, 1, 0, width/2);
        this.py = map(this.y / this.pz, 0, 1, 0, height/2);

        this.pz = this.z;

        stroke(255);
        line(this.px, this.py, this.sx, this.sy);
    }

    this.update = function(){
        this.z -= this.speed;
        if(this.z < 1){
            this.z = width/2;
            this.x = random(width);
            this.y = random(height);
            this.pz = this.z;
        }
    }
}