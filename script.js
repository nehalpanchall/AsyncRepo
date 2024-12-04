let count = document.getElementById("count").innerHTML;

function add() {
  count++;
  document.querySelector("#count").innerHTML = count;
}

function move() {
  if (count >= 1) {
    count--;
    document.querySelector("#count").innerHTML = count;
  }
}

function sale() {
  count = count + 2;
  document.querySelector("#count").innerHTML = count;
}
