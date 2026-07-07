let display = document.getElementById("display");

function add(value) {
  display.value = display.value + value;
}

function del() {
  display.value = display.value.slice(0, -1);
}

function resetCalc() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}

let themeSlider = document.getElementById("themeSlider");
let body = document.body;

themeSlider.oninput = function () {

  if (themeSlider.value == 1) {
    body.className = "theme-1";
  }

  else if (themeSlider.value == 2) {
    body.className = "theme-2";
  }

  else if (themeSlider.value == 3) {
    body.className = "theme-3";
  }

};