function Ripple(x, y) {
    this.x = x;
    this.y = y;
    this.r = 0;
    this.points = []
    this.show = function () {
        noFill();
        stroke(255);
        strokeWeight(2);
        ellipse(this.x, this.y, this.r * 2, this.r * 2)
    }

    this.update = function () {
        this.r += 0.5;        
    }

    this.listPoints = function(per){
        for (var i = 0; i < 360; i += per) {
            this.points[i].x = floor(this.x + this.r * cos(i * PI / 180));
            this.points[i].y = floor(this.y + this.r * sin(i * PI / 180));                                         
        }
        //console.table(this.points);
    }
}