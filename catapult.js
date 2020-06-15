class Catapult{
    constructor(bodyA,pointB){
      var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffnes:0.04,
          length:1
      }  
      this.catapult= Constraint.create(options);
      this.pointB=pointB;
    }

    fly(){
       this.catapult.bodyA=null; 
    }
    display(){
        
        if(this.catapult.bodyA){
            var pointA= this.catapult.bodyA.position;
            var pointB= this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
       
    }
}