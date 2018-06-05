function Element(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.alive = false;

    this.show = function () {
        stroke(255);
        strokeWeight(0.1);
        fill(this.alive ? 255 : 0);
        rect(this.x, this.y, this.w, this.h);
    }

    this.overlap = function (other) {
        console.table(other.points.x);
    }





    // var posX;
    // var posY;
    // for (var i = 0; i < 360; i += acc) {
    //     posX = floor(other.x + other.r * cos(i));
    //     posY = floor(other.y + other.r * sin(i));
    //     if (!(this.x < posX || this.x + this.w > posX ||
    //         this.y < posY || this.y + this.h > posY)) {
    //         return true;
    //         console.log(this.x, this.y, 'true');
    //     } else {
    //         return false;
    //     }
    // }


    this.mouseOver = function () {
        dx = floor(abs((this.x + this.w / 2) - mouseX));
        dy = floor(abs((this.y + this.h / 2) - mouseY));

        if (dx < this.w / 2 && dy < this.h / 2) {
            return true;

        } else {
            return false;
        }
    }
}
