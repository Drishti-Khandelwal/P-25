
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var ball ;
var box1,box2;
var ground;	
var ball;

this.image = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1 = new Box(640,617,200,20);
box2 = new Box(740,547,20,160);
box3 = new Box(540,547,20,160);
ground = new Ground(400,645,800,30);
ball = new Ball(100,635,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  ground.display();
  box2.display();
  box3.display();
  ball.display()

  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85});
     
   }
 }
