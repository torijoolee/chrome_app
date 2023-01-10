(() => {
  const userForm = document.querySelector("#user__form");
  const userInput = document.querySelector(".user__input");
  const userGreeting = document.querySelector("#greeting");
  const todoForm = document.querySelector("#todo__form");

  function userSubmitHandle(event) {
    event.preventDefault();
    userForm.classList.add("hidden");
    const usernameInput = userInput.value;
    localStorage.setItem("username", userInput.value);
    paintGreeting(usernameInput);
  }
  userForm.addEventListener("submit", userSubmitHandle);

  // 사용자 이름 화면에 남기기
  function paintGreeting(usernameInput) {
    userGreeting.innerText = `hello ${usernameInput}`;
    userGreeting.classList.remove("hidden");
    todoForm.classList.remove("hidden");
  }
  const localUsername = localStorage.getItem("username");
  if (localUsername === null) {
    userForm.classList.remove("hidden");
    userForm.addEventListener("submit", userSubmitHandle);
  } else {
    //username있다면 폼에 히든클래스 추가 폼을 숨긴다.
    //h1에 이름이 보이도록 한다.
    paintGreeting(localUsername);
  }
})();
