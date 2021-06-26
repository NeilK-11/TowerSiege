const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390,300,250,10)
    block1 = new Block(300,275,30,40)
    block2 = new Block(330,275,30,40)
    block3 = new Block(360,275,30,40)
    block4 = new Block(390,275,30,40)
    block5 = new Block(420,275,30,40)
    block6 = new Block(450,275,30,40)
    block7 = new Block(480,275,30,40)

    block8 = new Block(330,225,30,40)
    block9 = new Block(360,235,30,40)
    block10 = new Block(390,235,30,40)
    block11 = new Block(420,235,30,40)
    block12 =new Block(450,235,30,40)

    block13 = new Block(360,195,30,40)
    block14 = new Block(390,195,30,40)
    block15 = new Block(420,195,30,40)

    block16 = new Block(390,155,30,40)

    polygon= Bodies.circle(50,200,20)
    World.add(world,polygon)
    chain=new Slingshot(polygon,{x:200,y:100})
}

function draw(){
  background("black")
  
    
    Engine.update(engine);
    ground.display()
    stand1.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    ellipseMode(RADIUS)
    ellipse(polygon.position.x,polygon.position.y,20,20)
    chain.display()
   
}

function mouseDragged(){
    
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    chain.fly();
    
}

/*function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(bird.body,{x:200,y:50})
       slingshot.attach(bird.body);
       bird.trajectory=[]
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);?
}*/