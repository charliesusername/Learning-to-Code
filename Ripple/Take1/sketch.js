var elements = [];
var rows = 1;
var cols = 1;
var rippling = false;
var ripple;
var acc = 10;

function setup() {
    createCanvas(200, 200);
    var w = floor(width / cols);
    var h = floor(height / rows);
    for (var i = 0; i < cols; i++) {
        elements[i] = [];
        for (var j = 0; j < rows; j++) {
            elements[i][j] = new Element(i * w, j * h, w, h);
        }
    }
}

function draw() {
    background(0);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            elements[i][j].show();
            if (rippling) {
                elements[i][j].overlap(ripple);
                //elements[i][j].alive = true;
            }
        }
    }
    if (rippling) {
        ripple.show();
        ripple.update();
        ripple.listPoints(acc);

        if (ripple.r > width * sqrt(2)) {
            ripple = null;
            rippling = false;
        }     
    }
}

function mouseClicked() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (elements[i][j].mouseOver()) {
                rippling = true;
                ripple = new Ripple(mouseX, mouseY);
            }
        }
    }
}

function index(x, y) {
    return x + cols * y;
}