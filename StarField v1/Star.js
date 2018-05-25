function Star(){
    this.d = random(sqrt(2)*width);
    this.a = random(360);
    this.len = z;
    this.x1 = width/2 + this.d * cos(this.a);
    this.y1 = height/2 + this.d * sin(this.a);
    this.x2 = width/2 + (this.d + this.len) * cos(this.a);
    this.y2 = height/2 + (this.d + this.len) * sin(this.a);
    this.z = random(3);    
    
    this.show = function(){
        stroke(random(255));
        strokeWeight(1);
        line(this.x1, this.y1, this.x2, this.y2);
    }

    this.update = function(){
        this.d += map(this.z, 0, 3, 1,4);
        if(this.d > sqrt(2)*width){
            this.d = 0;
            this.len = map(this.d, 0, sqrt(2)*width, 0, 1000);
            stroke(random(255));
        }
        this.len = map(this.d, 0, width/2, 0, 10);
        this.x1 = width/2 + this.d * cos(this.a);
        this.y1 = height/2 + this.d * sin(this.a);
        this.x2 = width/2 + (this.d + this.len) * cos(this.a);
        this.y2 = height/2 + (this.d + this.len) * sin(this.a);
    }
    
}