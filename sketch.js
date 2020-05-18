//module classes
const Engine = Matter.Engine, 
    World = Matter.World, 
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Events = Matter.Events,
    Constraint = Matter.Constraint;

const engine = Engine.create();
var world = engine.world;
var ground;
var cupA;
const things = [];

function setup() {
    createCanvas(650, 500);

    cupA = new Cup(200,200);
    // ground = new Ground(width/2, height-10, width, 20);
}

function mousePressed(){
    cupA.pour();
}

// function updateBodies(id){
//     for (let i = 0; i < things.length; i++){
//         if (things[i].id == id){
//             // things[i].falling = false;
//             things[i].removeFromWorld();
//             things.splice(i, 1);
//         }
//     }
// }

Matter.Events.on(engine, 'collisionEnd', function(event) {
    // let parr = event.pairs[0];
    // let a = parr.bodyA;
    // let b = parr.bodyB;

    // ///if a body hits the ground
    // if (a.label === 'gnd' && b.label !== 'gnd') {
    //     //update b body 
    //     console.log('body b hit')
    //     updateBodies(b.id);
    // } 

    // if (b.label === 'gnd' && a.label !== 'gnd') {
    //     //update a body 
    //     console.log('body a hit')
    //     updateBodies(a.id);
    // } 
 
});

function manageThings() {
    // check to see if the things are off screen
    for (let i = 0; i < things.length; i++){
        if (things[i].body.position.y > height+100){
            //delete things
            World.remove(world, things[i].body);
            things.splice(i, 1);
        }
    }
}

function draw() {
    background(51);

    Engine.update(engine);     //update physics engine in synch with draw cycle
    manageThings();
    //ground.show();

    //display stuff
    cupA.show();
    for (let i = 0; i < things.length; i++){
        things[i].show();
    }

}
