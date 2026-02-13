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
    return Math.round(a / b);
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

let result;

let flag = false;

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
    b = parseInt(expression.slice(op + 1,));
    decodedExpression.push(a);
    decodedExpression.push(expression[op]);
    decodedExpression.push(b);
    return decodedExpression;
}

function completeExpression(decodedExpression) {
    let flag = true;
    for (let i = 0; i < decodedExpression.length; i++) {
        if (typeof(decodedExpression[i]) == "undefined" || Number.isNaN(decodedExpression[i])) {
            flag = false;
            break;
        }
    }
    return flag;
}

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
    if (!flag) {
        expression += plus.innerText;
        display.innerText += plus.innerText;
        flag = true;
    } else {
        result = operate(decodeExpression(expression));
        display.innerText = result;
        display.innerText += plus.innerText;
        expression = result.toString();
        expression += plus.innerText;
    }
});

minus.addEventListener("click", () => {
    if (!flag) {
        expression += minus.innerText;
        display.innerText += minus.innerText;
        flag = true;
    } else {
        result = operate(decodeExpression(expression));
        display.innerText = result;
        display.innerText += minus.innerText;
        expression = result.toString();
        expression += minus.innerText;
    }
});

multi.addEventListener("click", () => {
    if (!flag) {
        expression += multi.innerText;
        display.innerText += multi.innerText;
        flag = true;
    } else {
        result = operate(decodeExpression(expression));
        display.innerText = result;
        display.innerText += multi.innerText;
        expression = result.toString();
        expression += multi.innerText;
    }
});

division.addEventListener("click", () => {
    if (!flag) {
        expression += division.innerText;
        display.innerText += division.innerText;
        flag = true;
    } else {
        result = operate(decodeExpression(expression));
        display.innerText = result;
        display.innerText += division.innerText;
        expression = result.toString();
        expression += division.innerText;
    }
});

equal.addEventListener("click", () => {
    let decodedExpression = decodeExpression(expression);
    if (completeExpression(decodedExpression)) {
        result = operate(decodeExpression(expression));
        display.innerText = result;
        flag = false;
    } else {
        display.innerText = '';
        expression = '';
        flag = false;
    }
});

clear.addEventListener("click", () => {
    display.innerText = '';
    expression = '';
    flag = false;
});