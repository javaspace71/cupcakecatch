
function Thing(x, y, r){
    let options = {
        friction: 0,      
        restitution: 0.6,  //springiness
        // angle: 0,  //0.75
        // torque: 0  //0.05
    }
    this.body = Bodies.circle(x,y,r,options);
    this.body.collisionFilter.group = -1;  //-1 makes them not collide
    World.addBody(world, this.body);

    this.rad = r;
    this.id = this.body.id;
    this.clr = color(200,200,200);

    this.show = function(){
        let pos = this.body.position;
        // let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        // rotate(angle);
        // stroke(255,0,0);
        noStroke();
        fill(this.clr)
        ellipse(0, 0, this.rad*2);
        // stroke(255,0,0);
        // line(-this.rad, 0, 0, 0);
        pop();
    }

    // this.removeFromWorld = function(){
    //     World.remove(world, this.body);
    // }

}