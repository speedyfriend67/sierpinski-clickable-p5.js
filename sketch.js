let amt = 3;
let points = [];
let r;
let rgb;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rgb = createVector(random(255),random(255),random(255));
  // for(let i = 0; i < amt; i++) {
  //   points.push(createVector(random(width), random(height)));
    // stroke('#87cefa');
    // strokeWeight(1);
    // point(points[i].x,points[i].y);
  // }
  // points.push(createVector(width/2,0));
  // points.push(createVector(0, height));
  // points.push(createVector(width, height));
  // stroke(135, 206, 250);
  r = createVector(random(width), random(height));
  // for(let i = 0; i < amt; i++) {
  //   point(points[i].x, points[i].y);
  // }
  point(r.x,r.y);
}

function mousePressed() {
  if(points.length < amt) {
    points.push(createVector(mouseX,mouseY));
    noStroke();
    fill(rgb.x,rgb.y,rgb.z);
    circle(points[points.length-1].x,points[points.length-1].y,10);
  }
}

function reset() {
  points = [];
  background(0);
  rgb = createVector(random(255),random(255),random(255));
// for(let i = 0; i < amt; i++) {
//     points.push(createVector(random(width), random(height)));
//     stroke(rgb.x,rgb.y,rgb.z);
//     strokeWeight(1);
//     point(points[i].x,points[i].y);
//   }
//     r = createVector(random(width), random(height));
//   point(r.x,r.y);
}


function draw() {
  if(isKeyPressed) {
    reset();
  }
  if(points.length >= amt) {
  for(let i = 0; i < 100; i++) {
    let d = floor(random(amt));
    stroke(rgb.x,rgb.y,rgb.z);
    r = p5.Vector.lerp(r, points[d], 0.5);
    point(r.x,r.y);
  }
  }
  
}
