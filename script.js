window.addEventListener('load', page);

function page() {
    let btnAdd = document.getElementById('btn-add');
    let btnAdSubtract = document.getElementById('btn-subtract');
    let btnMultiply = document.getElementById('btn-multiply');
    let btnDivide = document.getElementById('btn-divide');
    let btnPercentage = document.getElementById('btn-percentage');

    let btnC = document.getElementById('btn-c');
    let btnDel = document.getElementById('btn-del');
    let btnPoint = document.getElementById('btn-point');
    let btnEqual = document.getElementById('btn-equal');

    let btn1 = document.getElementById('btn-1');
    let btn2 = document.getElementById('btn-2');
    let btn3 = document.getElementById('btn-3');
    let btn4 = document.getElementById('btn-4');
    let btn5 = document.getElementById('btn-5');
    let btn6 = document.getElementById('btn-6');
    let btn7 = document.getElementById('btn-7');
    let btn8 = document.getElementById('btn-8');
    let btn9 = document.getElementById('btn-9');
    let btn0 = document.getElementById('btn-0');
    let btn00 = document.getElementById('btn-00');
}

function show(operations) {
    let screen = document.getElementById('screen');
    screen.innerText(operations);    
}

function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
