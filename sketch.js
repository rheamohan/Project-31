
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground

var division1,division2,division3,division4,division5,division6,division7

var particles = [];
var plinkos = [];
var divison = [];

var divisionHeight = 300;


function setup() {
  var  canvas = createCanvas(1400,1900);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700,1860,1450,40);

  /*division1 = new Division(15,1400,30,900);
  division2 = new Division(245,1400,30,900);
  division3 = new Division(475,1400,30,900);
  division4 = new Division(705,1400,30,900);
  division5 = new Division(935,1400,30,900);
  division6 = new Division(1165,1400,30,900);
  division7 = new Division(1385,1400,30,900);*/

  for(var k=0; k<= width; k=k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER)

  background(0); 
  Engine.update(engine);
  drawSprites();

  ground.display();
  /*division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();*/
}