export function isMouseOnCanvas(p5) {
  const X = p5.mouseX;
  const Y = p5.mouseY;
  if (X > 0 && X <= p5.width && Y > 0 && Y <= p5.height) {
    return true;
  } else {
    return false;
  }
}

export function getWindowWidth() {
  const pageWidth = window.innerWidth;

  return pageWidth < 600 ? pageWidth - 40 : pageWidth - 160;
}

export function getWindowHeight() {
  return window.innerHeight - 80;
}

export function resizeSketchOnWindowResize(p5) {
  p5.resizeCanvas(getWindowWidth(), getWindowHeight());
}

export function getRandomP5sketch(p5sketches) {
  const randInt = Math.floor(Math.random() * p5sketches.length);
  return p5sketches[randInt];
}
