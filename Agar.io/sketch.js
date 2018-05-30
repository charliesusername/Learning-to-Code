var blob;

var blobs = [];
var zoom = 1;
function setup() {
    createCanvas(600, 600);
    blob = new Blob(0, 0, 64);
    for (var i = 0; i < 200; i++) {
        var x = random(-width, width)*3;
        var y = random(-height, height)*3;
        blobs[i] = new Blob(x, y, 16);
    }
}

function draw() {
    background(0);
    //translate(width/2 - blob.pos.x, height /2 - blob.pos.y);
    var newzoom = 64 / blob.r;
    translate(width/2, height/2);
    zoom = lerp(zoom, newzoom, 0.5);
    
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);

    for (var i = blobs.length - 1; i >= 0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1)
        }
    }
    blob.show();
    blob.update();
}