const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,slingShot;
var polygon,box;
var ground;
var score = 0;
function preload()
{
  polygon_img=loadImage("polygon.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

   ground= new Ground(600,600,300,20);
   ground1= new Ground(1100,400,300,20);
   ground3= new Ground(width/2,690,width,40);
  
   
   box = new Box(600,576,30,30);
   box1 = new Box(570,576,30,30);
   box2 = new Box(540,576,30,30);
   box3 = new Box(630,576,30,30);
   box4 = new Box(660,576,30,30);
   box5 = new Box(690,576,30,30);
   box6 = new Box(510,576,30,30);   
   box7 = new Box(546,546,30,30);
   box8 = new Box(576,546,30,30);
   box9 = new Box(606,546,30,30);
   box10 =new Box(636,546,30,30);
   box11= new Box(666,546,30,30);  
   box12= new Box(610,516,30,30);
   box13= new Box(640,516,30,30);
   box14= new Box(580,516,30,30);  
   box15= new Box(612,486,30,30); 
   box16= new Box(1100,376,30,30);
   box17= new Box(1130,376,30,30);
   box18= new Box(1160,376,30,30);
   box19= new Box(1070,376,30,30);  
   box20= new Box(1040,376,30,30);
   box21= new Box(1100,346,30,30);
   box22= new Box(1130,346,30,30);
   box23= new Box(1070,346,30,30);
   box24= new Box(1100,316,30,30);
  
   //ball holder with slings
  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

}


function draw() {
  background(255,255,255);
  Engine.update(engine);

  textSize(20);
  fill("black");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("Score : " + score,750,50)
  box.score();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box7.score();

  ground1.display();
  ground.display();
  ground3.display();
  
  fill("lightblue");
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  fill("pink");
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  fill("lightgreen");
  box12.display();
  box13.display();
  box14.display();
  fill("grey");
  box15.display();
  fill("lightblue");
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  fill("lightgreen");
  box21.display();
  box22.display();
  box23.display();
  fill("pink");
  box24.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  //polygon.display();
  slingshot.display();
  drawSprite();
}

  function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
     
    slingshot.fly();
}
function keyPressed(){
  if (keyCode===32){
    slingshot.attach(this.polygon)
  }
}
