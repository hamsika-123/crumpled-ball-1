class paper{
    constructor(x,y,w){
        var options = {
           'isStatic' :false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2

    }
    
      
    
   this.radious = w;
  
   this.body = Bodies.circle(x, y, this.radious, options);

    World.add(world, this.body);
}
display(){
    var paperpos=this.body.position;
        push();
        fill("red");
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radious);
        pop();
}
}
