function Rectangle(x, y, w, h) {
    this.left = x;
    this.right = x + w;
    this.top = y;
    this.bottom = y + h;

    this.intersects = function (other) {
        return (!(this.left > other.right || this.right < other.left ||
            this.top > other.bottom || this.bottom < other.top))
    }

}