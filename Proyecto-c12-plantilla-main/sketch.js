//aqui se crean las variables de boy, path y los bordes
var path,boy, leftBoundary,rightBoundary;
var pathImg,boyRunning;

function preload(){
 //aqui se añade al codigo las imagenes de path y boy
  pathImg = loadImage ("path.png");
  boyRunning = loadAnimation ("Jake1.png","Jake2.png","Jake3.png","Jake4.png");
 
}

function setup(){
  createCanvas(400,400);
  //aqui se crean los sprites de path, boy, los bordes y su tamaño, ubicacion, animacion y velocidad
  path = createSprite(200,200);
  path.addImage (pathImg);
  path.velocityY = 3;
  path.scale=1.2;
  boy = createSprite(200,310,100,100);
  boy.addAnimation("animation",boyRunning);
  boy.velocityY=0;
  boy.scale=0.8;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
 
}

function draw() {

  background("black");
  //aqui se controla a boy con el mouse y se crean los bordes
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  //boy.collide(edges[3])
  //colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
  path.y = height/2;
  }
  
  drawSprites();
}
