var population;
var lifespan = 500;
var lifeP;
var count = 0;
var target;
var maxforce = 0.2;
var mutationrate = 0.03;
var popsize = 16;
var obs;

var rx = 100;
var ry = 170;
var rw = 200;
var rh = 10;

function setup() {
    createCanvas(400, 300);
    rocket = new Rocket();
    population = new Population();
    lifeP = createP();
    target = createVector(width / 2, 50);
    obs = new Obstacle(1);
}

function draw() {
    background(0);
    population.run();
    lifeP.html(count);

    if (count == lifespan || population.numCrashed == popsize) {
        population.evaluate();
        population.selection();
        count = 0;
    }

    fill(255);
    rect(rx, ry, rw, rh);

    count++;
    ellipse(target.x, target.y, 16, 16);
    
    obs.select();
    obs.show();
}

