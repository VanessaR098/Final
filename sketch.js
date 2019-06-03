ypos = 50;
yspeed = .5;


function setup() {
  let canvas = createCanvas(1200, 800);
  canvas.parent('backgroundCanvas');
}

function draw() {

  strokeWeight(0);
  fill(255);

  //falling ellipses
  fill(148, 24, 43, 100);
  ellipse(20, ypos, 30,30);
  ellipse(60, ypos, 30, 30);
  ellipse(100, ypos, 30, 30);
  ellipse(140, ypos, 30, 30);
  ellipse(180, ypos, 30, 30);
  ellipse(220, ypos, 30, 30);
  ellipse(260, ypos, 30, 30);
  ellipse(300, ypos, 30, 30);
  ellipse(340, ypos, 30, 30);
  ellipse(380, ypos, 30, 30);
  ellipse(420, ypos, 30, 30);
  ellipse(460, ypos, 30, 30);
  ellipse(500, ypos, 30, 30);
  ellipse(540, ypos, 30, 30);
  ellipse(580, ypos, 30, 30);
  ellipse(620, ypos, 30, 30);
  ellipse(660, ypos, 30, 30);
  ellipse(700, ypos, 30, 30);
  ellipse(740, ypos, 30, 30);
  ellipse(780, ypos, 30, 30);
  ellipse(820, ypos, 30, 30);
  ellipse(860, ypos, 30, 30);
  ellipse(900, ypos, 30, 30);
  ellipse(940, ypos, 30, 30);
  ellipse(980, ypos, 30, 30);
  ellipse(1020, ypos, 30, 30);
  ellipse(1060, ypos, 30, 30);
  ellipse(1100, ypos, 30, 30);
  ellipse(1140, ypos, 30, 30);
  ellipse(1180, ypos, 30, 30);


  if(ypos < 0){
    yspeed = 20;
  }
  if(ypos > height){
    ypos = 0;
  }
  ypos += yspeed;


  //Cursor
  fill(25, 25, 25, 200);
  ellipse(mouseX, mouseY, 200, 200);

}
