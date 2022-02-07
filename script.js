var [WIDTH, HEIGHT] = [640, 480];
var [MOVESPEED, FALLSPEED] = [5,5]

var character;
var COLLISION;

function setup() {
  createCanvas(400, 400);
  character = new Character()
}

function draw() {
  background("#3BC7FA");
  rect(0, 350, 500, 55);

  // set player collision
  COLLISION = checkCollision();

  character.show();
  character.move();
}

function checkCollision(){   
  colliding = false;
}