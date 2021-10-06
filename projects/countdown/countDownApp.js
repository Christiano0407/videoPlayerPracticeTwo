console.group("CountDown (Contador) Pro | Javascript Vanilla");
// === Variables ===
const dayEl = document.getElementById(`days`);
const hourEl = document.getElementById(`hours`);
const minsEl = document.getElementById(`mins`);
const secondsEl = document.getElementById(`seconds`);

const newYears = `7 Oct 2021`;
// ===========================>>>
countdown = () => {
  //(B)
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  // (A)
  const totalSeconds = (newYearDate - currentDate) / 1000;

  // (C)
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  //(D)
  dayEl.innerHTML = days;
  hourEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

  //(E)
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
};

countdown();

//(F)
setInterval(countdown, 1000);

console.groupEnd();
