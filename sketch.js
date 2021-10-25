var rex, rex_img;
var bordas;

function preload(){
  //pré carrega as imagens do jogo

  rex_img = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200);

  rex = createSprite(50,100,10,10);
  rex.addAnimation("running",rex_img);
  rex.scale = 0.5;

  bordas = createEdgeSprites();

}

function draw(){
  background('white');

  if(keyDown("space")){
    rex.velocityY = -10;
  }

  rex.velocityY = rex.velocityY + 1;

  rex.collide(bordas[3]);


  drawSprites();

}


