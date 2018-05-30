function Pipe(){
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 5;
    this.col = color(random(255), random(255), random(255));
    this.highlight = false


    this.show = function(){
        
        if(this.highlight){
            fill(color(255,0,0));
        } else {
            fill(255);
        }
        noStroke();
        rect(this.x, 0,                    this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }
   
    this.offscreen = function(){
        if( this.x < -this.w){
            return true;        
        } else {
            return false;
        }
    }

    this.hits = function(bird){
        if(bird.y < this.top || bird.y > height - this.bottom){
            if(bird.x + bird.s/2 > this.x && bird.x < this.x + this.w){
            this.highlight = true;
               return true;
            }
        } else {
            this.highlight = false;
            return false;
        }
    }

  
    
    this.update = function(){
        this.x -= this.speed;    
        
    }
}