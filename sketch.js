var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var plane1, enemyPlane_img;
//plane2, 
var enemyPlaneGroup,bulletsGroup;
var enemyBulletGroup;
var universe, plane1_img;

var bullets_img;

function preload(){
  bullets_img = loadImage("/images/bullets.png");
  universe = loadImage("/images/universe1.jpeg");
  plane1_img = loadImage("/images/p1.png");
  //plane2_img = loadImage("/images/p2.png");
  enemyPlane_img = loadImage("/images/enemy.png");
  
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  enemyPlaneGroup= new Group();
  bulletsGroup=new Group();
  enemyBulletGroup=new Group();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  
}


 
function keyPressed(){
     if(keyIsDown(32)) {
      createBullet();
    }
  }
  function createBullet() {
    var bullets = createSprite(100,100,3,3);
    
    bullets.y=plane1.y;
    bullets.x=plane1.x;
    bullets.velocityX = 0;
    bullets.velocityY = -5;
    bullets.addImage(bullets_img);
    bullets.scale = 0.1;
    bulletsGroup.add(bullets)
  }



  