opacity = 0;
opacityInc = .1;
ellipseWidth = 30;
ellipseSpeed = 4;



function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('backgroundCanvas');
}

function draw() {

  strokeWeight(0);
  fill(255);

  //single ellipse in center of screen (enlarge it later)
  fill(148, 24, 43, opacity);
  ellipse(windowWidth/2, windowHeight/2, ellipseWidth);

  //gradually make ellipse fill the whole screen
  if (ellipseWidth < 0){
    ellipseSpeed = 20;
  }
  ellipseWidth += ellipseSpeed;

  //make ellipse increase opacity for dramatization
  if(opacity < 0){
    opacity = 100;
  }
  opacity += opacityInc;
}
