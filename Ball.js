class Ball {
  constructor(x, y, r, a) {
    this.move = false;
    this.mouseHover = false;
    this.acceleration = a;
    this.x = x;
    this.y = y;
    this.d = r;
    this.offsetX = 0;
    this.offsetY = 0;
    this.path = false;
    this.started = false;
    this.finished = false;
    this.ready = false;
  }

  isMouseHover(path) {
    if (
      mouseX > this.x - this.d / 2 &&
      mouseX < this.x + this.d / 2 &&
      mouseY > this.y - this.d / 2 &&
      mouseY < this.y + this.d / 2
    ) {
      this.mouseHover = true;
    } else {
      this.mouseHover = false;
    }
  }
  isOverPath(path) {
    if (
      path.x1 > this.x - this.d / 2 &&
      path.x1 < this.x + this.d / 2 &&
      path.y1 > this.y - this.d / 2 &&
      path.y2 < this.y + this.d / 2 ||

      path.x2 > this.x - this.d / 2 &&
      path.x3 < this.x + this.d / 2 &&
      path.y2 > this.y - this.d / 2 &&
      path.y2 < this.y + this.d / 2 ||

      path.x2 < this.x - this.d / 2 &&
      path.x3 > this.x + this.d / 2 &&
      path.y2 > this.y - this.d / 2 &&
      path.y2 < this.y + this.d / 2 ||


      path.x3 > this.x - this.d / 2 &&
      path.x3 < this.x + this.d / 2 &&
      path.y3 > this.y - this.d / 2 &&
      path.y4 < this.y + this.d / 2
    ) {
      if (
        path.x4 > this.x - this.d / 2 &&
        path.x4 < this.x + this.d / 2 &&
        path.y4 > this.y - this.d / 2 &&
        path.y4 < this.y + this.d / 2)
      {
        this.started = true;
        this.finished = false;
      } else if (
        path.x1 > this.x - this.d / 2 &&
        path.x1 < this.x + this.d / 2 &&
        path.y1 > this.y - this.d / 2 &&
        path.y1 < this.y + this.d / 2 &&
        this.started
      ) {
        this.started = false;
        this.finished = true;
        this.ready = true;
      }
      this.path = true;
    } else {
      this.path = false;
      this.started = false;
      this.ready = false;
    }
  }

  update(path) {
    if (this.move) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    } else if (this.acceleration) {
      xSpeed = xSpeed + rotationY / 3;
      ySpeed = ySpeed + rotationX / 3;
      this.x = xSpeed / 3 + windowWidth / 2;
      this.y = ySpeed + 150;
    }
    this.isOverPath(path);
  }

  show() {
    push();
    stroke("#38006b");
    strokeWeight(5);
    if (this.path && this.started) {
      fill("#cddc39");
    } else {
      fill("#6a1b9a");
    }

    if (this.acceleration) {
      ellipse(windowWidth / 2 + xSpeed, 150 + ySpeed, this.d);
    } else {
      ellipse(this.x, this.y, this.d);
    }
    pop();
  }

  pressed() {
    if (mouseX > this.x - this.d / 2 && mouseX < this.x + this.d / 2 && mouseY > this.y - this.d / 2 && mouseY < this.y + this.d / 2) {
      this.move = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    this.move = false;
  }
}
