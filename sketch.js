function setup() {
  createCanvas(700, 700);
  number_of_tiles = 10;
  size = width / number_of_tiles;
  background(255)
  strokeWeight(2);
  for (x = 0; x < number_of_tiles + 1; x++) {
    for (y = 0; y < number_of_tiles + 1; y++) {
      push();
      // translate(i * size, j * size);
      let xpos = x * 70
      let ypos = y * 70
      // if (random(0, 2) < .3){
      //   draw_lines(xpos, ypos);
      // } else {
      //   draw_curves(xpos, ypos);
      // }
      // stroke(155, 155, 155)
      rect(xpos, ypos, size, size)
      draw_circs(xpos, ypos)
      // stroke(0)
      // draw_lines(xpos, ypos)
      pop();
    }
  }
}

function draw() {
}

function draw_curves(xpos, ypos) {
  // translate(xpos + (size / 2), ypos + (size / 2))
  // rotate(floor(random(4)) * PI * 0.5)
  // translate(-xpos, -ypos)
  // fill(0);
  // strokeWeight(4)
  arc1 = arc(xpos, ypos, size, size, PI * 0.5, PI)
  arc2 = arc(xpos, ypos, size, size, -PI * 0.5, 0)
  return arc1
}

function draw_circs(xpos, ypos) {
  translate(xpos + (size / 2), ypos + (size / 2))
  rotate(floor(random(2)) * PI * 0.5)
  translate(-xpos, -ypos)
  // fill(0);
  // strokeWeight(4)
  arc1 = arc(xpos, ypos, size, size, PI * 0.5, PI)
  arc2 = arc(xpos, ypos, size, size, -PI * 0.5, 0)
  return arc1
}

function draw_lines(xpos, ypos) {
  line1 = line(xpos + (size /2), ypos, xpos + (size /2), ypos + size);
  line2 = line(xpos, ypos + (size /2), xpos + size, ypos + (size / 2));
  return line1, line2
}