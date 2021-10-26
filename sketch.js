var enemy1,enemy3,enemy2,enemy4;




function setup() {
  createCanvas(20000,800);
  player=createSprite(50, 599, 50, 50);
  enemy1=createSprite(1000,570,50,50);
  enemy1.shapeColor="red";
  enemy2=createSprite(1900,570,50,50);
  enemy2.shapeColor="red";
  enemy3=createSprite(2600,570,50,50);
  enemy3.shapeColor="red";
  enemy4=createSprite(3010,570,50,50);
  enemy4.shapeColor="red";
  ground=createSprite(600,600,20000,20);
  

}

function draw() {
  background(255,255,255);  
  console.log(player.y);
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 2;
  }
  if (keyDown(LEFT_ARROW)){
    player.x = player.x - 2;
  }
  if (keyDown(UP_ARROW)){
    player.velocityY = - 10;
  }
  player.velocityY=player.velocityY+1;
  player.collide(ground);
  drawSprites();
}

function move(){

    player.x = player.x + 2;
    player.x = player.x - 2;
}









