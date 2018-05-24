function Ball(d, a){
    this.d = d;
    this.a = a*PI/180;
    this.originX = width/2;
    this.originY = height/2;
    this.r = map(this.d,0,width,3,40);
    //this.r = 10;
    this.x = this.originX + this.d * sin(this.a)/2;
    this.y = this.originY + this.d * cos(this.a)/2;
    this.num = 0;

    
    //this.x = random(this.r, width-this.r);
    //this.y = random(this.r, height-this.r);
    this.col = color(255, 204, 0);
    

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

    this.quadrant = function(){
        if(this.num % 9 === 0){
            this.col = color('red');   
        } else if(this.num % 9 === 1){
            this.col = color('white');   
        } else if(this.num % 9 === 2){
            this.col = color('blue');   
        } else if(this.num % 9 === 3){
            this.col = color('red');   
        } else if(this.num % 9 === 4){
            this.col = color('white');   
        } else if(this.num % 9 === 5){
            this.col = color('blue');   
        } else if(this.num % 9 === 6){
            this.col = color('red');   
        } else if(this.num % 9 === 7){
            this.col = color('white');   
        } else if(this.num % 9 === 8){
            this.col = color('blue');   
        }
    }

    this.update = function(){     
        this.a += map(this.d, 0,width/2,6*PI/180,0.001*PI/180); 
        this.num = floor(this.a / (PI/9));
        this.quadrant();
        fill(this.col);
         
        
        this.x = this.originX + this.d * cos(this.a);
        this.y = this.originY + this.d * sin(this.a);

        //this.x = constrain(this.x, this.r, width-this.r);
        //this.y = constrain(this.y, this.r, height-this.r);
    }
}