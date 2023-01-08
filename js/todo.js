const todoForm = document.querySelector("#todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");

let toDos = [];

// toDos in localstorage
function todosInLocal() {
  localStorage.setItem("todoList", JSON.stringify(toDos));
}

//delete target todo item
function deleteTodoItem(event) {
  const liTextItems = event.target.parentNode;
  liTextItems.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(liTextItems.id));
  todosInLocal();
}

// show todo Text
function paintTodo(todoText) {
  const liTextItems = document.createElement("li");
  liTextItems.id = todoText.id;
  const spanTextItem = document.createElement("span");
  spanTextItem.innerText = `${todoText.text}`;
  const btnTextItem = document.createElement("button");
  btnTextItem.innerText = "❌";
  liTextItems.appendChild(spanTextItem);
  liTextItems.appendChild(btnTextItem);
  liTextItems.addEventListener("click", deleteTodoItem);
  todoList.appendChild(liTextItems);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoText = todoInput.value;
  todoInput.value = "";
  const todoTextObj = {
    text: todoText,
    id: Date.now(),
  };
  toDos.push(todoTextObj);
  paintTodo(todoTextObj);
  todosInLocal();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const tosaveToDos = localStorage.getItem("todoList");
if (tosaveToDos) {
  const parseTodos = JSON.parse(tosaveToDos);
  toDos = parseTodos;
  parseTodos.forEach(paintTodo);
}
