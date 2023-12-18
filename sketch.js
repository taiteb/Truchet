function setup() {
  createCanvas(700, 700);
  let c1 = color(145, 145, 30)
  let c2 = color(30, 165, 80)
  number_of_tiles = 30;
  size = width / number_of_tiles;
  background(255)
  strokeWeight(2);

  for (x = 1; x < number_of_tiles - 1; x++) {
    for (y = 1; y < number_of_tiles - 1; y++) {
      push();
      // translate(i * size, j * size);
      let xpos = x * size
      let ypos = y * size
      strokeWeight(4)
      stroke(c2)
      which_to_draw = random(0, 3)
      if (which_to_draw < 1) {
        draw_circs(xpos, ypos);
      } else if (which_to_draw < 2.7) {
        draw_curves(xpos, ypos);
      } else {
        draw_lines(xpos, ypos)
      }
      pop();
    }
  }
}

function draw() {
}

function draw_curves(xpos, ypos) {
  arc1 = arc(xpos, ypos + size, size, size, -HALF_PI, 0)
  arc2 = arc(xpos + size, ypos, size, size, HALF_PI, PI)
}

function draw_circs(xpos, ypos) {
  arc1 = arc(xpos, ypos, size, size, 0, HALF_PI)
  arc2 = arc(xpos + size, ypos + size, size, size, PI, -HALF_PI)
}

function draw_lines(xpos, ypos) {
  line1 = line(xpos + (size / 2), ypos, xpos + (size / 2), ypos + size);
  line2 = line(xpos, ypos + (size / 2), xpos + size, ypos + (size / 2));
}