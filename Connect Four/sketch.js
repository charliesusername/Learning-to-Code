var grid;
var pieceR = 40;
var numAcross = 7;
var numDown = 6;
var piece;
var positions = [];

var num = 1;

function setup(){
    createCanvas(800,800);  
    grid = new Grid();    
    piece = new Piece('blue'); 
}

function draw(){
    background('white');
    grid.create();
    grid.update();
    piece.create();
    piece.select(); 
    
}