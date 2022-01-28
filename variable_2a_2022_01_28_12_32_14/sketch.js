let x,y,r,g,b;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw(){
  r = random(0,255);
  g = 0;
  b = random(0,255);
  x = random(0,600);
  y = random(0,400)
  noStroke();
  fill(r,b,g,100);
  rect(x,y,24);
  circle(x,y,b,10);
  ellipse(x,y,b,24)
}