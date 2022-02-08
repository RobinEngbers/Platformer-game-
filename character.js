class Character {
  constructor() {
    this.x = 20;
    this.y = 330;
    this.w = 20;
    this.h = 20;
    this.color = [255, 100, 0];
    this.vy = 0
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;

    this.maxJumpframes = 1000;
    this.framesJumped = 0;

  }

  move() {
    this.gravity();

    if (keyIsDown(LEFT_ARROW)){
      if(COLLISION != "left" && this.x >= 0)
        this.x -= MOVESPEED;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      if(COLLISION != "right" && this.x + this.w < WIDTH)
        this.x += MOVESPEED;              
    }

    if (keyIsDown(32)) {      
      if(this.framesJumped < this.maxJumpframes){
        this.y -= 13;
        this.framesJumped += 1;
      }
    }

  }
  
   gravity(){
    if(COLLISION != "bottom"){
      this.y += FALLSPEED;
    }
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    
  }
}