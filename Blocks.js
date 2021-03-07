class Blocks{
    //passing the parameters to the contructor which are invoked while creating the object
    constructor(x,y,width,height){
        //defining the options
       var options = {
           restitution: 0.8, 
           friction: 1.0,
           //density: 1.0

           
       }
       //creating the body as a rectangle one
       this.body = Bodies.rectangle(x,y,width,height,options); 
       this.width = width
       this.height = height
       //adding the body to the world
       World.add(world,this.body);
       }
//calling the display function for the body
     display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     strokeWeight(3)
     stroke("black")
    fill(255);
    rect(0,0,this.width,this.height);
     pop();
     }

}