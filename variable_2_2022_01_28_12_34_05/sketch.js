let squareSize;
let lineWidth;

function setup(){
  createCanvas(400, 300);
    background(100);
}
function draw(){

  squareSize = random(5,250);
  lineWidth = random(4, 28)
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0,0,255,10);
  fill(0,255,0,10);
  square(200,150, squareSize);
}