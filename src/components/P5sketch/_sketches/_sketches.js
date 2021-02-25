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
    title: "0xa130",
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
  {
    id: "e003",
    title: "Partiboids",
    sketchData: {
      inc: 0,
      NUMBER_OF_BOIDS: Math.floor(getWindowWidth() / 10),
      MAX_SPEED: 5,
      ALIGNMENT_RADIUS: 10,
      SEPARATION_RADIUS: 100,
      COHESION_RADIUS: 10,
      MAX_JOIN_DISTANCE: 40,
      MIN_JOIN_DISTANCE: 20,
      boids: [],
    },
    setupFunc: (p5, data) => {
      p5.background(0);
      class Boid {
        constructor(position) {
          if (position) {
            this.position = p5.createVector(position.x, position.y);
          } else {
            this.position = p5.createVector(
              p5.random(p5.width),
              p5.random(p5.height)
            );
          }

          this.velocity = p5.createVector(p5.random(-6, 6), p5.random(-2, 2));

          this.acceleration = p5.createVector();

          this.size = p5.random(3, 8);
          this.color = p5.color(
            p5.random(200, 255),
            p5.random(200),
            p5.random(200, 255)
          );
        }

        draw() {
          p5.fill(this.color);
          p5.noStroke();
          p5.circle(this.position.x, this.position.y, this.size);
        }

        checkEdges() {
          if (this.position.x > p5.width) {
            this.position.x = 0;
          } else if (this.position.x < 0) {
            this.position.x = p5.width;
          } else if (this.position.y > p5.height) {
            this.position.y = 0;
          } else if (this.position.y < 0) {
            this.position.y = p5.height;
          }
        }

        align() {
          let radius = data.ALIGNMENT_RADIUS;
          let steering = p5.createVector();
          let total = 0;
          for (let boid of data.boids) {
            let distance = p5.dist(
              this.position.x,
              this.position.y,
              boid.position.x,
              boid.position.y
            );
            if (distance < radius && boid !== this) {
              steering.add(boid.velocity);
              total++;
            }
          }
          if (total > 0) {
            steering.div(total);
            steering.setMag(data.MAX_SPEED);
            steering.sub(this.velocity);
            steering.limit(0.2);
          }
          return steering;
        }

        separate() {
          let radius = data.SEPARATION_RADIUS;
          let steering = p5.createVector();
          let total = 0;
          for (let boid of data.boids) {
            let distance = p5.dist(
              this.position.x,
              this.position.y,
              boid.position.x,
              boid.position.y
            );
            if (distance < radius && boid !== this) {
              let difference = p5
                .createVector()
                .sub(this.position, boid.position);

              // console.log(difference);
              difference.div(distance);
              steering.add(difference);
              total++;
            }
          }
          if (total > 0) {
            steering.div(total);
            steering.setMag(data.MAX_SPEED);
            steering.sub(this.velocity);
            steering.limit(1.1);
          }
          return steering;
        }

        coherse() {
          let radius = data.COHESION_RADIUS;
          let steering = p5.createVector();
          let total = 0;
          for (let boid of data.boids) {
            let distance = p5.dist(
              this.position.x,
              this.position.y,
              boid.position.x,
              boid.position.y
            );
            if (distance < radius && boid !== this) {
              steering.add(boid.position);
              total++;
            }
          }
          if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(data.MAX_SPEED);
            steering.sub(this.velocity);
            // steering.limit(MAX_FORCE);
            steering.limit(0.7);
          }
          return steering;
        }

        join() {
          for (let boid of data.boids) {
            const distance = p5.dist(
              this.position.x,
              this.position.y,
              boid.position.x,
              boid.position.y
            );
            if (
              distance < data.MAX_JOIN_DISTANCE &&
              distance > data.MIN_JOIN_DISTANCE &&
              this !== boid
            ) {
              p5.strokeWeight(0.3);
              p5.noFill();
              p5.bezier(
                this.position.x,
                this.position.y,
                this.position.x +
                  (p5.noise(data.inc + this.position.x) - 0.5) * 10,
                this.position.y +
                  (p5.noise(data.inc + this.position.y) - 0.5) * 15,
                boid.position.x +
                  (p5.noise(data.inc + boid.position.x) - 0.5) * 20,
                boid.position.y +
                  (p5.noise(data.inc + boid.position.x) - 0.5) * 25,
                boid.position.x,
                boid.position.y
              );
            }
          }
        }

        move() {
          let alignment = this.align();
          this.acceleration.add(alignment);

          // let separation = this.separate();
          // this.acceleration.add(separation);

          let cohesion = this.coherse();
          this.acceleration.add(cohesion);

          // let attraction = this.goTowardsBoid(0);
          // this.acceleration.add(attraction);

          // let rejection = this.rejectBoid(0);
          // this.acceleration.add(rejection);
        }

        update() {
          this.position.add(this.velocity);
          this.velocity.add(this.acceleration);
          this.velocity.limit(data.MAX_SPEED);
          this.acceleration.mult(0);
        }
      }

      for (let i = 0; i < data.NUMBER_OF_BOIDS; i++) {
        data.boids.push(new Boid());
      }
    },
    drawFunc: (p5, data) => {
      p5.background(0, 90);

      for (let boid of data.boids) {
        boid.checkEdges();
        boid.move();
        boid.update();
        // boid.join();
        boid.draw();
      }

      data.inc += 0.001;
    },
  },
];

export default p5sketches;
