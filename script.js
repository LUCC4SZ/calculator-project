function add(a, b) {
    return a + b;
};

function subs(a, b) {
    return a - b;
};

function mult(a, b) {
    return a * b;
};

function divd(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subs(a, b);
        case "*":
            return mult(a, b);
        case "/":
            return divd(a, b);
    }
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const operators = ["+", "-", "*", "/", "="];

const display = document.getElementById("display");

// Get numbers

const zero = document.getElementById("zero");

const one = document.getElementById("one");

const two = document.getElementById("two");

const three = document.getElementById("three");

const four = document.getElementById("four");

const five = document.getElementById("five");

const six = document.getElementById("six");

const seven = document.getElementById("seven");

const eight = document.getElementById("eight");

const nine = document.getElementById("nine");

// Get operators

const plus = document.getElementById("plus");

const minus = document.getElementById("minus");

const multi = document.getElementById("multi");

const division = document.getElementById("division");

const clear = document.getElementById("clear");

const equal = document.getElementById("equal");

// -----------------------------------------------------

let expresion = '';

seven.addEventListener("click", () => {
    expresion += seven.innerText;
    display.innerText += seven.innerText;
});

eight.addEventListener("click", () => {
    expresion += eight.innerText;
    display.innerText += eight.innerText;
});

plus.addEventListener("click", () => {
    expresion += plus.innerText;
    display.innerText += plus.innerText;
});

equal.addEventListener("click", () => {
    console.log(expresion);
    display.innerText = getNumber(expresion);
});

clear.addEventListener("click", () => {
    display.innerText = ''
    expresion = '';
});

function app() {
    console.log("Probando");
};

app();