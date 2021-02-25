import {
  isMouseOnCanvas,
  getWindowHeight,
  getWindowWidth,
} from "../../../utils/P5utils";

const p5sketches = [
  {
    id: "a000",
    title: "Introdeux",
    sketchData: {
      inc: 0,
    },
    setupFunc: (p5, data) => {
      p5.noFill();
      p5.strokeWeight(0.5);
    },
    drawFunc: (p5, data) => {
      let y1 = getWindowHeight() * p5.noise(data.inc + 1);
      let x1 = getWindowWidth() * p5.noise(data.inc);

      p5.stroke(p5.noise(data.inc) * 255, 0, p5.noise(data.inc + 1) * 255);
      p5.line(getWindowWidth() / 2, getWindowHeight() / 2, x1, y1);
      data.inc += 0.005;

      if (isMouseOnCanvas(p5)) {
        p5.stroke(255, 9, 255, 50);
        p5.bezier(
          p5.mouseX,
          p5.mouseY,
          getWindowWidth() * p5.noise(data.inc + 2),
          getWindowHeight() * p5.noise(data.inc + 2),
          getWindowWidth() * p5.noise(data.inc + 3),
          getWindowHeight() * p5.noise(data.inc + 4),
          x1,
          y1
        );
      }
    },
  },
  {
    id: "b001",
    title: "Round Bezier Textile",
    sketchData: {
      inc: 0,
    },
    setupFunc: (p5, data) => {
      p5.noFill();
      p5.strokeWeight(0.5);
    },
    drawFunc: (p5, data) => {
      let y1 = getWindowHeight() * p5.noise(data.inc + 1);
      let x1 = getWindowWidth() * p5.noise(data.inc);

      let x2 = (getWindowWidth() / 2) * (p5.cos(data.inc) + 1);
      let y2 = (getWindowHeight() / 2) * (p5.sin(data.inc) + 1);

      p5.stroke(p5.noise(data.inc) * 255, 0, p5.noise(data.inc + 1) * 255);
      p5.line(x2, y2, x1, y1);
      data.inc += 0.005;

      if (isMouseOnCanvas(p5)) {
        p5.stroke(255, 9, 255, 50);
        p5.bezier(
          p5.mouseX,
          p5.mouseY,
          getWindowWidth() * p5.noise(data.inc + 2),
          getWindowHeight() * p5.noise(data.inc + 2),
          getWindowWidth() * p5.noise(data.inc + 3),
          getWindowHeight() * p5.noise(data.inc + 4),
          x1,
          y1
        );
      }
    },
  },
  {
    id: "d002",
    title: "Test",
    sketchData: {
      inc: 0,
    },
    setupFunc: (p5, data) => {
      p5.noFill();
      p5.strokeWeight(0.5);
    },
    drawFunc: (p5, data) => {
      let y1 = getWindowHeight() * p5.noise(data.inc + 1);
      let x1 = getWindowWidth() * p5.noise(data.inc);

      p5.stroke(p5.noise(data.inc) * 255, 0, p5.noise(data.inc + 1) * 255);
      p5.line(getWindowWidth() / 2, getWindowHeight() / 2, x1, y1);
      data.inc += 0.005;

      if (isMouseOnCanvas(p5)) {
        p5.stroke(255, 255, 255);
        p5.bezier(
          p5.mouseX,
          p5.mouseY,
          getWindowWidth() * p5.noise(data.inc + 2),
          getWindowHeight() * p5.noise(data.inc + 2),
          getWindowWidth() * p5.noise(data.inc + 3),
          getWindowHeight() * p5.noise(data.inc + 4),
          x1,
          y1
        );
      }
    },
  },
];

export default p5sketches;
