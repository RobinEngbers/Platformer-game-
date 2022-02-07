class Character {
  constructor() {
    this.x = 20;
    this.y = 330;
    this.w = 20;
    this.h = 20;
    this.color = [0, 255, 0];
  }
  move() {

  if (keyIsDown(LEFT_ARROW)){
      if(COLLISION != "left" && this.x >= 0)
        this.x -= MOVESPEED;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      if(COLLISION != "right" && this.x + this.w < WIDTH)
        this.x += MOVESPEED;              
    }
  }
  
  show() {
    rect(this.x, this.y, this.w, this.h);
    fill(this.color);
  }
}