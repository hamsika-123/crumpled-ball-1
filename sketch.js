
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1,box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	
	paper1=new paper(400,450,22);
	
	ground1= new Ground(700,480,1400,10);

	box1 = new dustbin (1000,420,20,80);
	box2 = new dustbin (1090,465,200,20)
	box3 = new dustbin (1180,420,20,80);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
  drawSprites();
 

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	
	  }
}
