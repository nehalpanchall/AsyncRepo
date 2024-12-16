let todo_name = document.querySelector("#todo-name");
let todo_date = document.querySelector("#todo-date");
let todo_add = document.querySelector("#todo-add");

todo_add.addEventListener("click", addTodo);

let todoList = ["Ninja"];
displayTodos();

function addTodo() {
  todoList.push(todo_name.value);

  todo_name.value = "";
  todo_name.focus();

  displayTodos();
}

function displayTodos() {
  let displayMain = document.querySelector("#todo-display");

  displayMain.innerText = "";

  for (let i = 0; i < todoList.length; i++) {
    let div = document.createElement("div");
    div.innerHTML += ` \n ${todoList[i]} 
    <button onclick="deleteTodo('${i}')">Delete</button>`;
    displayMain.appendChild(div);
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}
