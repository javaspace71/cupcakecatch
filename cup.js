function Cup(x,y){
    let w = 100;
    let h = 10;
    this.direction = 1;
    let isPouring = false;
    let options = {
        isStatic: true,
        angle: 0
    }
    this.body = Bodies.rectangle(x,y,w,h,options);   
    World.addBody(world, this.body);

    this.show = function(){
        let pos = this.body.position;
        let angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke(255);
        fill(200);
        rectMode(CENTER);
        rect(0, 0, w, h);

        noFill();
        rect(0,-10,w, 20+h);
        pop();

        if (this.isPouring) {
            if (this.body.angle < PI/6) { Matter.Body.rotate(this.body, .02); } 
            //create the particles
            things.push(new Thing(this.body.position.x -30, this.body.position.y -30, random(3,12)));
            //join them together
            // let ind = things.length;
            // if (ind > 1){
            //     let options ={
            //         bodyA: things[ind-1].body,
            //         bodyB: things[ind-2].body,
            //         length: 10,
            //         stiffness: 0.9
            //     }
            //     let con = Constraint.create(options);
            //     World.add(world, con);
            // }
            
            // this.moveCup();

        } else {
            if (this.body.angle > 0) { Matter.Body.rotate(this.body, -0.02); } 
        }
    }

    this.pour = function(){
        this.isPouring = !this.isPouring;
    }

    this.moveCup = function() {
        let r = 100;
        let l = 550;
        let x = this.body.position.x;

        if (x > 550) {
            this.direction = -1;
        } else if (x < 100){
            this.direction = 1;
        }
     
        this.body.position.x = x+this.direction;
        console.log(x);
    }

}