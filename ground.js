class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic : true,
            restitution : 0.02,
            friction :0.2
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        fill("blue");
        stroke("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }

};