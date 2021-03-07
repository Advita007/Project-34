var Bg_Img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var hero;

function preload() {
Bg_Img = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1600, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800,690,1590,10);
  hero = new Hero(200,200,150,150);
  slingshot = new Fly(hero.body, {x: 200, y: 100})
  box1 = new Blocks(820,200,50,50);
  box2 = new Blocks(820,190,50,50);
  box3 = new Blocks(820,180,50,50);
  box4 = new Blocks(820,170,50,50);
  box5 = new Blocks(820,160,50,50);
  box6 = new Blocks(820,150,50,50);

  box7 = new Blocks(900,200,50,50);
  box8 = new Blocks(900,190,50,50);
  box9 = new Blocks(900,180,50,50);
  box10 = new Blocks(900,170,50,50);
  box11 = new Blocks(900,160,50,50);
  box12 = new Blocks(900,150,50,50);
  box13 = new Blocks(900,140,50,50);

  box14 = new Blocks(1000,190,50,50);
  box15 = new Blocks(1000,180,50,50);
  box16 = new Blocks(1000,170,50,50);

  box17 = new Blocks(1100,200,50,50);
  box18 = new Blocks(1100,190,50,50);
  box19 = new Blocks(1100,180,50,50);
  box20 = new Blocks(1100,170,50,50);

  
  ground1 = new Ground(1000,400,600,15);

  monster = new Monster(1250,200,85,85);

}

function draw() {
  Engine.update(engine);
  background(Bg_Img);
  ground.display();
  ground1.display();
  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  hero.display();
  monster.display();

}


  function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  
  }




