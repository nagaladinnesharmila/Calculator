let displayValue = '';
let currentOperation = null;
let firstOperand = null;
let secondOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '';
}

function calculate() {
    if (currentOperation === null || displayValue === '') {
        return;
    }
    secondOperand = parseFloat(displayValue);
    let result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error';
            } else {
                result = firstOperand / secondOperand;
            }
            break;
    }
    displayValue = result.toString();
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}