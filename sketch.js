var gameState=0;
var form,game,allPlayers;
var database; 
var player;
var playerCount=0;  
var plr1,plr2;
var player1_img,track; 
var flag1=false;
var flag2=false;
var count=0;
var plrs=[]
var gameState="play";

function preload(){
  player1_img=loadImage("Images/player1.png");
  track = loadImage("Images/road.jpg");  
  vh1=loadImage("Images/car1.png");
  vh2=loadImage("Images/car2.png");
  vh3=loadImage("Images/car3.png");
  vh4=loadImage("Images/car4.png");
  vh5=loadImage("Images/car5.png");
  vh6=loadImage("Images/truck1.png");
  vh7=loadImage("Images/truck2.png");
}

function setup() {
  vehicleGroup=new Group();
  database = firebase.database();
  createCanvas(displayWidth-10,displayHeight-10);


  game=new Game();
  game.start();
  game.getState();
}

function draw() {
  text(mouseX+","+mouseY,50,50);
 //if(gameState==="play"){
  game.getFlag1();
  game.getFlag2();
  
  if(playerCount===2 && flag1===true && flag2===true){
    //gameState=1;
    game.update(1);
}
  if(gameState===1){
    game.play();
  }
  if(keyIsDown(RIGHT_ARROW) && player.index===1){
    player.x+=30;
    player.update();
  }
  if(keyIsDown(UP_ARROW) && player.index===1){
    player.y+=30;
    player.update();
  }
  if(keyIsDown(LEFT_ARROW) && player.index===1){
    player.x+=-30;
    player.update();
  }
 /* createEdgeSprites();
  plr1.collide(RIGHT);
  plr1.collide(leftEdge);
  for(var i=0; i<vehicleGroup.maxDepth(); i++){
    vehicleGroup.get(i).collide(rightEdge);
    vehicleGroup.get(i).collide(leftEdge);
    if(vehicleGroup.get(i)!==null && plr1.isTouching(vehicleGroup.get(i))){
      count++
    }
  }
  if(count===3){
    gameState="end";
  }*/
/*}else if(gameState==="end"){
  console.log("Game over");
  }*/



}
/*function mouseClicked(){
  if(player.index===2){
    var vehicle=createSprite(mouseX,mouseY,10,10);
    vehicle.velocityY=10;
    console.log(vehicle);   
    var rand = Math.round(random(1,7));
    switch(rand){
      case 1:vehicle.addImage("vh1",vh1);
      break
      case 2:vehicle.addImage("vh2",vh2);
      break
      case 3:vehicle.addImage("vh3",vh3);
      break
      case 4:vehicle.addImage("vh4",vh4);
      break
      case 5:vehicle.addImage("vh5",vh5);
      break
      case 6:vehicle.addImage("vh6",vh6);
      break
      case 7:vehicle.addImage("vh7",vh7);
      break
    }
    vehicle.scale = 0.5;
    vehicle.lifetime = 70;
    vehicleGroup.add(vehicle);
    
  }
}*/
