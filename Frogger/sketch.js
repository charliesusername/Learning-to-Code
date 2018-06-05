var frog;

function setup(){
    createCanvas(400,600);
    frog = new Frog();
}

function draw(){
    background(0);
    frog.show();
    frog.update();
    
    
}
