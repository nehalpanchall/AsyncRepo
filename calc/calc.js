let display = document.querySelector(".cal-screen");

let passVal = (val) => {
  display.value += val;
};

let clearDisplay = () => {
  display.value = "";
};

let total = () => {
  display.value = eval(display.value);
};
