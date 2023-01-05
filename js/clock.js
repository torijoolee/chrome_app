(() => {
  const clockElem = document.querySelector("#clock");

  function timeClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clockElem.innerText = `${hours}:${minutes}:${seconds}`;
  }

  timeClock(); //즉시실행
  setInterval(timeClock, 1000);
})();
