const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies
 

var divisionHeight=300;
var score =0;

var particles = [];
var plinkos = [];
var divisions =[];

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


 
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  
  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }   
}

 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

 
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  if (frameCount%60===0){
    particles.push(new Particles(random(100, 800), 10, 10));
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var k = 0; k < divisions.length; k++) {
    plinkos[k].display();
  }

//display the  particles
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }

}