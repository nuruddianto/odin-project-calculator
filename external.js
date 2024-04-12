let buttonNumbers = document.querySelectorAll(".number");
let buttonOperators = document.querySelectorAll(".operator");
let display = document.getElementById("display");

let result = 0;
let currOperand = "";
let currOperator = "";

buttonNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    if(button.textContent === 'AC') {
        reset();
        display.textContent = result;
        return;
    }

    if(currOperator !== '') {
        currOperand = button.textContent;
    } else {

        if(button.textContent === '.') {
            if(currOperand == '') return;
            if(currOperand.includes('.')) return;
        } 
        currOperand += button.textContent;
    }
    
    display.textContent = currOperand;
  });
});

buttonOperators.forEach((button) => {
  button.addEventListener("click", () => {
    if (currOperand === "") return;
    let operator = button.textContent;
    if(currOperator === '' && operator !== '=' ) {
        currOperator = operator;
        result = parseFloat(currOperand);
        currOperand = '';
        return;
    }

    operate();
    if(operate === '=') {
        reset();
    } else {
        currOperator = operator;
    }
    display.textContent = result;
  });
});

function operate() {``
  switch (currOperator) {
    case "+":
      result += parseFloat(currOperand);
      break;
    case "-":
      result -= parseFloat(currOperand);
      break;
    case "/":
      result /= parseFloat(currOperand);
      break;
    case "x":
      result *= parseFloat(currOperand);
      break;
    case "=":
      break;
    default:
      alert("Unknown operator");
  }
}

function reset() {
  result = 0;
  currOperand = "";
  currOperator = "";
}
