var character;
var collision

function setup() {
  createCanvas(400, 400);
  character = new Character()
}

function draw() {
  background("#3BC7FA");
  rect(0, 350, 500, 55);
  fill("red");

  character.show();
}