var person;
var sceneNum=0;
function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
    var jump = createVector(0,- 3.5);
    person.applyForce(jump);
  } else if (key=='q'){
    sceneNum++;
  }
}

function draw() {
  
  if (sceneNum===0){
    textSize(20);
    fill(50,200,30);
    text("2D Side Scroller", 200,180);
    fill(80,250,250);
    text("press q to immerse in my game", 150,200);
  } else if (sceneNum===1){
  background(130,200,50);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
  var force = createVector(-0.1,0);
  person.applyForce(force);
  }
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
    person.display();
  fill(5,50,100);
  rect(400, height-50,100,100);
  fill(80,80,255);
  ellipse(700,200.80,80);
  fill(40,250,8);
  rect(1000, 299,100,10);
  fill(250,350,100);
  rect(1300,3250,50,40);
  fill(90,375,140);
  ellipse(1600, 289,90,80);
 
	} else { 
  background (50,100,200);
  fill (100,100,100);
  text ('You are doing a great job!!!',150,200);
  }
}
