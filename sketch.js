let grid = []
let bg
let c1
let strk = 6

function setup() {
  createCanvas(700, 700);
  c1 = color(30, 165, 80)
  number_of_tiles = 20;
  size = width / number_of_tiles;
  bg = color(255)
  background(bg)
  for (x = 1; x < number_of_tiles - 1; x++) {
    for (y = 1; y < number_of_tiles - 1; y++) {
      // translate(i * size, j * size);
      let xpos = x * size
      let ypos = y * size
      grid.push([xpos, ypos])
      strokeWeight(strk)
      stroke(c1)
      which_to_draw = random(0, 3)
      if (which_to_draw < 1) {
        draw_circs(xpos, ypos);
      } else if (which_to_draw < 2.7) {
        draw_curves(xpos, ypos);
      } else {
        draw_lines(xpos, ypos)
      }
    }
  }
}

let i = 0;

function draw() {
  frameRate(22)
  let one_to_change = i++ % grid.length
  xpos = grid[one_to_change][0]
  ypos = grid[one_to_change][1]
  fill(bg)
  noStroke()
  rect(xpos, ypos, size, size)
  strokeWeight(strk)
  stroke(c1)
  which_to_draw = random(0, 3)
  if (which_to_draw < 1) {
    draw_circs(xpos, ypos);
  } else if (which_to_draw < 2.7) {
    draw_curves(grid[one_to_change][0], grid[one_to_change][1]);
  } else {
    draw_lines(grid[one_to_change][0], grid[one_to_change][1]);
  }

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