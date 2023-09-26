let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
    }
    document.getElementById('display').textContent += value;
    currentInput += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
    currentInput = '';
    resultDisplayed = false;
}

function calculateResult() {
    let result;
    try {
        result = eval(currentInput);
        document.getElementById('display').textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
        currentInput = '';
        resultDisplayed = true;
    }
}
