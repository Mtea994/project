let current = '0';
let previous = null;
let operator = null;

function updateDisplay() {
 const display = document.querySelector('.display');
 display.textContent = current || '0';
}




function inputNum(num) {
 if (current === '0') {
  current = num;
 } else {
  current += num;
 }  

 updateDisplay();
}

function inputOp(op) {
 if (operator && previous !== null) {
  calculate();
 }
 previous = current;
 operator = op;
 current = '0';
 updateDisplay();
}

function calculate() {
 if (operator && previous !== null) {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  let result;
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
    }
    current = result.toString();
    operator = null;
    previous = null;
    updateDisplay();
 }
}
