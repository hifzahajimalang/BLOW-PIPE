class Ball
{
  constructor(x, y, w,h) 
  {
    let options = {
     resitution:0.08,
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    var angle=this.body.angle
    push();
    translate (pos.x,pos.y);
    rotate (angle);
    ellipseMode(CENTER);
    
    fill("yellow");
    ellipse(0,0, this.w, this.h);
    pop();
  }
}
