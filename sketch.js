var arrows , arrowimage,Diffarrow;
var ballon ;
var background1 , ground ;
var bow , green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_, red_, pink_ ,blue_, backgroundImage;
var gameState = 0 ;



function preload(){
  ground = loadImage("background0.png");
 arrowimage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_ = loadImage("rl.png");
  green_ = loadImage("deer.png");
  pink_ = loadImage("horse.png");
  blue_ = loadImage("fox.png");
  

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background1 = createSprite(200,200,400,400)
  background1.addImage(ground);
  arrows = createSprite(300,200,40,10);
  arrows.addImage(arrowimage);
  arrows.scale = 0.3;
  arrows.velocityX = -6
  
   bow = createSprite(340,200,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
 score = 0;
  aGroup = new Group();
  rGroup  = new Group();
  bGroup  = new Group();
  gGroup  = new Group();
  pGroup  = new Group();
}

function draw() {
background.velocityX = -3 ;

    if (background.x < 0){
      background.x = background.width/2;
    }
  if(keyDown("space")){
    Diffarrow = arrowCreation();
  }
  var balloonSelect = Math.round(random(1,4))
  console.log(balloonSelect)
  
  if(World.frameCount%80 == 0){
     if(balloonSelect == 1){
       redballoon();
     }else if(balloonSelect ==2){
       blueballoon();
     }else if(balloonSelect ==3){
       greenballoon();
     }else{
       pinkballoon();
     }  
  }
  bow.y = arrows.y;
bow.y = World.mouseY;
camera.position.x = displayWidth/2


  
  if(aGroup.isTouching(rGroup)){
  rGroup.destroyEach();
  aGroup.destroyEach();
  score = score+1 ;
  }
  
  if(aGroup.isTouching(bGroup)){
  bGroup.destroyEach();
  aGroup.destroyEach();
  score = score+1 ;
  }
  
  if(aGroup.isTouching(gGroup)){
  gGroup.destroyEach();
  aGroup.destroyEach();
  score = score+1 ;
  }

  function end(){
    if(score===15){
    game.update(2);
    }
  }
  
  if(aGroup.isTouching(pGroup)){
  pGroup.destroyEach();
  aGroup.destroyEach();
  score = score+1 ;
  }
  if(gameState === 2){
    game.end();
  }
    
  drawSprites();
  textSize(25);
text("Score: "+ score, 100,200);

}
function arrowCreation(){
 arrows = createSprite(300,200,40,10);
  arrows.addImage(arrowimage);
  arrows.scale = 0.3;
  arrows.velocityX = -5;
  arrows.y = bow.y;
  aGroup.add(arrows);
}
function redballoon(){
  red_balloon = createSprite(10,Math.round(random(30,370)),10,10)
  red_balloon.addImage(red_);
  red_balloon.velocityX = 2;
  red_balloon.lifetime = 200;
  red_balloon.scale = 0.1;
  rGroup.add(red_balloon);
}
function blueballoon(){
  blue_balloon = createSprite(10,Math.round(random(30,370)),10,10)
  blue_balloon.addImage(blue_);
  blue_balloon.velocityX = 2;
  blue_balloon.lifetime = 200;
  blue_balloon.scale = 0.1;
  bGroup.add(blue_balloon);
}
function greenballoon(){
  green_balloon = createSprite(10,Math.round(random(30,370)),10,10)
  green_balloon.addImage(green_);
  green_balloon.velocityX = 2;
  green_balloon.lifetime = 200;
  green_balloon.scale = 0.1;
  gGroup.add(green_balloon);
  
}
function pinkballoon(){
  pink_balloon = createSprite(10,Math.round(random(30,370)),10,10)
  pink_balloon.addImage(pink_);
  pink_balloon.velocityX = 2;
  pink_balloon.lifetime = 200;
  pink_balloon.scale = 0.1;
  pGroup.add(pink_balloon);
}
