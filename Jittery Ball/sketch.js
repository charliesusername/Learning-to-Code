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