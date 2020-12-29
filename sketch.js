const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;
var RedPc, board, redSpace, redMoved;
var bluePc, blueSpace, blueMoved;

function preload() {
  board = loadImage("images/background.png");
}

function dice(x,y,side){
  fill ("white");
  strokeWeight(8);
  rectMode(CENTER);
  rect(x,y,100,100,20);
  fill("black");
  strokeWeight(3);
  
  if(side === 1){
    circle(x,y,20);
  }
  else if(side === 2){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
  }
  else if(side === 3){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
    circle(x,y,20);
  }
  else if(side === 4){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
    circle(x-25, y+25, 20);
    circle(x+25, y-25, 20);
  }
  else if(side === 5){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
    circle(x-25, y+25, 20);
    circle(x+25, y-25, 20); 
    circle(x,y,20);
  }
  else if(side === 6){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
    circle(x-25, y+25, 20);
    circle(x+25, y-25, 20); 
    circle(x-25, y,20);
    circle(x+25, y,20);
  }
  }

  function checkForUpsAndDowns(){
    if(blueSpace === 2){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:-13});
      blueSpace = 23;
    }

    if(blueSpace === 6){
      Matter.Body.setVelocity(bluePc.body, {x:-6, y:-26});
      blueSpace = 36;
    }

    if(blueSpace === 20){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:-26});
      blueSpace = 42;
    }

    if(blueSpace === 28){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:-13});
      blueSpace = 49;
    }
    
    if(blueSpace === 52){
      Matter.Body.setVelocity(bluePc.body, {x:0, y:-13});
      blueSpace = 72;
    }

    if(blueSpace === 57){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:-26});
      blueSpace = 96;
    }

    if(blueSpace === 71){
      Matter.Body.setVelocity(bluePc.body, {x:-7, y:-13});
      blueSpace = 92;
    }

    if(blueSpace === 43){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:20});
      blueSpace = 17;
    }

    if(blueSpace === 50){
      Matter.Body.setVelocity(bluePc.body, {x:-32, y:26});
      blueSpace = 5;
    }

    if(blueSpace === 56){
      Matter.Body.setVelocity(bluePc.body, {x:20, y:33});
      blueSpace = 8;
    }

    if(blueSpace === 73){
      Matter.Body.setVelocity(bluePc.body, {x:-13, y:38});
      blueSpace = 15;
    }

    if(blueSpace === 87){
      Matter.Body.setVelocity(bluePc.body, {x:12, y:26});
      blueSpace = 49;
    }

    if(blueSpace === 84){
      Matter.Body.setVelocity(bluePc.body, {x:-7, y:13});
      blueSpace = 58;
    }

    if(blueSpace === 98){
      Matter.Body.setVelocity(bluePc.body, {x:-14, y:39});
      blueSpace = 40;
    }
  }
  
function setup() {
  createCanvas(600, 725);
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0

bluePc = new BluePiece(20,570,40,40);

die = [false,1,0,false,0];
blueSpace = 1
blueMoved = false
redSpace = 1
redMoved = true 

}
function draw() {
  background("pink");
Engine.update(engine);
image(board, 0, 0, 600, 600)

bluePc.display();
stroke("black");
strokeWeight(8);
line(0,602,600,602);


drawSprites();

}

