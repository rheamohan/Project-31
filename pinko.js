class Pinko {
    constructor(x,y,radius){
        var options={
            isStatic : true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        strokeWeight(7);
        fill("white");
        stroke("white");
        ellipseMode(RADIUS);
        ellipse(x,y,this.radius,this.radius)
        pop();
    }
}