const Engine =Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies;

var myengine,myworld
var box1,box2, ground
function setup() {
  myengine=Engine.create();
  myworld=myengine.world
  createCanvas(800,800);
  
  ground=new Ground(400,700,800,10)
 box1=new Box(220,200,50,50)
 box2=new Box(200,150,50,50)
}

function draw() {
  background(0,255,0);  
  Engine.update(myengine)
  
  
  
ground.display()
  box1.display()
  box2.display()

  
}