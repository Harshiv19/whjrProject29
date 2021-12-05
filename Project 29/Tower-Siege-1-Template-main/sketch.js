const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,350,200,10);

  
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  block1a = new Block(610,275,30,40);
  console.log(block1);
  block2a = new Block(640,275,30,40);
  block3a = new Block(670,275,30,40);
  block4a = new Block(700,275,30,40);
  block5a = new Block(730,275,30,40);
  block6a = new Block(760,275,30,40);
  block7a = new Block(790,275,30,40);
  
  block8a = new Block(640,235,30,40);
  block9a = new Block(670,235,30,40);
  block10a = new Block(700,235,30,40);
  block11a = new Block(730,235,30,40);
  block12a = new Block(760,235,30,40);
  
  block13a = new Block(670,195,30,40);
  block14a = new Block(700,195,30,40);
  block15a = new Block(730,195,30,40);
  
  block16a = new Block(700,155,30,40);

  ball = Bodies.circle(50,200,10);
  World.add(world,ball);
  
  slings= new Slingshot(this.ball,{x:50,y:200});
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  block1a.display();
  block2a.display();
  block3a.display();
  block4a.display();
  block5a.display();
  block6a.display();
  block7a.display();
  fill("pink");
  block8a.display();
  block9a.display();
  block10a.display();
  block11a.display();
  block12a.display();
  fill("turquoise");
  block13a.display();
  block14a.display();
  block15a.display();
  fill("grey");
  block16a.display();
 
  
  fill("gold");
  imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,30,30);

slings.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){

  slings.fly()
}