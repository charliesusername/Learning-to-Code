var enemies = [];
var cols = 10;
var rows = 4;

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            enemies.push(new Invader(i, j));
        }
    }
}

function draw() {
    background(0);
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].show();
        if (enemies[i].x >= width - enemies[i].w) {
            enemies[i].right = false;
        } else if (enemies[i].x <= 0) {
            enemies[i].right = true;
        }
        if (enemies[i].last != enemies[i].right) {
            enemies[i].down();
        }
        enemies[i].move();
    }
}


function index(x, y) {
    return x + y * cols;
}

function Invader(x, y) {
    this.w = 20;
    this.x = width / cols * (x * 0.8 + 1 / 2);
    this.y = height / rows * (y / 2 + 1 / 2);
    this.v = 0.7;
    this.right = true;
    this.last = this.right;
    this.alive = true;
    this.color = color(random(255), random(255), random(255));


    this.show = function () {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.w, this.w)
    }

    this.move = function () {
        if (this.right) {
            this.x += this.v;
        } else if (!this.right) {
            this.x -= this.v;
        }
    }

    this.down = function () {
        this.last = this.right;
        this.y += width / cols - this.w;
    }
}
