let startHue = Math.random() * 360;
let endHue = (startHue + (Math.random() * 45 + 45) * (Math.random() > 0.5 ? 1 : -1));
let brightness1 = Math.random() * 15 + 55;
let brightness2 = Math.random() * 15 + 55;

let v = [1, 1];
let accel = [0, 0];

let prev = new Date();
requestAnimationFrame(function f() {
  let now = new Date();
  let d = (now - prev) / 1000;
  prev = now;

  accel = [accel[0] + (Math.random() * 2 - 1) * 0.04, accel[1] + (Math.random() * 2 - 1) * 0.04];
  v = [v[0] + d * accel[0], v[1] + d * accel[1]];
  startHue += d * v[0];
  endHue += d * v[1];

  document.querySelector(".sidebar").style.background = `linear-gradient(180deg, 
  hsl(${startHue}, 100%, ${brightness1}%), 
  hsl(${endHue}, 100%, ${brightness2}%)`;

  requestAnimationFrame(f);
})
