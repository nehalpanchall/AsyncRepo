let todo_name = document.querySelector("#todo-name");
let todo_date = document.querySelector("#todo-date");
let todo_add = document.querySelector("#todo-add");

todo_add.addEventListener("click", addTodo);

// ["Nehal","Pintu","Ninja"] : Length: 3

let todoName = [];
let todoDate = [];

function addTodo() {
  let todo_display_div = document.querySelector("#todo-display");
  let div = document.createElement("div");

  todoName.push(todo_name.value);
  todoDate.push(todo_date.value);

  let spanName = document.createElement("span");
  let spanDate = document.createElement("span");

  for (let i = 0; i < todoName.length; i++) {
    spanName.innerHTML = todoName[i];
  }

  for (let i = 0; i < todoDate.length; i++) {
    spanDate.innerHTML = todoDate[i];
  }

  div.appendChild(spanName);
  div.appendChild(spanDate);
  todo_display_div.appendChild(div);

  // Styling part
  todo_name.value = "";
  todo_date.value = "";
  todo_name.focus();
  todo_display_div.style = "margin-top: 20px";
  div.style = "margin: 10px 0px";
}
