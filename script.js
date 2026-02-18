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
            if (b === 0) {
                alert("Error! You can't divide a number by zero!");
                result = 0;
            } else {
                result = divd(a, b);
            }
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

let chain = false;

let consecutive = false;

let newOperation = false;

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

// -----------------------------------------------------

zero.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += zero.innerText;
    display.innerText += zero.innerText;
    consecutive = false;
});

one.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += one.innerText;
    display.innerText += one.innerText;
    consecutive = false;
});

two.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += two.innerText;
    display.innerText += two.innerText;
    consecutive = false;
});

three.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += three.innerText;
    display.innerText += three.innerText;
    consecutive = false;
});

four.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += four.innerText;
    display.innerText += four.innerText;
    consecutive = false;
});

five.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += five.innerText;
    display.innerText += five.innerText;
    consecutive = false;
});

six.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += six.innerText;
    display.innerText += six.innerText;
    consecutive = false;
});

seven.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += seven.innerText;
    display.innerText += seven.innerText;
    consecutive = false;
});

eight.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += eight.innerText;
    display.innerText += eight.innerText;
    consecutive = false;
});

nine.addEventListener("click", () => {
    if (newOperation) {
        display.innerText = '';
        newOperation = false;
    }
    expression += nine.innerText;
    display.innerText += nine.innerText;
    consecutive = false;
});

// -----------------------------------------------------

plus.addEventListener("click", () => {
    if (!chain) {
        if (!consecutive) {
            expression += plus.innerText;
            display.innerText += plus.innerText;
            chain = true;
            consecutive = true;
        }
    } else {
        if (!consecutive) {
            result = operate(decodeExpression(expression));
            display.innerText = result;
            display.innerText += plus.innerText;
            expression = result.toString();
            expression += plus.innerText;
            consecutive = true;
        }
    }
});

minus.addEventListener("click", () => {
    if (!chain) {
        if (!consecutive) {
            expression += minus.innerText;
            display.innerText += minus.innerText;
            chain = true;
            consecutive = true;
        }
    } else {
        if (!consecutive) {
            result = operate(decodeExpression(expression));
            display.innerText = result;
            display.innerText += minus.innerText;
            expression = result.toString();
            expression += minus.innerText;
            consecutive = true;
        }
    }
});

multi.addEventListener("click", () => {
    if (!chain) {
        if (!consecutive) {
            expression += multi.innerText;
            display.innerText += multi.innerText;
            chain = true;
            consecutive = true;
        }
    } else {
        if (!consecutive) {
            result = operate(decodeExpression(expression));
            display.innerText = result;
            display.innerText += multi.innerText;
            expression = result.toString();
            expression += multi.innerText;
            consecutive = true;
        }
    }
});

division.addEventListener("click", () => {
    if (!chain) {
        if (!consecutive) {
            expression += division.innerText;
            display.innerText += division.innerText;
            chain = true;
            consecutive = true;
        }
    } else {
        if (!consecutive) {
            result = operate(decodeExpression(expression));
            display.innerText = result;
            display.innerText += division.innerText;
            expression = result.toString();
            expression += division.innerText;
            consecutive = true;
        }
    }
});

equal.addEventListener("click", () => {
    let decodedExpression = decodeExpression(expression);
    if (completeExpression(decodedExpression)) {
        result = operate(decodeExpression(expression));
        display.innerText = result;
        chain = false;
        consecutive = false;
        expression = '';
        newOperation = true;
    } else {
        display.innerText = '';
        expression = '';
        chain = false;
        consecutive = false;
    }
});

clear.addEventListener("click", () => {
    display.innerText = '';
    expression = '';
    chain = false;
    consecutive = false;
});