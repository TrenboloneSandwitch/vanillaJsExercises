const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");
const display = document.querySelector(".display");

function setDate() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  display.innerHTML = `${hours}:${minutes}:${seconds}`;
  secondsHand.style.transform = `rotate(${getHandAngle(60, seconds)}deg)`;
  minutesHand.style.transform = `rotate(${getHandAngle(60, minutes)}deg)`;
  hoursHand.style.transform = `rotate(${getHandAngle(12, hours)}deg)`;
}

function getHandAngle(countInHour, value) {
  let stepAngle = 360 / countInHour;
  return -15 * stepAngle + value * stepAngle;
}

setInterval(setDate, 1000);
