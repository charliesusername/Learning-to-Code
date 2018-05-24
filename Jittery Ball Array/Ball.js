function Ball(d, a){
    this.d = d;
    this.a = a;
    this.originX = width/2;
    this.originY = height/2;
    this.r = map(this.d,0,width,3,20);
    this.x = this.originX + this.d * cos(this.a);
    this.y = this.originY + this.d * sin(this.a);

    
    //this.x = random(this.r, width-this.r);
    //this.y = random(this.r, height-this.r);
    //this.col = (random(255),random(255),random(255));
    this.col = (255,255,255);

    this.create = function(){
        fill(this.col);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2); 
        //stroke(255);
        //line(this.originX,this.originY,this.x,this.y);
    }

    this.intersects = function(other){
        d = dist(this.x, this.y, other.x, other.y);
        if(d < this.r + other.r){
            return true;      
        } else {
            return false;
        }
    }

    this.update = function(){     
        this.a += map(this.d, 0,width/5,0.1,0);
        
        this.x = this.originX + this.d * cos(this.a);
        this.y = this.originY + this.d * sin(this.a);

        //this.x = constrain(this.x, this.r, width-this.r);
        //this.y = constrain(this.y, this.r, height-this.r);
    }
}