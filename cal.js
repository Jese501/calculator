const result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    if (result.value && !/[\+\-\*\/]$/.test(result.value)) {
        result.value += operator;
    }
}

function clearDisplay() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
