let buttons = document.querySelectorAll(".numbers");
let functions = document.querySelectorAll(".functions");
let calcDisplay = document.querySelector("#calculations");

let firstValue = "";
let secondValue = "";
let symbol = "";
let displayText = "0";

function add(a, b) {
    if (Number.isInteger(a + b)) {
        return (a + b).toFixed(0);
    } else {
        return (a + b).toFixed(2);
    }
}
function subtract(a, b) {
    if (Number.isInteger(a - b)) {
        return (a - b).toFixed(0);
    } else {
        return (a - b).toFixed(2);
    }
}
function multiply(a, b) {
    if (Number.isInteger(a*b)) {
        return (a*b).toFixed(0);
    } else {
        return (a*b).toFixed(2);
    }
}

function divide(a, b) {
    if (Number.isInteger(a / b)) {
        return (a / b).toFixed(0);
    } else {
        return (a / b).toFixed(2);
    }
}

function clearDisplay() {
    firstValue = "";
    secondValue = "";
    symbol = "";
    displayText = "0";
    calcDisplay.textContent = displayText;
}

buttons.forEach((e) => {
    e.addEventListener(("click"), () => {
        useNumber(e.textContent);
    });
});

functions.forEach((e) => {
    e.addEventListener(("click"), () => {
        useSymbols(e.textContent);
    });
});

window.addEventListener("keydown", (e) => {
    if (e.key >= 0 || e.key <=9 || e.key === ".") {
        useNumber(e.key)
    }
    else if (e.key === "Escape") {
        clearDisplay()
    }
    else if (e.key === "Backspace") {
        useSymbols("DEL");
    }
    switch (e.key) {
        case "*":
            useSymbols("×");
            break;
        case "=":
            useSymbols("=");
            break;
        case "Enter":
            useSymbols("=");
            break;
        case "/":
            useSymbols("÷");
            break;
        case "+":
            useSymbols("+");
            break;
        case "-":
            useSymbols("-");
            break;
    }

})



function useNumber(inputNumber) {
    if (symbol === "") {
        if (displayText[0] === "0") {
            displayText = displayText.slice(0, 0);
        }

        firstValue += inputNumber;
        displayText = firstValue + symbol + secondValue;
        calcDisplay.textContent = displayText;

    } else {
        secondValue += inputNumber
        displayText = firstValue + symbol + secondValue;
        calcDisplay.textContent = displayText;
    }
}

function useSymbols(inputSymbol)   {
    if (inputSymbol === "AC") {
       clearDisplay();

    }
    else if (inputSymbol === "DEL") {
        if (firstValue === "NaN" || firstValue === "Infinity") {
            clearDisplay();
        }

        else if (displayText.length > 1) {
            if (!symbol && !secondValue) {
                firstValue = firstValue.slice(0, -1);
                displayText = firstValue + symbol + secondValue;
                calcDisplay.textContent = displayText;
            }
            else if (!secondValue) {
                symbol = "";
                displayText = firstValue + symbol + secondValue;
                calcDisplay.textContent = displayText;
            }
            else {
                secondValue = secondValue.slice(0, -1);
                displayText = firstValue + symbol + secondValue;
                calcDisplay.textContent = displayText;
            }
        }
        else {
            clearDisplay();
        }
    }

    else if (inputSymbol === "=") {
        operate(inputSymbol);
    }

    else {
        operate(inputSymbol);
        secondValue = "";
        symbol = inputSymbol;
        displayText = firstValue + symbol;
        calcDisplay.textContent = displayText;

    }
}

function operate() {
    if (symbol === "+") {
        calcDisplay.textContent = add(parseFloat(firstValue), parseFloat(secondValue));
        firstValue = calcDisplay.textContent;
        displayText = firstValue;
        secondValue = "";
        symbol = "";
    }
    else if (symbol === "×") {
        calcDisplay.textContent = multiply(parseFloat(firstValue), parseFloat(secondValue));
        firstValue = calcDisplay.textContent;
        displayText = firstValue;
        secondValue = "";
        symbol = "";
    }
    else if (symbol === "÷") {
        calcDisplay.textContent = divide(parseFloat(firstValue), parseFloat(secondValue));
        firstValue = calcDisplay.textContent;
        displayText = firstValue;
        secondValue = "";
        symbol = "";
    }
    else if (symbol === "-") {
        calcDisplay.textContent = subtract(parseFloat(firstValue), parseFloat(secondValue));
        firstValue = calcDisplay.textContent;
        displayText = firstValue;
        secondValue = "";
        symbol = "";
    }
}
