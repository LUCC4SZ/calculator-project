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

function operate(decodedExpression) {
    let a = decodedExpression[0];
    let operator = decodedExpression[1];
    let b = decodedExpression[2];
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subs(a, b);
            break;
        case "*":
            result = mult(a, b);
            break;
        case "/":
            result = divd(a, b);
            break;
    }
    return result;
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const operators = ["+", "-", "*", "/"];

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

let expression = '';

zero.addEventListener("click", () => {
    expression += zero.innerText;
    display.innerText += zero.innerText;
});

one.addEventListener("click", () => {
    expression += one.innerText;
    display.innerText += one.innerText;
});

two.addEventListener("click", () => {
    expression += two.innerText;
    display.innerText += two.innerText;
});

three.addEventListener("click", () => {
    expression += three.innerText;
    display.innerText += three.innerText;
});

four.addEventListener("click", () => {
    expression += four.innerText;
    display.innerText += four.innerText;
});

five.addEventListener("click", () => {
    expression += five.innerText;
    display.innerText += five.innerText;
});

six.addEventListener("click", () => {
    expression += six.innerText;
    display.innerText += six.innerText;
});

seven.addEventListener("click", () => {
    expression += seven.innerText;
    display.innerText += seven.innerText;
});

eight.addEventListener("click", () => {
    expression += eight.innerText;
    display.innerText += eight.innerText;
});

nine.addEventListener("click", () => {
    expression += nine.innerText;
    display.innerText += nine.innerText;
});

plus.addEventListener("click", () => {
    expression += plus.innerText;
    display.innerText += plus.innerText;
});

minus.addEventListener("click", () => {
    expression += minus.innerText;
    display.innerText += minus.innerText;
});

multi.addEventListener("click", () => {
    expression += multi.innerText;
    display.innerText += multi.innerText;
});

division.addEventListener("click", () => {
    expression += division.innerText;
    display.innerText += division.innerText;
});

function decodeExpression(expression) {
    let decodedExpression = [];
    let op, a, b;
    for (let i = 0; i < expression.length; i++) {
        if (operators.includes(expression[i])){
            op = i;
            break;
        }
    }
    a = parseInt(expression.slice(0, op));
    decodedExpression.push(a);
    decodedExpression.push(expression[op]);
    b = parseInt(expression.slice(op + 1,));
    decodedExpression.push(b);
    return decodedExpression;
}

equal.addEventListener("click", () => {
    let result = operate(decodeExpression(expression));
    display.innerText = result;
});

clear.addEventListener("click", () => {
    display.innerText = ''
    expression = '';
});