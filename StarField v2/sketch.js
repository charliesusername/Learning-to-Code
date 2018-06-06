var stars = [];
var numStars = 1000;

function setup(){
    createCanvas(400,400);
    for(var i = 0; i < numStars; i++){
        stars[i] = new Star();
    }
}

function draw(){
    background(41);
    for(var i = 0; i < numStars; i++){
        stars[i].create();
        stars[i].update();
    }
}