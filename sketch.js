
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var btn1;

var ground;
var left, right;
var engine, world;

function preload() {

}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(260, 100, 20, ball_options);
	World.add(world, ball);

	ground = new Ground(width / 2, 670, width, 20);
	right = new Ground(1350, 600, 20, 120);
	left = new Ground(1100, 600, 20, 120);
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background('white');
	ellipse(ball.position.x, ball.position.y, 20);
	Engine.update(engine);
	drawSprites();
	ground.display();
	right.display();
	left.display();
}

function hForce() {
	Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 });
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, { x: 85, y: -85 });
	}
}

