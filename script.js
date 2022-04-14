var gameState;

let score = 3;
var [WIDTH, HEIGHT] = [500, 400];
var [MOVESPEED, FALLSPEED] = [5,5];
var blocks = [];

function homescreen(){
  clear()
  text("Press enter to start.");
  background("green");
}

function level1(){
  var ground = new Block({x:0,   y:360, w:WIDTH, h:40,   color:[0,255,0]});
  var block1 = new Block({x: 50, y: 330, w: 100, h: 30, color: [128,128,128]});
  var block2 = new Block({x: 175, y: 310, w: 20, h: 50, color: [128,128,128]});
  var block3 = new Block({x: 230, y: 270, w: 100, h: 20, color: [128,128,128]});
  var block4 = new Block({x: 370, y: 310, w: 100, h: 20, color: [128,128,128]});
  var block5 = new Block({x: 370, y: 220, w: 100, h: 20, color: [128,128,128]});
  var end = new End({x: 440, y: 185, w: 25, h: 35, color: [140,3,252]});
  
  var collect1 = new Collectible({x:90, y:310, w:10, h:10, color: "yellow"});
  var collect2 = new Collectible({x:270, y:250, w:10, h:10, color: "yellow"});
  var collect3 = new Collectible({x:415, y:290, w:10, h:10, color: "yellow"});


  blocks = [ground,block1,block2,block3,block4,block5,end,collect1,collect2,collect3];
}

function level2(){
  var ground = new Block({x:0,   y:360, w:WIDTH, h:40,   color:[0,255,0]});
  var block1 = new Block({x: 400, y: 330, w: 100, h: 30, color: [128,128,128]});
  var block2 = new Block({x: 470, y: 290, w: 30, h: 40, color: [128,128,128]});
  var block3 = new Block({x: 280, y: 270, w: 100, h: 20, color: [128,128,128]});
  var block4 = new Block({x: 280, y: 270, w: 100, h: 20, color: [128,128,128]});
  var block5 = new Block({x: 280, y: 240, w: 15, h: 50, color: [128,128,128]});
  var block6 = new Block({x: 140, y: 220, w: 100, h: 20, color: [128,128,128]});
  var block7 = new Block({x: 225, y: 200, w: 15, h: 20, color: [128,128,128]});
  var block8 = new Block({x: 50, y: 200, w: 50, h: 10, color: [128,128,128]});
  var block9 = new Block({x: 50, y: 170, w: 15, h: 30, color: [128,128,128]});
  var block10 = new Block({x: 140, y: 130, w: 100, h: 20, color: [128,128,128]});
  var block11 = new Block({x: 340, y: 110, w: 140, h: 20, color: [128,128,128]});

  var end = new End({x: 440, y: 75, w: 25, h: 35, color: [140,3,252]});

  var collect1 = new Collectible({x:200, y:100, w:10, h:10, color: "yellow"});
  var collect2 = new Collectible({x:180, y:200, w:10, h:10, color: "yellow"});
  var collect3 = new Collectible({x:430, y:310, w:10, h:10, color: "yellow"});

  
  blocks = [ground,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,end,collect1,collect2,collect3];

}

function level3(){
  var ground = new Block({x:0,   y:360, w:WIDTH, h:40,   color:[0,255,0]});
  var block1 = new Block({x: 50, y: 320, w: 30, h: 40, color: [128,128,128]});
  var block2 = new Block({x: 115, y: 300, w: 20, h: 20, color: [128,128,128]});
  var block3 = new Block({x: 170, y: 300, w: 20, h: 20, color: [128,128,128]});
  var block4 = new Block({x: 225, y: 300, w: 20, h: 20, color: [128,128,128]});
  var block5 = new Block({x: 280, y: 300, w: 20, h: 20, color: [128,128,128]});
  var block6 = new Block({x: 335, y: 300, w: 30, h: 60, color: [128,128,128]});
  var block7 = new Block({x: 380, y: 280, w: 70, h: 20, color: [128,128,128]});
  var block8 = new Block({x: 450, y: 210, w: 50, h: 150, color: [128,128,128]});
  var block9 = new Block({x: 410, y: 240, w: 40, h: 20, color: [128,128,128]});
  var block10 = new Block({x: 330, y: 200, w: 20, h: 20, color: [128,128,128]});
  var block11 = new Block({x: 280, y: 200, w: 20, h: 20, color: [128,128,128]});
  var block12 = new Block({x: 225, y: 200, w: 20, h: 20, color: [128,128,128]});
  var block13 = new Block({x: 170, y: 200, w: 20, h: 20, color: [128,128,128]});
  var block14 = new Block({x: 115, y: 160, w: 20, h: 20, color: [128,128,128]});
  var block15 = new Block({x: 60, y: 120, w: 20, h: 20, color: [128,128,128]});
  var block16 = new Block({x: 10, y: 80, w: 20, h: 20, color: [128,128,128]});
  var block17 = new Block({x: 60, y: 40, w: 100, h: 15, color: [128,128,128]});
  var block18 = new Block({x: 200, y: 70, w: 100, h: 15, color: [128,128,128]});
  var block19 = new Block({x: 340, y: 40, w: 100, h: 15, color: [128,128,128]});

  var end = new End({x: 400, y: 5, w: 25, h: 35, color: [140,3,252]});

  var collect1 = new Collectible({x:200, y:300, w:10, h:10, color: "yellow"});
  var collect2 = new Collectible({x:320, y:330, w:10, h:10, color: "yellow"});
  var collect3 = new Collectible({x:230, y:180, w:10, h:10, color: "yellow"});
  var collect4 = new Collectible({x:120, y:140, w:10, h:10, color: "yellow"});
  var collect5 = new Collectible({x:120, y:20, w:10, h:10, color: "yellow"});
  var collect6 = new Collectible({x:240, y:50, w:10, h:10, color: "yellow"});
  
  blocks = [ground,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10, block11,block12,block13,block14,block15,block16,block17,block18,block19,end,collect1,collect2,collect3,collect4,collect5,collect6];
}

function level4(){
  var ground = new Block({x:0,   y:360, w:WIDTH, h:40,   color:[0,255,0]});
  var block1 = new Block({x: 50, y: 320, w: 30, h: 40, color: [128,128,128]});
  var block2 = new Block({x: 115, y: 290, w: 30, h: 40, color: [128,128,128]});
  var block3 = new Block({x: 165, y: 250, w: 30, h: 50, color: [128,128,128]});
  var block4 = new Block({x: 215, y: 200, w: 30, h: 70, color: [128,128,128]});
  
  var block5 = new Block({x: 330, y: 270, w: 30, h: 20, color: [128,128,128]});
  var block6 = new Block({x: 450, y: 240, w: 30, h: 20, color: [128,128,128]});
  var block7 = new Block({x: 450, y: 185, w: 30, h: 20, color: [128,128,128]});
  var block8 = new Block({x: 450, y: 130, w: 30, h: 20, color: [128,128,128]});

  
  var block9 = new Block({x: 300, y: 100, w: 100, h: 20, color: [128,128,128]});
  var block10 = new Block({x: 200, y: 130, w: 70, h: 20, color: [128,128,128]});
  var block11 = new Block({x: 50, y: 100, w: 100, h: 20, color: [128,128,128]});

  blocks = [ground,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11]

}

var character;
 var COLLISION;

function setup() {
  createCanvas(500, 400);
  character = new Character();
  gameState = 0;
}

function draw() {


  
  if(score == 3){
    level2();
  }
    
  
  background("#3BC7FA");
  // rect(0, 350, 500, 55);

  // set player collision
  COLLISION = checkCollision();

  
  blocks.forEach(b => b.draw());


    character.show();
  character.move()
    textSize(50);
      text(score, width / 2, height / 5,);

  
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
              // console.log(block.constructor.name);
            if(block.constructor.name === "Collectible"){
              blocks.splice(blocks.indexOf(block), 1);
              score++;
            }
            if(score == 3 && block.constructor.name === "End"){
              level2();
            }
            if(score == 6 && block.constructor.name === "End"){
              level3();
            }
            if(score == 12 && block.constructor.name === "End"){
              level4();
            }
            
          }
          else {            
            character.y -= overlapY;
            colliding = "bottom";
              // console.log(block.constructor.name);
            if(block.constructor.name === "Collectible"){
              blocks.splice(blocks.indexOf(block), 1);
              score++;
            }
            if(score == 3 && block.constructor.name === "End"){
              level2();
            }
            if(score == 6 && block.constructor.name === "End"){
              level3();
            }
            if(score == 12 && block.constructor.name === "End"){
              level4();
            }
          }
        }
        else{
          if(dx > 0){ 
            character.x += overlapX; 
            colliding = "left";
              // console.log(block.constructor.name);
            if(block.constructor.name === "Collectible"){
              blocks.splice(blocks.indexOf(block), 1);
              score++;
            }
            if(score == 3 && block.constructor.name === "End"){
              level2();
            }
            if(score == 6 && block.constructor.name === "End"){
              level3();
            }
            if(score == 12 && block.constructor.name === "End"){
              level4();
            }
          }
          else {
            character.x -= overlapX;
            colliding = "right";
              // console.log(block.constructor.name);
            if(block.constructor.name === "Collectible"){
              blocks.splice(blocks.indexOf(block), 1);
              score++;
            }
            if(score == 3 && block.constructor.name === "End"){
              level2();
            }
            if(score == 6 && block.constructor.name === "End"){
              level3();
            }
            if(score == 12 && block.constructor.name === "End"){
              level4();
            }
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