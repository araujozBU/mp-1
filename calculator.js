function displayResult(result) {
    let output = document.getElementById("output");
    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}

function addition() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    displayResult(first + second);
}

function subtraction() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    displayResult(first - second);
}

function multiplication() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    displayResult(first * second);
}

function division() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);

    if (second === 0) {
        displayResult("Cannot divide by zero.");
    } else {
        displayResult(first / second);
    }
}

function power() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = 1;
    let exponent = second;

    if (second % 1 !== 0) {
        displayResult("Please use a whole number exponent.");
        return;
    }

    if (first === 0 && second < 0) {
        displayResult("Cannot divide by zero.");
        return;
    }

    if (second < 0) {
        exponent = -second;
    }

    for (let i = 0; i < exponent; i = i + 1) {
        result = result * first;
    }

    if (second < 0) {
        result = 1 / result;
    }

    displayResult(result);
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "";
}
