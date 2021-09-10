const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;



var ball;
var blower;
var blowermouth;



function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  
  blower=new Blower(width/2-50,height/2+50,150,20);
  blowermouth=new BlowerMouth(width/2+70,height/2+20,100,90);
  ball=new Ball(width/2+80,height/2-80,80,80);
  button=createButton("Click to blow");
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(0);  
  Engine.update(engine);
  blower.show();
  ball.show();
  blowermouth.show();
  drawSprites();
}

function blow(){
  Matter . Body . applyForce(ball.body,{x:0,y:0},{x:0,y:0.1});
}