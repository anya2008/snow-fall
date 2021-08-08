class Snow{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution: 0.1
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
       display(){
           imageMode(CENTER)
           image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
       }

}
