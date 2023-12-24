let buffer = '0';
let screen = document.querySelector('.display')
let runningTotal = '0'

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    rerender();
}
function handleNumber(number){
    if(buffer === '0'){
        buffer = number
    }
    else{
        buffer += number
    }
    console.log(buffer)
}
function handleMath(value){
    if(buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = intBuffer;
    }
    else{
        flushOperation(intBuffer);
    }
    
    previousOperator = value;
    buffer = '0'
}

function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal += intBuffer;
    }
    else if(previousOperator === '-'){
        runningTotal -= intBuffer;
    }
    else if(previousOperator === 'x'){
        runningTotal *= intBuffer;
    }
    else if(previousOperator === '/'){
        runningTotal /= intBuffer;
    }
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer =  '0'
            break;
        case '=':
            if(previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            buffer = runningTotal;
            runningTotal = '0'
        break;
        case '+':

        break;
        case '-':
        break;
        case '/':
        break;
        case 'x':
        break;
    }
}
function init(){
    console.log('teste')
    document
    .querySelector(".calc-buttons")
    .addEventListener("click", function(event){
        buttonClick(event.target.innerText);
    })
}
function rerender(){
    screen.innerText = buffer;
}
init(); 