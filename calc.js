function addition() {
    let firstNumber = Number(document.getElementById("first-number").value);
    let secondNumber = Number(document.getElementById("second-number").value);

    let result = ""
    if (firstNumber == "" || secondNumber==""){
        result = "No input(s)";
    }
    else{
        result = firstNumber + secondNumber;
    }

    document.getElementById("output").innerHTML = result;
}

function subtraction() {
    let firstNumber = Number(document.getElementById("first-number").value);
    let secondNumber = Number(document.getElementById("second-number").value);

    let result = ""
    if (firstNumber == "" || secondNumber==""){
        result = "No input(s)";
    }
    else{
        result = firstNumber - secondNumber;
    }
    document.getElementById("output").innerHTML = result;
}

function multiplication() {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;

    let result = ""
    if (firstNumber == "" || secondNumber==""){
        result = "No input(s)";
    }
    else{
        result = firstNumber * secondNumber;
    }

    document.getElementById("output").innerHTML = result;
}

function division() {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;

    let result = "";
    if (firstNumber === "" || secondNumber===""){
        document.getElementById("output").innerHTML = "No input(s)";
    }
    else if(Number(secondNumber) === 0) {
        document.getElementById("output").innerHTML = "Undefined";
    } else {
        firstNumber=Number(firstNumber);
        secondNumber=Number(secondNumber);
        result = firstNumber / secondNumber;
        document.getElementById("output").innerHTML = result;
    }
}

function power() {
    let firstNumber = Number(document.getElementById("first-number").value);
    let secondNumber = Number(document.getElementById("second-number").value);

    let result = ""
    if (firstNumber == "" || secondNumber==""){
        result = "No input(s)";
    }
    else{
        result = 1;
        for (let i = 0; i<secondNumber; i++) {
            result = result * firstNumber;
        }
    }

    document.getElementById("output").innerHTML = result;
}

function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}
