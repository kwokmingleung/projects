var s;
var scl = 20;
var food;
var txt;


function setup() {
  // put setup code here
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
  //txt = createDiv("Points: " + s.total * 20);
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function updatePoint() {
  txt = "Points + 20";
}

function mousePressed() {
	s.total++;
}

function draw() {
  // put drawing code here
  background(51);

  if(s.eat(food)) {
  	pickLocation();
    updatePoint();
  }

  s.death();
  s.update();
  s.show();

  if(s.dead) {
    alert("Game over! Press OK to continue.");
    s.dead = false;
  }

  

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {

	if(keyCode === UP_ARROW) {
		s.dir(0, -1);
    s.dead = false;
	} else if(keyCode === DOWN_ARROW) {
		s.dir(0, 1);
    s.dead = false;
	} else if(keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
    s.dead = false;
	} else if(keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
    s.dead = false;
	}
}
