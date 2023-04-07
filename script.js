window.addEventListener('load', page);
let number1 = 0;
let number2 = 0;
let operator = '';
let displayValue = '';

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
    if (b !== 0) {
        return a / b;
    }
    else{
        return "You can't divide by 0";
    }
}

function percentage(a) {
    return a / 100;
}

function operate(number1, number2, operator) {
    switch(operator) {
        case 'add': return add(number1, number2);break;
        case 'subtract': return subtract(number1, number2);break;
        case 'multiply': return multiply(number1, number2); break;
        case 'divide': return divide(number1, number2);break;
        default: 'Error';
    }    
}

function showOperate(operations) {
    let displayOperate = document.getElementById('operate');
    displayOperate.innerText = operations;    
}

function showAnswer(answers) {
    let displayAnswer = document.getElementById('answer');
    return displayAnswer.innerText = answers;
}