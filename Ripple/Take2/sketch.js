var cols, width,
    curr = [],
    prev = [],
    damp = 0.9;

var startColor = [135, 206, 250]
var endColor = [102, 0, 51];


function setup() {
    createCanvas(100, 100);
    cols = width;
    rows = height;
    for (var i = 0; i < cols; i++) {
        curr[i] = [];
        prev[i] = [];
        for (var j = 0; j < rows; j++) {
            curr[i][j] = new Element(i, j, 1, 1);
            prev[i][j] = new Element(i, j, 1, 1);
        }
    }
    //prev[floor(cols / 2)][floor(rows / 2)].lit = 255;
}

function draw() {
    background(0);
    if (mouseIsPressed &&
        (floor(mouseX) < width && floor(mouseX) > 0 &&
            floor(mouseY) < height && floor(mouseY) > 0)) {
        console.log(floor(mouseX), floor(mouseY))
        prev[floor(mouseX)][floor(mouseY)].lit = 255;
        prev[floor(mouseX)][floor(mouseY)].col = color(102, 0, 51);;
    }
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            curr[i][j].show();
        }
    }
    for (var i = 1; i < cols - 1; i++) {
        for (var j = 1; j < rows - 1; j++) {
            curr[i][j].lit = (prev[i - 1][j].lit + prev[i + 1][j].lit
                + prev[i][j - 1].lit + prev[i][j + 1].lit
                + prev[i + 1][j - 1].lit + prev[i + 1][j + 1].lit
                + prev[i - 1][j - 1] + prev[i - 1][j + 1].lit)
                / 4 - curr[i][j].lit
            curr[i][j].lit *= damp;
            curr[i][j].cR = map(curr[i][j].lit, 0, 255, 135, 102);
            curr[i][j].cG = map(curr[i][j].lit, 0, 255, 206, 0);
            curr[i][j].cB = map(curr[i][j].lit, 0, 255, 250, 51);
        }
    }

    temp = prev;
    prev = curr;
    curr = temp;
}
