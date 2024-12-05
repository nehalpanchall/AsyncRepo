let display = document.querySelector(".cal-screen");

function passVal(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function total() {
  display.value = eval(display.value);
}
