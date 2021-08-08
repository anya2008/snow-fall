const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload() {
  snowimg = loadImage("snow1.jpg")
}




function setup() {
  engine = Engine.create();
    world = engine.world;

  createCanvas(800,400);
  snow1 = new Snow(100,30);
  snow2 = new Snow(150,20);
  snow3 = new Snow (200, 35);
  snow4 = new Snow(250,40);
}

function draw() {
  background(snowimg); 
  Engine.update(engine); 
  drawSprites();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
}