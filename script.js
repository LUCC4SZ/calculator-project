function add(a, b) {
    return a + b;
}

function subs(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function divd(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subs(a, b);
            break;
        case "*":
            mult(a, b);
            break;
        case "/":
            divd(a, b);
            break;
        default:
            console.log("Invalid operator");
            break;
    }
}