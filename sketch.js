var fixedRect, movingRect;
var ob1,ob2,ob3,ob4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green;"
  movingRect.debug = true;
  ob1 = createSprite(200,400,50,10);
  ob1.shapeColor = "green"
  ob2 = createSprite(500,200,40,20);
  ob2.shapeColor = "green"
  ob3 = createSprite(100,100,40,50);
  ob3.shapeColor = "green"
  ob4 = createSprite(900,500,35,65);
  ob4.shapeColor = "green"
}

function draw() {
  background(0);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
if(isTouching(movingRect,ob1)){
  movingRect.shapeColor = "red";
  ob1.shapeColor = "red";
  
}
else{
  movingRect.shapeColor = "green";
  ob1.shapeColor = "green";
}
  drawSprites();
}
