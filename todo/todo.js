let todo_name = document.querySelector("#todo-name");
let todo_date = document.querySelector("#todo-date");
let todo_add = document.querySelector("#todo-add");

todo_add.addEventListener("click", addTodo);

let todoList = [{ todoName: "Ninja", todoDate: "2024-12-16" }];

displayTodos();

function addTodo() {
  todoList.push({ todoName: todo_name.value, todoDate: todo_date.value });

  todo_name.value = "";
  todo_date.value = "";
  todo_name.focus();

  displayTodos();
}

function displayTodos() {
  let displayMain = document.querySelector("#todo-display");

  displayMain.innerText = "";

  for (let i = 0; i < todoList.length; i++) {
    let div = document.createElement("div");
    div.innerHTML += ` \n ${todoList[i].todoName}     ${todoList[i].todoDate} 
    <button onclick="deleteTodo('${i}')">Delete</button>`;
    displayMain.appendChild(div);
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}
