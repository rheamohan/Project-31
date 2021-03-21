class Particle{
    constructor(){
        var options={
            isStatic : false,
            restitution : 0.2,
            friction : 1
        }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        strokeWeight(5);
        fill("pink");
        stroke()
        pop(); 
    }
}