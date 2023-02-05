const clock = document.querySelector("#clock");

function getTime() {
  const date = new Date();
  const Hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${Hour}:${min}:${sec}`;
}

getTime();
setInterval(getTime, 1000);
