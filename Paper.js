class Paper{
    constructor(x, y) {
        var options= {
            'isStatic' : true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 10, options); 
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        translate(pos.x, pos.y);
        fill('#ff66b8');
        ellipse(0,0,20,20);
    }
}