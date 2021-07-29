
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var width;
function setup() {
  createCanvas(480, 800);


  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 480, 20);

  width = 480;

  for (var i = 0; i <=width; i = i + 80) {
    divisions.push(new division(i, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var q = 40; q <=width; q = q + 50) {
    plinkos.push(new plinko(q, 75));
  
  }
  
  for (var q = 15; q <= width - 10; q = q + 50) {
    plinkos.push(new plinko(q, 175));
  
  }
  
  for (var q = 40; q <= width; q = q + 50) {
    plinkos.push(new plinko(q, 275));
  
  }
  for (var q = 15; q <= width - 10; q = q + 50) {
    plinkos.push(new plinko(q, 375));
  
  }
}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;




function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10, width/2+10), 10, 10));
  
  }
  
  for (var m = 0;  m < particles.length; m++ ){
    particles[m].display();
  
  }
  
  for (var m = 0;  m < divisions.length; m++ ){
    divisions[m].display();
  
  }
  
  for (var m = 0;  m < plinkos.length; m++ ){
    plinkos[m].display();
  
  }
  
}