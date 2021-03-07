class Monster{
    constructor(x,y,r) {
    var options = {
       //density:1,
       //frictionAir:1
   };
   
    this.x = x
    this.y = y
    this.r = r
    this.image = loadImage("images/Monster-02.png")
    this.body = Bodies.circle(this.x,this.y,this.r/1.5,options);
    World.add(world,this.body)
    
    }
   
    display(){
   
        var monsterPos = this.body.position;
        push();
        translate(monsterPos.x,monsterPos.y);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0,0, this.r*2.5, this.r*1.65)
        pop();
    }
   }