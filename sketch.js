let grid = []
let bg
let c1
let strk = 2
let number_of_tiles;

function setup() {
  createCanvas(displayWidth, displayHeight);
  c1 = color(30, 165, 80)
  tiles_wide = ceil(width/30);
  size = ceil(width / tiles_wide);
  tiles_high = ceil(height / size)

  bg = color(0,0)
  background(bg)
  for (x = 0; x < tiles_wide; x++) {
    for (y = 0; y < tiles_high; y++) {
      // translate(i * size, j * size);
      let xpos = x * size
      let ypos = y * size
      grid.push([xpos, ypos])
      strokeWeight(strk)
      stroke(c1)
      noFill()
      which_to_draw = random(0, 3)
      if (which_to_draw < 1) {
        draw_circs(xpos, ypos);
      } else if (which_to_draw < 1.7) {
        draw_curves(xpos, ypos);
      } else {
        draw_lines(xpos, ypos)
      }
    }
  }
  console.log(grid.length, tiles_high, tiles_wide, height, width)
  size = size -1
}

// let i = 0;

function draw() {
  frameRate(3)
  // let one_to_change = i++ % grid.length
  let one_to_change = ceil(random(0, grid.length-1))
  xpos = grid[one_to_change][0]
  ypos = grid[one_to_change][1]

  // console.log("12c", one_to_change, "x", xpos, "y", ypos)

  strokeWeight(strk-1)
  erase(255, 0);
  rect(xpos, ypos, size, size)
  noErase()

  strokeWeight(strk)
  fill(bg)
  stroke(c1)
  strokeCap(SQUARE)
  tile_to_draw = random(0, 2)
  if (tile_to_draw < 1) {
    draw_circs(xpos, ypos);
  } else if (tile_to_draw < 2) {
    // stroke(25, 25, 25)
    draw_curves(xpos, ypos);
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