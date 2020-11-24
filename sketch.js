const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, dustbin, dustbin1, dustbin2, ground;

function preload(){
}

function setup() {
	createCanvas(1200, 350);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1200,15);//(1200,15);
	paperBall = new Paper(200,240);
	dustbin = new Dustbin(750,20,20,90);
	dustbin1 = new Dustbin(900,20,20,90);
	dustbin2 = new Dustbin(825,70,150,20); 

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("black");

  ground.display();
  paperBall.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  //keypressed();

  drawSprites();
}
function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:85, y:85})
	}
}