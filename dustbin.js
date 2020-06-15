class Dustbin{
    constructor(x,y){
    var options={
        'isStatic':true
    }
    this.body=Bodies.rectangle(x,y,100,80,options)
    this.width=80;
    this.height=100;
    this.image= loadImage("dustbingreen.png");
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    imageMode(CENTER);
     image(this.image, pos.x, pos.y, this.width, this.height);
    }
}