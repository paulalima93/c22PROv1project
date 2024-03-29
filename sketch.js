var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	//adicionar animção à fada
	//fairy.setAnimation("fairyflying",fairyImg); 
	//fairy.addAnimation("fairyflying");  
	//fairy.addAnimation("fairyflying",fairyImg);  
	//fairy.addAnimation(fairyImg);  
	
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
		//mover fada para direita
           	//fairy = fairy.x + 20;
		//fairy.y = fairy.x + 20;
		//fairy.x =  20;
		//fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		//codigo para deixar a estrela estática ao parar na mão da fada
		//Body.setStatic(starBody,false); 
		//Matter.Body.setStatic(false); 
		//Body.setStatic(starBody,false); 
		//Matter.Body.setStatic(starBody,true); 
	}
}
