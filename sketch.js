var hr;
var mn;
var sc;
var scAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(300, 250)
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  //Draw Seconds Hand
  push();
  rotate(scAngle)
  strokeWeight(10);
  stroke('blue');
  line(0, 0, 180, 0);
  pop();

  //Draw Minutes Hand
  push();
  rotate(mnAngle)
  strokeWeight(10);
  stroke('green');
  line(0, 0, 100, 0);
  pop();

  //Draw Hours Hand
  push();
  rotate(hrAngle)
  strokeWeight(10);
  stroke('red');
  line(0, 0, 50, 0);
  pop();

  strokeWeight(10);
  stroke('blue');
  noFill();
  arc(0, 0, 400, 400, 0, scAngle);

  strokeWeight(10);
  stroke('green');
  noFill();
  arc(0, 0, 300, 300, 0, mnAngle);

  strokeWeight(10);
  stroke('red');
  noFill();
  arc(0, 0, 200, 200, 0, hrAngle);


  drawSprites();
}