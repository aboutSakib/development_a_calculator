function gethistory() {
  return document.getElementById("history_value").innerText;
}
function printHistory(num) {
  return (document.getElementById("history_value").innerText = num);
}
function getOutput() {
  return document.getElementById("output_value").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output_value").innerText = num;
  } else {
    document.getElementById("output_value").innerText = formateNumber(num);
  }
}

function formateNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

let history;
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    history = gethistory();
    history += this.id;
    printHistory(history);
  });
}

function localNumber(num) {
  return Number(num.replace(/,/g, ""));
}

let operator = document.getElementsByClassName("operator");

for (let i = 0; i < number.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      history = gethistory();
      history = history.substr(0, history.length - 1);
      printHistory(history);
      printOutput("");
    } else if (this.id == "equal") {
      history = gethistory();
      let result = eval(history);
      if (result.toString().length <= 15) {
        printOutput(result);
        printHistory(history);
      } else {
        alert("this is to Much for this little Calculator");
      }
    } else {
      let output = getOutput();
      history = gethistory();
      if (output) {
        history = localNumber(output) + this.id;
        printHistory(history);
      } else if (history == "") {
        printHistory("");
      } else if (isNaN(history[history.length - 1])) {
        history = history.substr(0, history.length - 1) + this.id;
        printHistory(history);
      } else {
        history += this.id;
        printHistory(history);
      }
    }
  });
}
