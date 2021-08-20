let inputBox1 = document.getElementById("inputBox1");
let inputBox2 = document.getElementById("inputBox2");

let clear = document.getElementById("clear");
let back = document.getElementById("back");
let equals = document.getElementById("Equals");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let left_Bracket = document.getElementById("left_Bracket");
let right_Bracket = document.getElementById("right_Bracket");

add.addEventListener("click", () => {
  add.classList.add("num_button_2");
  setTimeout(() => {
    add.classList.remove("num_button_2");
  }, 2000);
});
function button_click(input) {
  if (input == ".") {
    inputBox2.value += "0" + input;
  } else {
    inputBox2.value += input;
  }
  if (input == "+") {
    add.classList.add("num_button_2");
    setTimeout(() => {
      add.classList.remove("num_button_2");
    }, 2000);
  }
  if (input == "-") {
    subtract.classList.add("num_button_2");
    setTimeout(() => {
      subtract.classList.remove("num_button_2");
    }, 2000);
  }
  if (input == "*") {
    multiply.classList.add("num_button_2");
    setTimeout(() => {
      multiply.classList.remove("num_button_2");
    }, 2000);
  }
  if (input == "/") {
    divide.classList.add("num_button_2");
    setTimeout(() => {
      divide.classList.remove("num_button_2");
    }, 2000);
  }
  if (input == "(") {
    left_Bracket.classList.add("Bracket");
    setTimeout(() => {
      left_Bracket.classList.remove("Bracket");
    }, 1500);
  }
  if (input == ")") {
    right_Bracket.classList.add("Bracket");
    setTimeout(() => {
      right_Bracket.classList.remove("Bracket");
    }, 1500);
  }
}
function EqualsTo() {
  try {
    const result = inputBox2.value;
    let res = eval(result);
    inputBox1.value = result;
    inputBox2.value = res;
  } catch {
    inputBox1.value = "Enter a Valid Expression...";
  }

  equals.classList.add("equals2");
  setTimeout(() => {
    equals.classList.remove("equals2");
  }, 2000);
}
function Clear() {
  inputBox1.value = "";
  inputBox2.value = "";
  clear.classList.add("clear2");
  setTimeout(() => {
    clear.classList.remove("clear2");
  }, 2000);
}
function InputBox1() {
  inputBox2.value = inputBox1.value;
  inputBox1.value = "";
}
function Back() {
  let input2 = inputBox2.value;
  inputBox2.value = input2.substr(0, input2.length - 1);
  back.classList.add("back2");
  setTimeout(() => {
    back.classList.remove("back2");
  }, 2000);
}
