var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,appleImg,carrotImg,orangeImg,redImg;
var appleGroup, orangeGroup, redGroup;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//criandoo grupos para as maçãs, folhas laranjas e vermelhas
appleGroup = createGroup();
orangeGroup = createGroup();
redGroup = createGroup();
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //código abaixo

  if(rabbit.isTouching(appleGroup)){
    appleGroup[0].destroy();
    }
  if(rabbit.isTouching(redGroup)){
    redGroup[0].destroy();
    }
  if(rabbit.isTouching(orangeGroup)){
    orangeGroup[0].destroy();
   }
   drawSprites();
   
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

var select_sprites = Math.round(random(1,3));

  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
     createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }
   }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }



}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
appleGroup.add(apple);
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
orangeGroup.add(orangeL)
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
redL.velocityY = 3;
redL.lifetime = 150;
redGroup.add(redL)
}
