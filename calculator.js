var a, b;

function setValues() {
    a = Number(document.getElementById("numOne").value);
    b = Number(document.getElementById("numTwo").value);
}

var equals = document.getElementById("answer");

function sum() {
    setValues();
    result = a + b;
    document.getElementById("answer").innerHTML = "The answer is:" + (result);

}

function sub() {
    setValues();
    result = a - b;
    document.getElementById("answer").innerHTML = "The answer is:" + (result);

}

function mult() {
    setValues();
    result = a * b;
    document.getElementById("answer").innerHTML = "The answer is:" + (result);

}

function div() {
    setValues();
    result = a / b;
    document.getElementById("answer").innerHTML = "The answer is:" + (result);
}
