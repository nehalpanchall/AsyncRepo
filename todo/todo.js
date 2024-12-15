let todo_name = document.querySelector("#todo-name");
let todo_date = document.querySelector("#todo-date");
let todo_add = document.querySelector("#todo-add");

todo_add.addEventListener("click", addTodo);

function addTodo() {
  let todo_display_div = document.querySelector("#todo-display");
  let div = document.createElement("div");
  div.innerHTML = todo_name.value;
  todo_display_div.appendChild(div);

  todo_name.value = "";
  todo_name.focus();
  todo_display_div.style = "margin-top: 20px";
  div.style = "margin: 10px 0px";
}
