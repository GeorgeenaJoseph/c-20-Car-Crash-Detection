var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(50,11);
  weight=random(2,5)


  car=createSprite(50,200,50,50)
  wall=createSprite(1300,200,60,height/2);
  wall.shapeColor="pink"
  //car.shapeColor="pink"

  car.velocityX=speed;
}

function draw() {
  background(0);  


  if(wall.x-car.x<(wall.width+car.width)/2)
  {
    
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed);

    console.log(deformation)

    if(deformation >180)
    {
      car.shapeColor="red"
    }
    else if(deformation>100 && deformation<180)
    {
      car.shapeColor="yellow"
        
    }
    else if(deformation<100)
    {
      car.shapeColor="green"
    }

  }
  drawSprites();
}