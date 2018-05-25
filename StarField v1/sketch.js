var stars = []
var num = 10;
function setup(){
    createCanvas(500,500);
    for (var i = 0; i < num; i++){
        stars[i] = new Star();
        
    }
}

function draw(){
    background(0);
    for(var i = 0; i < num; i++){
        stars[i].show();
        stars[i].update();
    }
}