const todoForm = document.querySelector("#todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");

//delete target todo item
function deleteTodoItem(event) {
  const targetTodoItem = event.target.parentNode;
  targetTodoItem.remove();
}

// show todo Text
function paintTodo(todoText) {
  const liTextItems = document.createElement("li");
  const spanTextItem = document.createElement("span");
  spanTextItem.innerText = `${todoText}`;
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
  paintTodo(todoText);
}

todoForm.addEventListener("submit", handleTodoSubmit);
