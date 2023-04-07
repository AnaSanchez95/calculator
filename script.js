window.addEventListener('load', page);
let number1 = 0;
let number2 = 0;
let operator = '';
let displayValue = '';

function page() {
    let btnAdd = document.getElementById('btn-add');
    let btnSubtract = document.getElementById('btn-subtract');
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

    btnAdd.addEventListener('click', function() {displayValue += '+';showOperate();})
    btnSubtract.addEventListener('click', function() {displayValue += '−';showOperate();});
    btnMultiply.addEventListener('click', function() {displayValue += '×';showOperate();});
    btnDivide.addEventListener('click', function() {displayValue += '÷';showOperate();});

    btnC.addEventListener('click', clearDisplay);
    btnPoint.addEventListener('click', function() {displayValue += '.';showOperate();})
    btnEqual.addEventListener('click', pressEqual);

    btn1.addEventListener('click', function() {displayValue += '1';showOperate();})
    btn2.addEventListener('click', function() {displayValue += '2';showOperate();})
    btn3.addEventListener('click', function() {displayValue += '3';showOperate();})
    btn4.addEventListener('click', function() {displayValue += '4';showOperate();})
    btn5.addEventListener('click', function() {displayValue += '5';showOperate();})
    btn6.addEventListener('click', function() {displayValue += '6';showOperate();})
    btn7.addEventListener('click', function() {displayValue += '7';showOperate();})
    btn8.addEventListener('click', function() {displayValue += '8';showOperate();})
    btn9.addEventListener('click', function() {displayValue += '9';showOperate();})
    btn0.addEventListener('click', function() {displayValue += '0';showOperate();})
    btn00.addEventListener('click', function() {displayValue += '00';showOperate();})
    
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
        case 'percentage': return percentage(number1);break;
        default: 'Error';
    }    
}

function showOperate() {
    let displayOperate = document.getElementById('operate');
    displayOperate.innerText = displayValue;    
}

function showAnswer(answers) {
    let displayAnswer = document.getElementById('answer');
    return displayAnswer.innerText = answers;
}
function saveNumber1() {
    let num = '';
    let flag = false;

    for(let i = 0; i < displayValue.length; i++){

        if(flag === false){
            num = displayValue.charAt(i);
            flag = true;
        }
        else{
            if(displayValue.charAt(i) !== '%' 
            && displayValue.charAt(i) !== '÷'
            && displayValue.charAt(i) !== '×'
            && displayValue.charAt(i) !== '−'
            && displayValue.charAt(i) !== '+'
            && displayValue.charAt(i) !== '=') {
                num += displayValue.charAt(i);
            }
            else{
                break;
            }
        }
    }
    return num;
}

function saveNumber2() {
    let num = '';
    let num2 = '';
    let flag = false;

    for(let i = (displayValue.length-1); i > 0; i--){

        if(flag === false){
            num = displayValue.charAt(i);
            flag = true;
        }
        else{
            if(displayValue.charAt(i) !== '%' 
            && displayValue.charAt(i) !== '÷'
            && displayValue.charAt(i) !== '×'
            && displayValue.charAt(i) !== '−'
            && displayValue.charAt(i) !== '+'
            && displayValue.charAt(i) !== '=') {
                num += displayValue.charAt(i);
            }
            else{
                break;
            }
        }        
    }
    for(let i = num.length; i > 0; i--){
        num2 += num.charAt(i);
    }
    return num2;
}
function saveOperator() {
    let symbol = '';
    for (let i = 0; i < displayValue.length; i++){
        let aux = displayValue.charAt(i);
        switch(aux){
            case '%': symbol = 'percentage';break;
            case '÷': symbol = 'divide';break;
            case '×': symbol = 'multiply';break;
            case '−': symbol = 'subtract';break;
            case '+': symbol = 'add';break;
            default: continue;
        }
    }
    return symbol;    
}

function clearOperate() {
    let displayOperate = document.getElementById('operate');
    displayOperate.innerText = '';
    displayValue = '';
    
}

function clearAnswer() {
    let displayAnswer = document.getElementById('answer');
    displayAnswer.innerText = '';

}

function clearDisplay() {
    clearOperate();
    clearAnswer();
}

function pressEqual(){
    displayValue += '=';showOperate();
    number1 = parseFloat(saveNumber1());
    number2 = parseFloat(saveNumber2());
    operator = saveOperator();
    showAnswer(operate(number1, number2, operator));
}
