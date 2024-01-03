const currentUrl = new URL(window.location.href);
let startingTime = currentUrl.searchParams.get("startTime"),
  endingTime = currentUrl.searchParams.get("finishTime");

startingTime = new Date(+startingTime);
endingTime = new Date(+endingTime);
const a = {
  hour: endingTime.getHours(),
  min: endingTime.getMinutes(),
  sec: endingTime.getSeconds(),
  milsec: endingTime.getMilliseconds()
};

let now;
let confettiDone = false;

const nowDisplay = document.getElementById("now");
const timeLeftDisplay = document.getElementById("time-left");
const clock = document.getElementById("clock");
const ctx = clock.getContext("2d");
//clock.width = clock.height = Math.min(window.innerWidth, window.innerHeight) / 2;
clock.width = clock.height = 300;

requestAnimationFrame(function f() {
  now = new Date();
  setTime(now);

  let difference = startingTime - now;
  if (difference < 0) {
    difference = endingTime - now;
    setDifference(difference, true);
  } else {
    setDifference(difference, false);
  }

  requestAnimationFrame(f);
})

function setTime(time) {
  let hour = time.getHours(),
    min = time.getMinutes(),
    sec = time.getSeconds(),
    milsec = time.getMilliseconds();
  nowDisplay.innerHTML = parseTime(hour, min, sec, milsec);

  ctx.clearRect(0, 0, 300, 300);
  ctx.lineWidth = 1;
  ctx.lineCap = "square";
  // draw clock border
  ctx.beginPath();
  ctx.arc(150, 150, 150, 0, Math.PI * 2);

  // draw clock ticks
  for (let i = 0; i < 60; i++) {
    let angle = Math.PI / 30 * i;
    let vector = [Math.cos(angle), Math.sin(angle)];
    let length = 10;
    if (i % 5 == 0) length = 20;
    ctx.moveTo(vector[0] * 140 + 150, vector[1] * 140 + 150);
    ctx.lineTo(vector[0] * (140 - length) + 150, vector[1] * (140 - length) + 150);
  }
  ctx.stroke();

  // draw clock hands
  function drawHand(portion, length, thickness = 1) {
    let angle = 2 * Math.PI * portion / 60 - Math.PI / 2;
    let vec = [Math.cos(angle), Math.sin(angle)]
    ctx.lineWidth = thickness;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(vec[0] * length + 150, vec[1] * length + 150)
    ctx.stroke();
  }

  // ending time
  ctx.strokeStyle = "#f0f0f0";
  //drawHand(a.sec + a.milsec / 1000, 115);
  //drawHand(a.min + a.sec / 60 + milsec / 60000, 90, 3);
  drawHand((a.hour + (a.min + a.sec / 60 + a.milsec / 60000) / 60) * 5, 75, 5);

  // now
  ctx.strokeStyle = "black";
  drawHand(sec + milsec / 1000, 115);
  drawHand(min + sec / 60 + milsec / 60000, 90, 3);
  drawHand((hour + (min + sec / 60 + milsec / 60000) / 60) * 5, 75, 5);
  // there's 12 hours each round

}
function setDifference(d, inTest) {
  let showMs = false;
  if (d < 600000 && d > 0 && inTest) {
    timeLeftDisplay.style.color = "red";
    let thing = document.getElementsByClassName('wrap')[0];
    //    document.getElementsByClassName("bottom")[0].style.animation = "0.2s linear 0s infinite normal none running vibrate";
    thing.style.transform = thing.style.mozTransform =
      `translate(${r(-3, 3)}px, ${r(-3, 3)}px) rotate(${r(-1, 1)}deg)`;
    showMs = true;
    document.querySelector(".smoke-img").style.opacity = -d / 1e6 + 1;
  }
  if (d < 0) {
    timeLeftDisplay.innerHTML = "考试已结束！"
    timeLeftDisplay.style.color = "red";
    if (!confettiDone) {
      confettiDone = true;
      confetti();
      setInterval(confetti, 5000);
    }
    let thing = document.getElementsByClassName('wrap')[0];
    thing.style.transform = thing.style.mozTransform = null;
    showMs = true;
    document.querySelector(".smoke-img").style.opacity = 0;
  } else {
    if (inTest) {
      timeLeftDisplay.innerHTML = "剩余时间：" + parseTimeString(d, showMs);
    } else {
      timeLeftDisplay.innerHTML = "考试未开始";
    }
  }
}

function parseTimeString(d, showMs = false) {
  return parseTimeFromNumber(+d, showMs);
}
function parseTimeFromNumber(n, showMs = false) {
  let hour = Math.floor((n % 86400000) / 3600000),
    min = Math.floor((n % 3600000) / 60000),
    sec = Math.floor((n % 60000) / 1000),
    milsec = n % 1000;
  return parseTime(hour, min, sec, milsec, showMs);

}
function parseTime(h, m, s, ms, showMs = false) {
  return (h > 0 ? h + ":" : "") +
    (m < 10 ? "0" + m : m) + ":" +
    (s < 10 ? "0" + s : s) +
    (!showMs ? "" : ("." +
      (ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms)));
}
function r(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

