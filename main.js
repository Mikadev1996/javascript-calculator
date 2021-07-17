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

let buttons = document.querySelectorAll(".numbers");
let functions = document.querySelectorAll(".functions");
let calcDisplay = document.querySelector("#calculations");
let firstValue = "";
let symbol = "";
let secondValue = "";

buttons.forEach((e) => {
    e.addEventListener(("click"), () => {
        if (symbol === "") {
            if (firstValue === "NaN" || firstValue === "Infinity") {
                firstValue = "";
            }

            else if (firstValue[0] === "0") {
                firstValue = firstValue.slice(0, 0);
            }
            firstValue = firstValue + e.textContent
            calcDisplay.textContent = firstValue;

        } else {
            secondValue = secondValue + e.textContent;
            calcDisplay.textContent = firstValue + symbol + secondValue;
        }
    })
})

functions.forEach((e) => {
    e.addEventListener(("click"), () => {
        if (e.textContent === "AC") {
            firstValue = "0";
            secondValue = "";
            symbol = "";
            calcDisplay.textContent = firstValue;

        }
        else if (e.textContent === "DEL") {
            if (firstValue === "NaN" || firstValue === "Infinity") {
                console.log("nan",firstValue + symbol + secondValue)
                firstValue = "0";
                secondValue = "";
                symbol = "";
                calcDisplay.textContent = firstValue;
            }

            else if ((firstValue.length > 1) || (secondValue) || (symbol)) {
                if (!symbol && !secondValue) {
                    console.log("!symbol && !secondvalue",firstValue + symbol + secondValue)
                    firstValue = firstValue.slice(0, -1);
                    calcDisplay.textContent = firstValue;
                } else if (!secondValue) {
                    console.log("!secondvalue",firstValue + symbol + secondValue)
                    symbol= symbol.slice(0, -1);
                    calcDisplay.textContent = firstValue + symbol;
                } else {
                    console.log("else ",firstValue + symbol + secondValue)
                    secondValue = secondValue.slice(0, -1);
                    calcDisplay.textContent = firstValue + symbol + secondValue;
                }
            }

            else {
                console.log(firstValue + " " + symbol + " " + secondValue)
                firstValue = "0";
                calcDisplay.textContent = firstValue;
            }
        }

        else if (e.textContent === "=") {
            operate(e.textContent);
        }

        else {
            operate(e.textContent);
            secondValue = "";
            symbol = e.textContent;
            calcDisplay.textContent = firstValue + symbol;

        }
    })
})

function operate() {
    if (symbol === "+") {
        calcDisplay.textContent = add(parseFloat(firstValue), parseFloat(secondValue));
        firstValue = calcDisplay.textContent;
        secondValue = "";
        symbol = "";

    }
    else if (symbol === "×") {
        calcDisplay.textContent = multiply(parseFloat(firstValue), parseFloat(secondValue));
        firstValue = calcDisplay.textContent;
        secondValue = "";
        symbol = "";
    }
    else if (symbol === "÷") {
        calcDisplay.textContent = divide(parseFloat(firstValue), parseFloat(secondValue));
        firstValue = calcDisplay.textContent;
        secondValue = "";
        symbol = "";
    }
    else if (symbol === "-") {
        calcDisplay.textContent = subtract(parseFloat(firstValue), parseFloat(secondValue));
        firstValue = calcDisplay.textContent;
        secondValue = "";
        symbol = "";
    }
}