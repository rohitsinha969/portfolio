let currTotal = 0;
let bufferValue = "0";
let previousOperation;

const screen = document.querySelector('.output-screen');

// function buttonClick(value) {
//     if (isNaN(value)) {
//         handleSymbol(value);
//     } else {
//         handleNumber(value);
//     }
//     screen.innerText = bufferValue;
// }

function buttonClick(value) {
    const trimmedValue = value.trim().toUpperCase();

    if (isNaN(trimmedValue)) {
        handleSymbol(trimmedValue);
    } else {
        handleNumber(trimmedValue);
    }
    screen.innerText = bufferValue;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            bufferValue = '0';
            currTotal = 0;
            break;
        case '=':
            if (previousOperation == null) {
                return;
            }
            flushOperation(parseInt(bufferValue));
            previousOperation = null;
            bufferValue = currTotal;
            currTotal = 0;
            break;
        case '←':
            if (bufferValue.length === 1) {
                bufferValue = '0';
            } else {
                bufferValue = bufferValue.substring(0, bufferValue.length - 1);
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
        case '.':
            // Handle the decimal point
            if (bufferValue.indexOf('.') === -1) {
                bufferValue += '.';
            }
            break;
    }
}
function handleMath(symbol) {
    if (bufferValue === '0') {
        return;
    }

    const intBufferVal = parseInt(bufferValue);

    if (currTotal === 0) {
        currTotal = intBufferVal;
    } else {
        flushOperation(intBufferVal);
    }
    previousOperation = symbol;
    bufferValue = '0';
}

function flushOperation(intBufferVal) {
    if (previousOperation === '+') {
        currTotal += intBufferVal;
    } else if (previousOperation === '-') {
        currTotal -= intBufferVal;
    } else if (previousOperation === '×') {
        currTotal *= intBufferVal;
    } else if (previousOperation === '÷') {
        currTotal /= intBufferVal;
    } else {
        currTotal = intBufferVal;
    }
}

function handleNumber(numberString) {
    if (bufferValue === "0") {
        bufferValue = numberString;
    } else {
        bufferValue += numberString;
    }
}

function init() {
    document.querySelector('.calc-buttons-container').addEventListener('click', function (event) {
        buttonClick(event.target.innerText);
    })
}

init();