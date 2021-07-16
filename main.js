function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

let buttons = document.querySelectorAll(".numbers");
let functions = document.querySelectorAll(".functions");
let calcDisplay = document.querySelector("#calculations");
let currentValue = "0";
let lastValue = "";

buttons.forEach((e) => {
    e.addEventListener(("click"), () => {
        if (!lastValue) {
            if (currentValue[0] === "0") {
                currentValue = currentValue.slice(1, 1);
                calcDisplay.textContent = currentValue;
            }
            currentValue = currentValue + `${e.textContent}`;
            calcDisplay.textContent = currentValue;
        } else {

        }
    })
})

functions.forEach((e) => {
    e.addEventListener(("click"), () => {

        if (e.textContent === "AC") {
            currentValue = "0";
            calcDisplay.textContent = currentValue;

        } else if (e.textContent === "DEL") {
            if (currentValue.length > 1) {
                currentValue= currentValue.slice(0, -1);
                calcDisplay.textContent = currentValue;
            } else {
                currentValue = "0";
                calcDisplay.textContent = currentValue;
            }
        }
    })
})
