console.group("CountDown (Contador) Pro | Javascript Vanilla");
// === Variables ===
const dayEl = document.getElementById(`days`);
const hourEl = document.getElementById(`hours`);
const minsEl = document.getElementById(`mins`);
const secondsEl = document.getElementById(`seconds`);

const newYears = `1 Jan 2022`;
// ===========================>>>
countdown = () => {
  //(B)
  const newYearDate = new Date(newYears).getTime();
  const currentDate = new Date().getTime();
  // current(Actual)>
  //console.log(newYearDate); = Ver el transcurrir del tiempo>>
  //console.log(currentDate);

  // (A)
  const totalSeconds = (newYearDate - currentDate) / 1000;

  // 1000 Milisegundos en un segundo >>
  // 3600 Milisegundo que tiene un día.
  // 1440 min = day.
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
// 1000 = Temporizador (ejecutar)>>>
setInterval(countdown, 1000);

console.groupEnd();
