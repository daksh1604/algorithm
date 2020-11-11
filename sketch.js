var fixrect ,movingrect

function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,200,40,45)
  fixrect.shapeColor="green"
  movingrect.shapeColor="green"
  fixrect.debug=true
  movingrect.debug=true

}

function draw() {
  background(255,255,255);
  movingrect.y=World.mouseY
  movingrect.x=World.mouseX
  
  if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2 &&
   fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2 &&
   movingrect.y-fixrect.y<movingrect.width/2+fixrect.height/2 &&
   fixrect.y-movingrect.y<movingrect.width/2+fixrect.height/2){
    movingrect.shapeColor="red"
    fixrect.shapeColor="red"
  }
 else{
   fixrect.shapeColor="green"
 movingrect.shapeColor="green"

 }



  drawSprites();
}