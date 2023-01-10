(() => {
  const dateElem = document.querySelector("#date");

  function dateToday() {
    const currentDate = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
    });

    dateElem.innerText = `${currentDate}`;
  }

  dateToday();
})();
