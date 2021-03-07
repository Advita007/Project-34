//creating the Rope class
class Fly{
    //passing the parameters in the constructor which will be invoked when the object is created
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            length:650,
            
        }

        this.pointB = pointB
        this.rope = Constraint.create(options)
        //adding the rope to the world
        World.add(world,this.rope)
        
    }
   //attaching the body to the rope
    attach(body){
    this.rope.bodyA = body

    }
  //setting the body to null when the function is called
    fly(){
        this.rope.bodyA = null
    }
    //displaying the rope
    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        stroke("white")
        strokeWeight(0)
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        }
        
    }
}