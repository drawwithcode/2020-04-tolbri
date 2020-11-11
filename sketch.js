let path;

let xSpeed = 0;
let ySpeed = 0;

let difficulty = 50;

let pathWidth = 5;
let ball;

var level = ["Easy", "Medium", "Difficult"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  path = new Path();
  ball = new Ball(windowWidth / 2, 150, 60, false);

  var gui = createGui("Settings");
  gui.addGlobals("level");

}



function draw() {

  switch (level) {

    case "Easy":
      ball.d = 60;
      break;

    case "Medium":
      ball.d = 40;
      break;

    case "Difficult":
      ball.d = 20;
      break;
  }


  if (ball.finished) {
    background("#81c784");
    if (ball.ready) {
      path = new Path();
    }
  } else {
    background("#56c8d8");
  }

  movePlayer();
  path.show();
  ball.show();
}


function movePlayer() {
  ball.isMouseHover();
  ball.update(path.getPath());
}

function mousePressed() {
  ball.pressed();
}

function mouseReleased() {
  ball.released();
}


// request permissions on iOS
function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
		ball = new Ball(windowWidth / 2, 150, 60, true);
  }
}
