function Piece(c){
    this.x = mouseX;
    this.y = 50;
    this.g = 10;
    this.c = c;


    this.create = function(){
        fill(this.c);
        ellipse(this.x, this.y, pieceR*2, pieceR*2);
    }

    this.select = function(){
        this.x = mouseX;
        if (mouseIsPressed){
            this.drop();
        }                
    }

    this.drop = function(){
        
    }

    
   
}