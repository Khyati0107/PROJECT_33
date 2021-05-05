var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var snowfall = [];
var bgIng

function preload (){
  bgImg = loadImage ("snow3.jpg")
}




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(bgImg);  

 Engine.update(engine);

  if (frameCount %60 ===0){
    snowfall.push(new Snow(random(width/3-10, width/2+10),25,25))
  }
  for (var j = 0; j < snowfall.length; j++) {
    snowfall[j].display();
  }

}