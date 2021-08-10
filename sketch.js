var boyImg,boy
var bgImg,boyImg1,bg
var boyJ
var stone,stoneImg
var ground
var stoneGroup
var coin ,coinGroup,coinImg
var score=0
var time, count 
var a,aImg

function preload(){
boyImg=loadAnimation("images/r1.png","images/r2.png","images/r3.png","images/r4.png")
bgImg=loadImage("images/bg2.jpg")
boyImg1=loadImage("images/stand.png")
boyJ=loadAnimation("images/j1.png","images/j2.png","images/j3.png","images/j4.png")
stoneImg=loadImage("images/stone.png")
coinImg=loadAnimation("images/coin.png","images/c1.png","images/c2.png","images/c3.png","images/c4.png","images/c5.png")
aImg=loadImage("images/thumbs.gif")
}


function setup() {
  createCanvas(1200,400);
 /* for(var i=100; i<1200; i=i+250 ){
  stone=createSprite(i,random(100,400),50,50)
  stone.addImage("stone",stoneImg)
  stone.scale=0.9 
stone.velocityX=-2
  }*/

  bg=createSprite(400,200,400,200)
 bg.addImage("bg",bgImg)
  bg.scale=1
  boy=createSprite(100, 100, 50, 50);
boy.addImage("boyImg1",boyImg1)
boy.addAnimation("boy",boyImg)
boy.addAnimation("jump",boyJ)
//boy.collide(stone)

a=createSprite(400,200,20,20)
a.addImage("up",aImg)
a.visible=false

ground=createSprite(600,380,1200,10)
ground.visible=false

stoneGroup=new Group ()
coinGroup=new Group ()

boy.debug=false
boy.setCollider("rectangle",0,0,40,100)
}


function draw() {
  background(0)

 if (bg.x <100){
  bg.x = bg.width/2;
 } 

 bg.velocityX=-4


  boy.collide(ground)
  boy.collide(stoneGroup)
  boy.addImage("boyImg1",boyImg1)


  if(boy.velocityX==0){
    boy.changeAnimation("boyImg1",boyImg1)
  }

  if(boy.collide(stoneGroup)){
boy.changeAnimation("boyImg1",boyImg1)

  }

  if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+5
    boy.changeAnimation("boy",boyImg)
  }

  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-5
    boy.changeAnimation("boy",boyImg)
  }

  if(keyDown("space")){
    boy.velocityY=-8
   boy.changeAnimation("jump",boyJ)
  }
  boy.velocityY=boy.velocityY+0.4

  
  if(count>5&&count<10){
a.visible=true  

  }

  else{
    a.visible=false
  }


  if(frameCount%50==0){
  spawnStone()
  }
spawnCoin()

  drawSprites();
  text("coins collected: "+ score,1000,100)
  
 count=World.seconds
 console.log(World.seconds)
 text("timer: " + count,1000,200)

}

function spawnStone(){
  if(frameCount%250===0){
stone=createSprite(1100,Math.round(random(100,330)),100,10)
stone.addImage("stone",stoneImg)
stone.scale=0.9
stone.velocityX=-2
stone.lifetime=1000
stoneGroup.add(stone)
//boy.collide(stone)
stone.debug=false
stone.setCollider("rectangle",0,-25,100,60)
  }
}

function spawnCoin(){
  if(frameCount%250===0){
coin=createSprite(1100,stone.y-80,100,10)
coin.addAnimation("coin",coinImg)
coin.scale=0.6
coin.velocityX=-2
coin.lifetime=1000
coinGroup.add(coin)


if(boy.isTouching(coin)){
  score=score+1
  coin.destroy()
 /* for (var j = 0; j < 1000; j++){
  coinGroup.get(j).destroyEach()
  }*/
  }
  }
}

function myTime(){

  //time=setTimeout(,3000)




}