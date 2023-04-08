window.addEventListener('load', page);
let arrayDisplay = [];
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

    btnAdd.addEventListener('click', pressAdd)
    btnSubtract.addEventListener('click', pressSubtract);
    btnMultiply.addEventListener('click', pressMultiply);
    btnDivide.addEventListener('click', pressDivide);
    btnPercentage.addEventListener('click', presPercentage);

    btnC.addEventListener('click', clearDisplay);
    btnDel.addEventListener('click', pressDel)
    btnPoint.addEventListener('click', pressPoint);
    btnEqual.addEventListener('click', pressEqual);    

    btn1.addEventListener('click', press1);
    btn2.addEventListener('click', press2);
    btn3.addEventListener('click', press3);
    btn4.addEventListener('click', press4);
    btn5.addEventListener('click', press5);
    btn6.addEventListener('click', press6);
    btn7.addEventListener('click', press7);
    btn8.addEventListener('click', press8);
    btn9.addEventListener('click', press9);
    btn0.addEventListener('click', press0);
    btn00.addEventListener('click', press00);
    
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
        case '+': return add(number1, number2);break;
        case '−': return subtract(number1, number2);break;
        case '×': return multiply(number1, number2); break;
        case '÷': return divide(number1, number2);break;
        case '%': return percentage(number1);break;
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

function saveNumbers() {
    let arrayNumbers = [];
    let newIndex = 0;
    let flag = false;

    for (i = 0; i < arrayDisplay.length; i++){
        let aux = arrayDisplay[i];    

        if (flag === false){
            arrayNumbers[newIndex] = aux;
            flag = true;           
        }
        else {
            if(aux !== '%' && aux !== '÷' && aux !== '×'
            && aux !== '−' && aux !== '+' && aux !== '='){
                arrayNumbers[newIndex] += aux;                                
            }
            else {
                newIndex++;
                arrayNumbers[newIndex] = aux;
                newIndex++;
                flag = false;
            }
        }
    }
    return arrayNumbers;
}

function transformArray() {
    let arrayNumbers = saveNumbers();
    let num1 = 0;
    let num2 = 0;
    let operator = '';
    let flag = false;
        
    for (let i = 0; i < arrayNumbers.length; i){
        let aux = arrayNumbers.shift();
        
        if(flag === false) {
            if (aux !== '%' && aux !== '÷' && aux !== '×'
            && aux !== '−' && aux !== '+' && aux !== '=') {
                num1 = parseFloat(aux);                
                flag = true;
            }
            else {
                return 'Try with a number';
            }
        }
        else {
            if (aux !== '%' && aux !== '÷' && aux !== '×'
            && aux !== '−' && aux !== '+' && aux !== '=') {
                num2 = parseFloat(aux);
                num1 = operate(num1, num2, operator);
                showAnswer(roundDecimals(num1));                               
            }
            else if (aux !== '='){
                operator = aux;                
            }
        }               
    }   
    
}

function roundDecimals(number, decimals = 2) {
    let fractionalPart = number.toString().split('.')[1];
    if(!fractionalPart || fractionalPart.length <= 2){
        return number
    }
    else{
        return Number(number.toFixed(decimals));
    }
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
    location.reload();
}

function pressDel() {
    arrayDisplay.pop();
    displayValue = displayValue.substring(0, displayValue.length - 1);
    showOperate();
}

function pressPoint() {
    displayValue += '.';
    showOperate();
    arrayDisplay[displayValue.length-1] = '.';
    disabledPoint();
    
    console.log(arrayDisplay);
}

function disabledPoint() {
    let btnPoint = document.getElementById('btn-point');
    btnPoint.disabled = true;
}

function enabledPoint() {
    let btnPoint = document.getElementById('btn-point');
    btnPoint.disabled = false;
}

function pressAdd() {
    displayValue += '+';
    showOperate();
    arrayDisplay[displayValue.length-1] = '+';
    enabledPoint();
    console.log(arrayDisplay);
}

function pressSubtract() {
    displayValue += '−';
    showOperate();
    arrayDisplay[displayValue.length-1] = '−';
    enabledPoint();
    console.log(arrayDisplay);
}

function pressMultiply() {
    displayValue += '×';
    showOperate();
    arrayDisplay[displayValue.length-1] = '×';
    enabledPoint();
    console.log(arrayDisplay);
}

function pressDivide() {
    displayValue += '÷';
    showOperate();
    arrayDisplay[displayValue.length-1] = '÷';
    enabledPoint();
    console.log(arrayDisplay);
}

function presPercentage() {
    displayValue += '%';
    showOperate();
    arrayDisplay[displayValue.length-1] = '%';
    enabledPoint();
    console.log(arrayDisplay);
}

function pressEqual(){
    if(displayValue === ''){
        showAnswer('Error')
    }
    else {
        displayValue += '=';showOperate();
    arrayDisplay[displayValue.length-1] = '=';
    console.log(arrayDisplay);
    transformArray();
    displayValue = '';
    enabledPoint();
    }    
}

function press1() {
    displayValue += '1';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '1';
    console.log(arrayDisplay);
}

function press2() {
    displayValue += '2';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '2';
    console.log(arrayDisplay);
}

function press3() {
    displayValue += '3';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '3';
    console.log(arrayDisplay);
}

function press4() {
    displayValue += '4';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '4';
    console.log(arrayDisplay);
}

function press5() {
    displayValue += '5';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '5';
    console.log(arrayDisplay);
}

function press6() {
    displayValue += '6';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '6';
    console.log(arrayDisplay);
}

function press7() {
    displayValue += '7';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '7';
    console.log(arrayDisplay);
}

function press8() {
    displayValue += '8';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '8';
    console.log(arrayDisplay);
}

function press9() {
    displayValue += '9';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '9';
    console.log(arrayDisplay);
}

function press0() {
    displayValue += '0';
    showOperate();    
    arrayDisplay[displayValue.length-1] = '0';
    console.log(arrayDisplay);
}

function press00() {
    displayValue += '00';
    showOperate();    
    arrayDisplay[displayValue.length-2] = '0';
    arrayDisplay[displayValue.length-1] = '0';
    console.log(arrayDisplay);
}

