class Polygon {
  constructor(x,y,radius) {
    var options = {
        //isStatic: false
    }
    this.body = Bodies.circle(x,y,radius);
    this.radius=radius
    World.add(world, this.body);
    this.polygon = loadImage("polygon.png");
   
  }
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    imageMode(CENTER);
    image(this.polygon,0,0,50,50);
  }
};
