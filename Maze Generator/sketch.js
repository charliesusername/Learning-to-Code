var cols, rows;
var w = 40; //cell width and height
var grid = [];

var current;

var stack = [];

function setup() {
    createCanvas(800, 800);
    cols = floor(width / w);
    rows = floor(height / w);
    //frameRate(5);

    for (var     j = 0; j < cols; j++) {
        for (var i = 0; i < rows; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    current = grid[index(0,0)];
}

function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }

    current.visited = true;
    current.highlight();
    // STEP 1: Pick a random neighbor
    var next = current.checkNeighbors();
    if (next) {
        
        next.visited = true;
        // STEP 2: Push the current cell to the stack
        current.col = color(random(255), random(255), random(255), 100);
        stack.push(current);

        // STEP 3
        removeWalls(current, next);


        // STEP 4
        current = next;
    } else if (stack.length > 0) {
        current.col = color(255, 0, 100, 100);
        current = stack.pop();
    } 

    
}

function index(i, j){
    if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1){
        return -1;
    }
    return i + j * cols;
}

function Cell(i, j) {
    this.i = i; //col number
    this.j = j; //row number
    this.walls = [true, true, true, true];
    this.visited = false;
    this.col = color(255, 0, 255, 100);

    this.checkNeighbors = function(){
        var neighbors = [];

        var top =    grid[index(i,     j - 1)];
        var right =  grid[index(i + 1, j)];j
        var bottom = grid[index(i,     j + 1)];
        var left =   grid[index(i - 1, j)];  
       
        if (top && !top.visited) {           
            neighbors.push(top);
            fill(255, 0, 105, 100);
            rect(this.i * w, (this.j - 1) * w, w, w);
        }
        if (right && !right.visited) {            
            neighbors.push(right);
            fill(255, 0, 105, 100);
            rect((this.i + 1) * w, this.j * w, w, w);
        }
        if (bottom && !bottom.visited) {            
            neighbors.push(bottom);
            fill(255, 0, 105, 100);
            rect(this.i * w, (this.j + 1) * w, w, w);
        }
        if (left && !left.visited) {            
            neighbors.push(left);
            fill(255, 0, 105, 100);
            rect((this.i-1)*w, this.j*w, w, w);
        }                

        if(neighbors.length > 0) {
            var r = floor(random(0, neighbors.length));
                    
            return neighbors[r];    
        } else {
            return undefined;
        }
    }

    this.highlight = function() {
        var x = this.i * w;
        var y = this.j * w;
        fill(0, 255, 0, 255);
            noStroke();
            rect(x, y, w, w);
    }


    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + w, y);     // top
        }
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w); // right
        }
        if (this.walls[2]) {
            line(x, y + w, x + w, y + w); // bottom
        }
        if (this.walls[3]) {
            line(x, y, x, y + w); // left
        }

        if(this.visited){
            fill(this.col);
            noStroke();
            rect(x, y, w, w);
        }

    }
}

function removeWalls(a, b){
    var x = a.i - b.i;    
    
    if(x === 1){
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1){
        a.walls[1] = false;
        b.walls[3] = false;
    }
    var y = a.j - b.j;
    if(y === 1){
        a.walls[0] = false;
        b.walls[2] = false;        
    } else if (y === -1){
        a.walls[2] = false;
        b.walls[0] = false;
    }






}