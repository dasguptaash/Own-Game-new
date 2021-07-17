var planeIMG, planeSprite, bombSprite, bombIMG;
var bombBody,ground, bg,bgImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	planeIMG=loadImage("plane.png")
	bombIMG=loadImage("bomb.png");
	bgImg = loadImage("Bg.jpg");
}

function setup() {
	createCanvas(displayWidth,displayHeight);
	rectMode(CENTER);
	
	bg = createSprite(1200,600);
    bg.addImage(bgImg);
	bg.scale = 1.5;
	
	bombSprite=createSprite(width/2, 80, 10,10);
	bombSprite.addImage(bombIMG)
	bombSprite.scale = 0.19;

	planeSprite=createSprite(width/2, 179, 10,10);
	planeSprite.addImage(planeIMG)
	planeSprite.scale = 0.9;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	bombBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, bombBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bombSprite.x= bombBody.position.x 
  bombSprite.y= bombBody.position.y 

  bg.velocityX = -2;

  if(bg > displayWidth){
	  bg.x = displayWidth/2;
  }
    
  drawSprites();
    
}
function keyPressed(){
		  
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(bombBody,false);
	}
}




