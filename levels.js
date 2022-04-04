class Levels{
  constructor{
    
  }

level1(){
var ground = new Block({x:0,   y:360, w:WIDTH, h:40,   color:[0,255,0]});
var block1 = new Block({x: 50, y: 330, w: 100, h: 30, color: [128,128,128]});
var block2 = new Block({x: 175, y: 310, w: 20, h: 50, color: [128,128,128]});
var block3 = new Block({x: 230, y: 270, w: 100, h: 20, color: [128,128,128]});
var block4 = new Block({x: 370, y: 310, w: 100, h: 20, color: [128,128,128]});
var block5 = new Block({x: 370, y: 220, w: 100, h: 20, color: [128,128,128]});
var end1 = new Block({x: 440, y: 185, w: 25, h: 35, color: [140,3,252]});

var collect1 = new Collectible({x:90, y:310, w:10, h:10, color: "yellow"});
var collect2 = new Collectible({x:270, y:250, w:10, h:10, color: "yellow"});
var collect3 = new Collectible({x:415, y:290, w:10, h:10, color: "yellow"});

var blocks = [ground,block1,block2,block3,block4,block5,end1, collect1,collect2,collect3];
}
}