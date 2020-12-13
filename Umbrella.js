class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true,
        }
        //this.Animation = loadAnimation = ("walking Frame/walking,walking Frame/walking,walking Frame/walking,walking Frame/walking,walking Frame/walking,walking Frame/walking,walking Frame/walking,walking Frame/walking,")
        this.image = loadImage("images/walking Frame/walking1.png")
        this.umbrella = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display() {
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y + 70, 300, 300);
    }
}