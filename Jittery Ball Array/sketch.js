var balls = [];
var num = 2;

function setup(){
    createCanvas(400,400);
    for(var i = 0; i < num; i++){
        balls[i] = new Ball(width*i/num, 180);        
    }
}

function draw(){
    background(51);
    for(var i = 0; i < num; i++){
        balls[i].create();
        balls[i].update();
        for(var j = i + 1; j < balls.length; j++){
            if(i != j && balls[i].intersects(balls[j])){
                //balls[i].r -= 0.01;
                //balls[j].r -= 0.01;
                //balls[i].col = (random(255), random(255), random(255));
                //balls[j].col = (random(255), random(255), random(255));
            } else {
                //balls[i].r += 0.01;
                //balls[j].r += 0.01;

                balls[i].r = constrain(balls[i].r, 0.001, 10);
                balls[j].r = constrain(balls[j].r, 0.001, 10);
            }
        }
    }
}