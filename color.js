class Motion {
  constructor(level, f) {
    // Creates a motion curve that has f as its derivative at the given level
    this.vals = new Array(level + 1).fill(0);
    /* this.elem = {};
    this.elem.ball = document.createElement("div");
    this.elem.ball.classList.add("ball");
    this.elem.disp = document.createElement("div");
    this.elem.container = document.createElement("div");
    this.elem.container.append(this.elem.ball, this.elem.disp);
    document.getElementById('container').append(this.elem.container); */
    this.f = f;
    f.bind(this);
  }
  update(t, dt) {
    // Run f for time t and update motion
    this.vals[this.vals.length - 1] = this.f(t);
    for (let i = this.vals.length - 2; i >= 0; i--) {
      this.vals[i] += this.vals[i + 1] * dt;
    }
  }
  disp() {
    // this.elem.ball.style.marginLeft = this.vals[0] + "px";
  }
}

let currentDir = 1, cd2 = 1;
function fff() {
  let currentAccel = this.vals[2] ?? 0;
  if (this.vals[1] > 20 || currentAccel > 5) {
    this.vals[1] = Math.min(this.vals[1], 20);
    currentAccel = -1;
    currentDir = -1;
  } else if (this.vals[1] < -20 || currentAccel < -5) {
    this.vals[1] = Math.max(this.vals[1], -20);
    currentAccel = 1;
    currentDir = 1;
  } else if (Math.random() < 1 / 90) {
    let otherThing = Math.random();
    if (otherThing > 0.7) currentDir = -currentDir;
    currentAccel += currentDir;

  }
  return currentAccel;
}
function g() {
  let currentAccel = this.vals[2] ?? 0;
  if (this.vals[1] > 20 || currentAccel > 5) {
    this.vals[1] = Math.min(this.vals[1], 20);
    currentAccel = -1;
    cd2 = -1;
  } else if (this.vals[1] < -20 || currentAccel < -5) {
    this.vals[1] = Math.max(this.vals[1], -20);
    currentAccel = 1;
    cd2 = 1;
  } else if (Math.random() < 1 / 90) {
    let otherThing = Math.random();
    if (otherThing > 0.7) cd2 = -cd2;
    currentAccel += cd2;
  }
  return currentAccel;
}

let motion = new Motion(2, fff);
let motion2 = new Motion(2, g);
let initial = Math.random() * 360;
let offset = Math.random() * 30 + 30;

let start = new Date();
let before = start;
requestAnimationFrame(function f() {
  let now = new Date();
  let dt = (now - before) / 1000;
  before = now;
  motion.update((now - start) / 1000, dt);
  motion2.update((now - start) / 1000, dt);
  //document.body.style.backgroundColor = `hsl(${motion.vals[0] * 1}, 100%, 70%)`;
  document.querySelector(".sidebar").style.background = `linear-gradient(180deg, 
  hsl(${initial + motion.vals[0]}, 100%, 80%), 
  hsl(${initial + motion2.vals[0] + offset}, 100%, 60%)`;
  requestAnimationFrame(f);
})