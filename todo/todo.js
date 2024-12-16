let todo_name = document.querySelector("#todo-name");
let todo_date = document.querySelector("#todo-date");
let todo_add = document.querySelector("#todo-add");

todo_add.addEventListener("click", addTodo);

let todoList = [{ todoName: "", todoDate: "" }];

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
    displayMain.innerHTML += `<div>
                <span>${todoList[i].todoName}</span>
                <span>${todoList[i].todoDate}</span>
                ${
                  i != 0
                    ? `<button onclick="deleteTodo('${i}')">Delete</button>`
                    : ""
                }
                
            </div>`;
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}
