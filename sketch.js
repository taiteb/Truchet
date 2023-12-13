function setup() {
  createCanvas(400, 400);
  number_of_tiles = 13;
  size = width / number_of_tiles;
  background(255)
  strokeWeight(2);
  for (i = 0; i < number_of_tiles + 1; i++) {
    for (j = 0; j < number_of_tiles + 1; j ++) {
      push();
      translate(i * size, j * size);
      centerPoint = new p5.Vector(size/2, size/2);
      rotate(floor(random(4)) * PI * 0.5, centerPoint);
      if (random(0, 2) < .3){
        lines = draw_lines();
        
      } else {
        draw_curves();
      }
      // draw_lines();

      stroke(220, 0, 0);
      strokeWeight(5);
      noFill()
      // square(0,0,size);
      pop();
    }
  }
}

function draw() {
}

function draw_curves() {
  fill(0);
  arc1 = arc(size/2, -size/2, size, size, PI * 0.5, PI)
  arc2 = arc(-size/2, size/2, size, size, -PI * 0.5, 0)
  return arc1, arc2
}

function draw_lines() {
  line1 = line(-size / 2, 0, size / 2, 0);
  line2 = line(0, -size / 2, 0, size / 2);
  return line1, line2
}