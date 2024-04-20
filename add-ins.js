window.addIns = {
  init(time) {
    document.body.style.transition = "all " + time + "ms";
  },
  rotate() {
    document.body.style.transform += "rotate(360deg)";
  },
  blur() {
    document.body.style.filter += "blur(1.5px)";
  },
  invert() {
    document.body.style.filter += "invert(1)";
    document.body.style.background = "black";
  },
  all(time) {
    this.init(time);
    for (let f in this) {
      f = this[f];
      if (f != this.init && f != this.all) f();
    }
  }
}