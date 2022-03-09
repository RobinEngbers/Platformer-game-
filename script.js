var [WIDTH, HEIGHT] = [500, 400];
var [MOVESPEED, FALLSPEED] = [5,5];

var ground = new Block({x:0,   y:360, w:WIDTH, h:40,   color:[0,255,0]});
var block1 = new Block({x: 50, y: 330, w: 100, h: 30, color: [128,128,128]});
var block2 = new Block({x: 175, y: 310, w: 20, h: 50, color: [128,128,128]});
var block3 = new Block({x: 230, y: 270, w: 100, h: 20, color: [128,128,128]});
var block4 = new Block({x: 370, y: 310, w: 100, h: 20, color: [128,128,128]});
var block5 = new Block({x: 370, y: 220, w: 100, h: 20, color: [128,128,128]});
var end1 = new Block({x: 440, y: 185, w: 25, h: 35, color: [140,3,252]});
var blocks = [ground,block1,block2,block3,block4,block5,end1];


var collect = new Collectible({x:30,  y:300, w, h,}) 
  
var character;
var COLLISION;

function setup() {
  createCanvas(500, 400);
  character = new Character()
}

function draw() {
  background("#3BC7FA");
  // rect(0, 350, 500, 55);

  // set player collision
  COLLISION = checkCollision();

  blocks.forEach(b => b.draw());

  text(character.vy, 10, 30);


  character.show();
  character.move()
}

function checkCollision(){   

  colliding = false;

  // check collision for each block
  blocks.forEach(function(block) {
    
    // calculate difference from x and y axis centres
    let dx = (character.x + character.halfWidth) - (block.x + block.halfWidth);
    let dy = (character.y + character.halfHeight) - (block.y + block.halfHeight);

    let combinedHalfWidths  = character.halfWidth + block.halfWidth;
    let combinedHalfHeights = character.halfHeight + block.halfHeight;

    // x-axis collision?
    if(Math.abs(dx) < combinedHalfWidths){
      
      // y-axis collision?
      if(Math.abs(dy) < combinedHalfHeights){          

        let overlapX = combinedHalfWidths - Math.abs(dx);
        let overlapY = combinedHalfHeights - Math.abs(dy);          

        // collision is on the smallest overlap
        if(overlapX >= overlapY){
          if(dy > 0) {
            character.y += overlapY;
            colliding = "top";
          }
          else {            
            character.y -= overlapY;
            colliding = "bottom";            
          }
        }
        else{
          if(dx > 0){ 
            character.x += overlapX; 
            colliding = "left";
          }
          else {
            character.x -= overlapX;
            colliding = "right";
          }
        }

        //showDebug({ overlapX:overlapX, overlapY:overlapY, dx:dx, dy:dy, colliding:colliding});
      }
    }

  });

  return colliding;
}  


 function keyPressed() {
   if (keyCode == 32) {      
      if(character.framesJumped < character.maxJumpframes){
        character.vy = -5;
        character.framesJumped += 1;
      }
    }
}