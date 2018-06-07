function Obstacle(num) {
    this.points = [];
    this.case = (num) ? num : 0;
    this.sides = [];

    this.select = function () {
        switch (this.case) {
            case 0:
                this.points = [
                    { x: 25, y: 25 },
                    { x: 100, y: 25 },
                    { x: 100, y: 100 },
                    { x: 25, y: 100 },
                ];
                break;
            case 1:
                this.points = [
                    { x: 100, y: 170 },
                    { x: 300, y: 170 },
                    { x: 300, y: 160 },
                    { x: 100, y: 160 },
                ];
                break;
        }

        for(var i = 0; i < this.points.length; i++){
            
        }
    }

    

    this.show = function () {
        beginShape()
        fill(255);
        strokeWeight(3);
        for (var i = 0; i < this.points.length; i++) {
            vertex(this.points[i].x, this.points[i].y);
        }
        endShape();
    }

    this.update = function () { }
}