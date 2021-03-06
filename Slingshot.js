class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //loading Images
        this.image=loadImage ("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");  


        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);



    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,9);
            //Command for the width of the band
            if(pointA.x<245){
            strokeWeight(3);
            line(pointA.x-25, pointA.y, pointB.x, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
            //image(this.image3,pointA.x-25,pointA.y-10,5,30);
            }else{
                strokeWeight(7);
            line(pointA.x-25, pointA.y, pointB.x, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
            //image(this.image3,pointA.x-25,pointA.y-10,5,30);
            }

            

        }
        //image X and Y
      image(this.image,250,25)
      image(this.image2,225,25)
    }
    
}