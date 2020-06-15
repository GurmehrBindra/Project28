class Paperball{
    constructor(x,y,radius){
        //var options={

        //}
    this.body=Bodies.circle(x,y,radius);
    this.radius=radius;
    this.image=loadImage("paper.png");

    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    console.log(this.body);
   
    
    imageMode(CENTER);
    image(this.image, pos.x,pos.y,this.radius,this.radius);
   
    }
}