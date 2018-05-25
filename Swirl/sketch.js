var balls = [];
var num = 1000;


function setup(){
    createCanvas(1000,1000);
    for(var i = 0; i < num; i++){
        //balls[i] = new Ball((width-20)*i/num/2, 0);        
        balls[i] = new Ball(random(width/2-20), random(360));   
    }
}

function draw(){
    background(51);

    for(var i = 0; i < num; i++){
        balls[i].create();
        balls[i].update();
        //frameRate(20);     
        
        
        /*
        for(var j = i + 1; j < balls.length; j++){
            if(i != j && balls[i].intersects(balls[j])){
                balls[i].r -= 10;
                balls[j].r -= 10;                
            } else {
                balls[i].r += 0.01;
                balls[j].r += 0.01;
                

                balls[i].r = constrain(balls[i].r, 0.001, 10);
                balls[j].r = constrain(balls[j].r, 0.001, 10);
            }
        }
        */
    }
}