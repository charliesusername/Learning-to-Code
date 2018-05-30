function Grid() {
    this.x = 0;
    this.y = 100;
    this.w = width;
    this.h = height;
    
    this.create = function () {
        fill(color(5,80,200));
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    }

    this.update = function () {
        this.emptySlots();
    }

    this.fillSlots = function(state){        
        for(var i = 0; i < numAcross; i++){
            for(var j = 0; j < numDown; j++){
                if(state[i][j] != null){
                    if(state[i][j] === 'in'){
                        fill(state[i][j].c);
                        ellipse(this.x + this.buffer + this.spacingX * (i + 1 / 2),
                        this.y + this.buffer + this.spacingY * (j + 1 / 2),
                        2 * pieceR,
                        2 * pieceR);
                    }
                }
            }
        }
    }

    this.emptySlots = function () {        
        this.size = 0.95;
        this.spacingX = this.size * this.w / numAcross;
        this.spacingY = this.size * (this.h - this.y) / numDown;
        this.buffer = (1 - this.size) * this.w / 2;
        for (var i = 0; i < numAcross; i++) {
            for (var j = 0; j < numDown; j++) {
                noStroke();
                fill(200);
                ellipse(this.x + this.buffer + this.spacingX * (i + 1 / 2),
                    this.y + this.buffer + this.spacingY * (j + 1 / 2),
                    2 * pieceR,
                    2 * pieceR);
            }
        }
    }
}