
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var g,c1,c2,c3,c4,b1,b2,b3,b4

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	g=new Ground(400,60,600,50)
	b1=new Bob(150,100,40)
	c1=new Chain(b1.body,{x:150,y:70})
	b2=new Bob(230,100,40)
	c2=new Chain(b2.body,{x:230,y:70})
	c2=new Chain(b2.body,{x:230,y:70})
	b3=new Bob(310,100,40)
	c3=new Chain(b3.body,{x:310,y:70})
	b4=new Bob(390,100,40)
	c4=new Chain(b4.body,{x:390,y:70})
	b5=new Bob(470,100,40)
	c5=new Chain(b5.body,{x:470,y:70})

	Engine.run(engine)
  
}


function draw() {
  background("black");
  g.display(); 
  b2.display();
  c2.display();
  b1.display();
  c1.display();
  b3.display();
  c3.display();
  b4.display();
  c4.display();
  b5.display();
  c5.display();
  b2.display();
  c2.display();
}
//function keyPressed(){
//	if(keyCode===32){
//		Matter.Body.applyForce(b1.body,b1.body.position,{x:-10000,y:-20000})
//	}
//}
function mouseDragged(){
	Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY});
}