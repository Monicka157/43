var player,playeranimation;
var ground;
var obstacleGroup,obstacle1,obstacle2,obstacl3,obstacle4;
var newGroup;

function preload(){
playeranimation =loadAnimation("IMAGES/1.png","IMAGES/2.png","IMAGES/3.png","IMAGES/4.png","IMAGES/5.png",
"IMAGES/6.png","IMAGES/7.png","IMAGES/8.png");
obstacle1 = loadImage("IMAGES/OB 1.png");
obstacle2 = loadImage("IMAGES/OB 2.png");
obstacle3 = loadImage("IMAGES/OB 3.png");
obstacle4 = loadImage("IMAGES/OB 4.png");
}

function setup() {
  createCanvas(800,400);
  player = createSprite(100, 200, 50, 50);
  player.addAnimation("running",playeranimation);
  ground = createSprite(400,250,800,20);
 
  obstacleGroup = newGroup();

}


function draw() {
  background(0); 
  player.collide(ground); 
  
spawnObstacles();

  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    
    obstacleGroup.add(obstacle);
  }
}