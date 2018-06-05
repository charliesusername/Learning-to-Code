function Element(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cR = 135;
    this.cG = 206;
    this.cB = 250;

    this.lit = 0;

    this.show = function(){
        fill(color(this.cR, this.cG, this.cB), this.lit);
        noStroke();
        rect(this.x, this.y, this.w, this.h)
    }    
}