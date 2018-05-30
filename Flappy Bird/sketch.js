var flappy;
var pipes = [];
var counter = 0;

function setup(){
    createCanvas(400, 400);
    flappy = new Bird();
    pipes.push(new Pipe());
}

function draw(){
    background(0);        
    flappy.show();
    flappy.update();

    for(var i = pipes.length - 1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(flappy)){
            console.log("HIT");
        }

        if(pipes[i].offscreen()){
            pipes.splice(i,1);
        }
    }

    if(frameCount % 40 == 0){
        pipes.push(new Pipe());
    }

    
    
}

function keyPressed(){
    if(key == ' ') {
        flappy.up();
    }
}