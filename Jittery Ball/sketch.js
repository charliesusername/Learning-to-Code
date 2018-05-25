// One ball
/*
var ball;

function setup(){
    createCanvas(400,400);
    ball = new Ball();
}

function draw(){
    background(51);
    ball.create();
    ball.update();
}

*/

// Many Balls
var balls = []; //create an empty array
var numBalls = 100;
function setup(){
    createCanvas(300, 300);
    for(var i = 0; i < numBalls; i++){
        balls[i] = new Ball();
    }
}

function draw(){
    background(51);
    for(var i = 0; i < numBalls; i++){
        balls[i].create();
        balls[i].update();
    }
}
