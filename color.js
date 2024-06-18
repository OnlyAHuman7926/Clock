let startHue = Math.random() * 360;
let endHue = (startHue + (Math.random() * 45 + 45) * (Math.random() > 0.5 ? 1 : -1));
let brightness = Math.random() * 15 + 55;

document.querySelector(".sidebar").style.background = `linear-gradient(180deg, hsl(${startHue}, 100%, ${brightness}%), hsl(${endHue}, 100%, ${brightness}%)`;