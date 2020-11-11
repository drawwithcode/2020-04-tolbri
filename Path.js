class Path {
  constructor() {

    this.x1 = windowWidth / 2;
    this.y1 = windowHeight - 100;
    this.x2 = this.x1
    this.y2 = random(windowHeight - 200, windowHeight - 400);
    this.x3 = random(50, windowWidth - 50);
    this.y3 = this.y2;
    this.x4 = this.x3;
    this.y4 = 200;
  }

  getPath() {
    let path = {
      x1: this.x1,
      y1: this.y1,
      x2: this.x2,
      y2: this.y2,
      x3: this.x3,
      y3: this.y3,
      x4: this.x4,
      y4: this.y4
    }
    return path;
  }

  show() {
    push();
    stroke("#006978");
    strokeWeight(2);
    line(this.x1, this.y1, this.x2, this.y2);
    line(this.x2, this.y2, this.x3, this.y3);
    line(this.x3, this.y3, this.x4, this.y4);
    pop();

    push();
    stroke("#006978");
    strokeWeight(2);
    fill("#cddc39");
    ellipse(this.x4, this.y4 ,20)
    pop();

    push();
    stroke("#006978");
    strokeWeight(2);
    fill("#ff3d00");
    ellipse(this.x1, this.y1 ,20)
    pop();
  }

  update() {

  }
}
